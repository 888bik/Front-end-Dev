var evalString1 = `var message = "Hello world";console.log(message);`;
eval(evalString1);
var evalString2 = `var message = "Hello world";return message;`;//不能使用return语句返回
console.log(eval(evalString2));

