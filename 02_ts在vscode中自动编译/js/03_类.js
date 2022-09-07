// ts 中 书写js 类
(() => {
    // 定义一个类型
    class Person {
        // 定义一个构造器函数
        constructor(firstName, lastName) {
            // 更新数据
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + '-' + lastName;
        }
    }
    function showFullName(person) {
        return person.firstName + '-' + person.lastName;
    }
    const person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
