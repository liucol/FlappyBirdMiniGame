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
            value.onLoaded = () => {
                loadedCount++;
                if (loadedCount >= this.map.size) {
                    callback(this.map)
                }
            }
        }

    }
}