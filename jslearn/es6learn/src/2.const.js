//在ES6中,可用const关键字去声明一个常量
//const声明一个常量:const指向所声明量的地址,常量为基本数据类型时不可修改;常量为引用数据类型时,引用数据类型里面的属性可以修改或是新增(参考Java变量的基本特性)

const a = 3;
//a = 4;TypeError: Assignment to constant variable.

const obj = {
    "name": "duke",
    "age": 18
}

/*
TypeError: Assignment to constant variable.
obj = {
    "name": "duke",
    "age": 18
}
*/

obj.age = 17;
console.log(obj.age); //17

let array = [1, 2];
//对于每一次循环而言,each都被赋予了一个代表index的数字常量
for (let i = 0; i < array.length; i++) {
    const each = array[i];
    //each = 3;TypeError: Assignment to constant variable.
    console.log(each);
}