//在ES6中,可用let声明一个变量
//let,var区别:let声明的变量有块级作用域的约束

let array = [1, 2, 3, 4];
for (var index = 0; index < array.length; index++) {
    let element = array[index];
    console.log(index + ":" + element);
}

console.log(index);//4

for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(i + ":" + element);
}

//console.log(i); //ReferenceError: i is not defined