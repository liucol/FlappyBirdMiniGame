//精灵的基类，负责初始化精灵加载的资源和大小以及位置
export class Sprite {
    //初始化
    constructor(ctx = null,
        img = null,
        srcX = 0,
        srcY = 0,
        srcW = 0,
        srcH = 0,
        x = 0, y = 0,
        width = 0, height = 0
    ) {
        /**
         * img: image对象
         * srcX：剪裁x坐标
         * srcY：剪裁y坐标
         * srcW：剪裁宽度
         * srcH：剪裁高度
         * x：图片放置x坐标
         * y：图片放置y坐标
         * width：要使用的宽度
         * height: 要使用的高度
         */
        this.ctx = ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        this.ctx.drawImage(
            this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            this.x,
            this.y,
            this.width,
            this.height
        );

    }
}