// 类 类型：类的类型，类的类型可以通过接口来实现
(() => {
    // 定义一个接口
    interface IFLy {
        fly()
    }

    // 定义一个类，这个类的类型就是上面定义的接口（实际上也可以理解为，IFly 接口约束了当前的 Person 类）
    class Person implements IFLy {
        // 实现接口中的方法
        fly() {
            console.log('你在狗叫什么')
        }
    }
    // 实例化对象
    const person = new Person()
    person.fly()

    interface ISwim {
        swim()
    }

    // 当前这个类 可以实现多个接口，一个类同时可以被多个接口约束
    class Person2 implements IFLy, ISwim {
        fly() {
            console.log('fly2');

        }
        swim() {
            console.log('swim');
        }
    }

    const person2 = new Person2()
    person2.fly()
    person2.swim()

    // 总结：类可以通过接口的方式，来定义当前这个类的类型，类可以实现一个接口，也可以实现多个接口，要注意，接口中的内容都要真正的实现

    // 定义一个接口，继承其他的多个接口
    interface IMyFlyAndSwim extends IFLy, ISwim { }

    class Person3 implements IMyFlyAndSwim {
        fly() {
            console.log('fly3');

        }
        swim() {
            console.log('swim3');
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swim()

    // 总结：接口和接口之间叫继承（使用extends关键字）,类和接口之间叫实现（使用的是implements）
})()