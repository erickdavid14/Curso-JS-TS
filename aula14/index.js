let num1 = 0.5;
let num2 = 0.1;

num1 += num2;// 0.5 + 0.1 = 0.6
num1 += num2;// 0.7
num1 += num2;// 0.8
num1 += num2;// 0.9
num1 += num2;//  1

num1 = Number(num1.toFixed(2));
console.log(num1);

