// 类：可以理解为模板，通过模板可以实例化对象
// 面向对象的编程思想
(() => {
    class Person {
        name: string
        age: number
        gender: string

        // 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进项初始化
        constructor(name: string = '小天天', age: number = 19, gender: string = '女') {
            // 更新对象中的属性数据
            this.name = name
            this.age = age
            this.gender = gender
        }

        // 定义实例方法
        sayHi(str: string) {
            console.log(`大家好，我是${this.name},今年已经${this.age}岁了，我是个${this.gender}孩子,` + str)
        }
    }

    const person = new Person('路费', 23, '男')
    person.sayHi('你叫什么名字啊')
})()