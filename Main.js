import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./js/Director.js";

//初始化游戏的整个精灵，作为游戏的入口
export class Main {
    constructor() {
        this.canvas = document.getElementById("game_canvas");
        this.ctx = this.canvas.getContext("2d");
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));

        //不管调用多少次  只会执行一次getInstance这个函数  这个是es6的单列模式
        Director.getInstance();
    }

    onResourceFirstLoaded(map) {
        console.log(map);
    }
}