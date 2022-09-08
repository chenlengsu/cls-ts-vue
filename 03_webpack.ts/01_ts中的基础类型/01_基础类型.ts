(() => {
    // console.log('基础类型')
    // 布尔类型 --> boolean
    let flag: boolean = true
    // flag = 20 // 报错
    console.log(flag);

    // 数字类型 --> number
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    // a1 = '哈哈哈' //报错
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    // 字符串类型 --> string
    let str1: string = '床前明月光'
    let str2: string = '小明去开窗'
    let str3: string = '遇到一耳光'
    let str4: string = '牙齿掉光光'
    console.log(`${str1},${str2},${str3},${str4}`);
    // str4 = 10 //报错

    // 字符串与数字拼接
    let str5: string = '我有多少钱:'
    let num: number = 1232
    console.log(str5 + num);

    // 结论： ts一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其它类型的数据赋值给当前的这个变量中

    let und: undefined = undefined
    let nul: null = null
    console.log(und); // undefined
    console.log(nul); // null

    // let num2: number = undefined
    let num2: number = null
    console.log(num2); // null

    // 数组类型 --> string
    // 数组定义方式Ⅰ
    let arr1: number[] = [1, 2, 3, 4, 5, 6]
    // 数组定义方式Ⅱ
    let arr2: Array<number> = [100, 200, 300, 400]
    // 注意问题：数组定义后，里面的数组类型必须和定义数组的类型是一致的，否则有错误信息，也不会编译通过

    // 元组类型 --> string
    let arr3: [string, number, boolean] = ['string', 123.123, false]
    console.log('元组类型:', arr3)
    // 注意问题：元组类型在使用的时候，数据类型的位置与数据个数，应该和在定义元组的时候的数据类型及位置应该是一致的
    console.log('arr3的第0个位置是 string,非string类型调用 split 会报错"', arr3[0].split(''))
    console.log('arr3的第1个位置是 number,非number类型调用 toFixed 会报错"', arr3[1].toFixed(2))

    // 枚举类型
    // 枚举里面的每个数据都可以叫元素，每个元素都有自己的编号，编号是从0开始的，依次递增加1
    enum Color {
        red = 1,
        green,
        blue
    }
    let color: Color = Color.red
    console.log('枚举类型 编号：', color, Color.blue);
    console.log('枚举类型 的名字', Color[2]);
    // 小例子，枚举中的元素 可以是中文的数据值
    enum Gender {
        女, 男
    }
    // console.log(Gender.女)

    // any类型
    let anyStr: any = 101
    anyStr = 'haha,贼子'
    console.log('anyStr', anyStr);

    let anyArr: any[] = [100, '你在狗叫什么', false]
    console.log('anyArr', anyArr);
    // console.log('结果：报错，但是编译通过',anyArr[0].split())

    // void 。在函数声明的时候，小括号的后面使用：void,代表的是该函数没有任何的返回值
    function showMsg(): void {
        console.log('showMsg:我不想熬夜')
        // return 
        // return undefined
        return null
    }
    console.log(showMsg())

    // 定义 void类型的变量，可以接受一个undefined的值，但是意义不是很大
    // let vd: void = '报错'
    let vd: void = undefined
    console.log('void:', vd);

    // object类型
    // 定义一个函数，参数是object类型，返回值也是object类型
    function getObj(obj: object): object {
        console.log(obj);

        return {
            name: '索隆',
            age: 22
        }
    }

    // console.log(getObj({ name: '路非', age: 26 }));
    // console.log(getObj(123)); // error

    // 联合类型（union Types）表示取值可以为多种类型的一种
    // 需求1：定义一个函数得到一个数字或字符串值的字符串形式值
    // function getStr(str: number | string): string {
    //     return str.toString()
    // }
    // console.log(getStr('你是小笨蛋'))

    // 需求2：定义一个函数得到一个数字或字符串值的长度
    // 类型断言
    // 语法1 <类型>变量名
    // 语法2 变量 as 类型

    function getStr(str: number | string): number {
        // return str.toString().length

        if ((<string>str).length) {
            return (str as string).length
        } else {
            return str.toString().length
        }
    }

    console.log('类型断言：字符串', getStr('哈哈哈，我快疯了'))
    console.log('类型断言：数字', getStr(5469523))

    // 类型推断 是在没有指定明确类型的时候，编译器推测出一个类型

    // let txt = 526 // 类型推断 为 number
    // txt = '电脑好难用' // error 不能将 string 赋值给 number

    let txt; // 类型推断为 any


})()