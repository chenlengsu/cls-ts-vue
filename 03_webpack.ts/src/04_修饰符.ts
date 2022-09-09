// 修饰符：类中的成员的修饰符。主要是描述类中的成员（属性，构造函数，方法）的可访问性
// 类中的成员都有自己默认的访问修饰符：public
// public（公共） :类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
// private （私有）:类中成员如果使用 private修饰符，那么外部是无法访问这个成员数据的。当然子类中也是无法访问该成员数据的
//  protected （受保护的）:类中的成员如果使用protected 来修饰，那么外部是无法访问这个成员数据的，当然子类中是可以访问该成员数据的
(() => {
    class Person {
        // 属性 public 修饰了属性成员
        // public name: string
        // 属性 private 修饰了属性成员
        // private name: string
        // 属性 protected 修饰了属性成员
        protected name: string
        public constructor(name: string) {
            this.name = name
        }
        // 方法
        public eat() {
            console.log('嗯，这个骨头真好吃', this.name)
        }
    }

    // 定义子类
    class Student extends Person {
        constructor(name: string) {
            super(name)
        }
        play() {
            console.log('我喜欢玩游戏', this.name);
        }
    }

    const person = new Person('大蛇丸') // 此时就相当于在调用 constrctor
    // 类的外部可以访问类中的属性成员
    // console.log(person.name)
    person.eat()

    const student = new Student('嘿嘿')
    student.play()
    // console.log(student.name); // protected 修饰符下 无法访问 name

})()