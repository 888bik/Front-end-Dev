//未柯里化的函数
// function foo(a,b,c) {
//   return a + b + c;
// }
// var result = foo(10,20,30);
// console.log(result);

// //柯里化处理的函数
// function bar(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     }
//   }
// }
// var sum = bar(10)(20)(30)
// console.log(sum);

// //柯里化+箭头函数的使用
// var baz = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     }
//   }
// }
// var total = baz(10)(20)(30);
// console.log(total);
// //箭头函数优化
// var baz = a => b => c => a + b + c;
// var total = baz(10)(20)(30);
// console.log(total);
// function add(x) {
//   x += 2;
//   return function (y) {
//     y *= 2;
//     return function (z) {
//       z **= z;
//       return x + y + z;//本质上利用闭包+类递归
//     }
//   }
// }
// var result = add(2)(2)(2);
// console.log(result);
// //箭头函数
var add2 = x => {
  x += 2;
  return y => {
    y *= 2;
    return z => {
      z **= 2;
      return x + y + z;
    }
  }
}
var sum = add2(2)(2)(2);
console.log(sum);
//箭头函数
var add2 = x => {
  x += 2;
  return y => {
    y *= 2;
    return z => {
      z **= 2;
      return x + y + z;
    }
  }
}
var bar = add2(10);//在之后使用返回的函数时,我们不需要再继续传入x了
var result1 = bar(2)(2);
var result2 = bar(40)(30);
console.log(result1);
console.log(result2);



