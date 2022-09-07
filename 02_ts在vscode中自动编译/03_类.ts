// ts 中 书写js 类

(() => {
    // 定义一个接口
    interface Iperson {
        firstName: string
        lastName: string
    }

    // 定义一个类型
    class Person {
        // 定义公共属性
        firstName: string
        lastName: string
        fullName: string

        // 定义一个构造器函数
        constructor(firstName: string, lastName: string) {
            // 更新数据
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = firstName + '-' + lastName
        }
    }

    function showFullName(person: Iperson) {
        return person.firstName + '-' + person.lastName
    }
    const person = new Person('诸葛', '孔明')
    
    console.log(showFullName(person))
})()