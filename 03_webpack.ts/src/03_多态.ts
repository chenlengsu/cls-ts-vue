// 多态： 父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
    // 定义一个父类
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }

        run(distance: number = 0) {
            console.log(`跑了${distance}这么远的距离,${this.name}`);
        }
    }

    // 定义一个子类
    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }

        run(distance: number = 5) {
            console.log(`跑了${distance}这么远的距离,${this.name}`);
        }
    }

    // 定义一个子类
    class Pig extends Animal {
        constructor(name: string) {
            super(name)
        }

        run(distance: number = 10) {
            console.log(`跑了${distance}这么远的距离, ${this.name}`);
        }
    }

    const animal: Animal = new Animal('动物')
    animal.run()
    // 实例化子类
    const dog: Animal = new Dog('大狗狗')
    dog.run()
    const pig: Animal = new Pig('小粉猪')
    pig.run()

    // 该函数需要的参数是Animal 类型
    function showRun(ani: Animal) {
        ani.run()
    }
    showRun(dog)
    showRun(pig)
})()