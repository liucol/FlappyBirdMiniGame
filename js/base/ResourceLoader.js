import { Resources } from "./Resources.js";

//资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
export class ResourceLoader {
    constructor() {
        this.map = new Map(Resources);
        for (let [key, value] of this.map) {
            //新建一个图片对象
            const image = new Image();
            //设置图片的路径
            image.src = value;
            //把map对象的值换成image对象
            this.map.set(key, image);
        }
    }

    onLoaded(callback) {
        let loadedCount = 0;
        for (let value of this.map.values()) {
            value.onload = () => {
                loadedCount++;
                if (loadedCount >= this.map.size) {
                    //图片加载完成调用回调函数 并传入图片资源对象
                    callback(this.map);
                }
            }
        }
    }


    //创建一个静态工厂
    static create() {
        return new ResourceLoader();
    }
}