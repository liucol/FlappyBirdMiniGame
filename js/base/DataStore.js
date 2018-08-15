//变量缓存器，方便我们在不同的类中访问和修改变量
export class DataStore {
    //定义一个静态方法，调用该方法不需要实例化该类
    static getInstance() {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    constructor() {
        this.map = new Map();
    }

    put(key, value) {
        this.map.set(key, value);
        //可以链式调用put方法
        return this;
    }

    get(key) {
        return this.map.get(key);
    }

    destroy() {
        for (let value of this.map.values()) {
            value = null;
        }
    }

}