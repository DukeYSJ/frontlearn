//在ES6中,可用const关键字去声明一个常量;可用let声明一个变量
//let,var区别:let声明的变量有块级作用域的约束
//const声明一个常量:const指向所声明量的地址,常量为基本数据类型时不可修改;常量为引用数据类型时,引用数据类型里面的属性可以修改或是新增(参考Java变量的基本特性)

let array = [1, 2, 3, 4];
for (var index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(index + ":" + element);
}

console.log(index);//4

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(i + ":" + element);
}

//console.log(i); //ReferenceError: i is not defined