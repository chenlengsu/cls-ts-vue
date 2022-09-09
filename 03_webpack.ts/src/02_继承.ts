// 继承：类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B类，那么此时A类叫做子类，B类叫做基类
// 子类 ---> 派生类
// 基类 ---> 超类（父类）
// 一旦发生了继承的关系，就出现了父子类的关系（叫法）
(() => {
    // console.log('继承');
    // 定义一个类
    class Person {
        // 定义属性
        name: string
        age: number
        gender: string
        // 定义构造函数
        constructor(name: string = '小明', age: number = 17, gender: string = '男') {
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定义实例方法
        sayHi(str: string) {
            console.log(`我是：${this.name},${str}`)
        }
    }

    // 定义一个继承person的类
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            super(name, age, gender)
        }

        sayHi() {
            console.log('我是学生类中的 sayHi 方法')
            super.sayHi('哈哈')
        }
    }

    // 实例化
    const person = new Person()
    const student = new Student('小甜甜', 16, '女')
    student.sayHi()

})()