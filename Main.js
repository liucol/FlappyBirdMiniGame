import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./js/Director.js";
import { BackGround } from "./js/runtime/BackGround.js";

//初始化游戏的整个精灵，作为游戏的入口
export class Main {
    constructor() {
        this.canvas = document.getElementById("game_canvas");
        this.ctx = this.canvas.getContext("2d");
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));

        //不管调用多少次  只会执行一次getInstance这个函数  这个是es6的单列模式
        //Director.getInstance();

        // let image = new Image();
        // image.src = "../res/background.png";
        // //图片加载完成之后调用图片绘制方法
        // image.onload = () => {
        //     this.ctx.drawImage(
        //         image, //图片对象
        //         0, //剪裁坐标
        //         0,
        //         image.width, //剪裁宽度
        //         image.height,
        //         0, //放置坐标
        //         0,
        //         image.width, //图片宽高
        //         image.height
        //     )
        // }

    }

    onResourceFirstLoaded(map) {
        let background = new BackGround(this.ctx, map.get("background"));
        background.draw();
    }
}