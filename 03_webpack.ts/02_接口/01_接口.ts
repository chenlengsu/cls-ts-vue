// 接口是对象的状态（属性）和行为（方法）的抽象（描述）
// 接口是一种类型\规范\规则\能力\约束
(() => {
    /* 
        id是number类型, 必须有, 只读的
        name是string类型, 必须有
        age是number类型, 必须有
        sex是string类型, 可以没有
    */
    // 定义一个接口
    interface IPerson {
        readonly id: number, // 表示只读，不允许操作
        name: string,
        age: Number,
        sex?: String // ？ 表示可选，可以有可以没有
    }
    const person: IPerson = {
        id: 1,
        name: '小甜甜',
        age: 18,
        // sex: '女'
    }

    // console.log('更改前的 接口：', person)
    // person.id = 10
    // person.sex = '女' // true
    // person.money = 2123 // error
    console.log('更改后的 接口', person);

})()