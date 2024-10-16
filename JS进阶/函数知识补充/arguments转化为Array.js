//方式一:遍历arguments
var newArray1 = [];
function foo(name,age,height,address) {
  var length = arguments.length;
  for (var i = 0; i < length; i++){
    newArray.push(arguments[i]);
  }
}
foo("bik",18,1.88,"清远");
console.log(newArray);

//方式二:调用数组slice函数的call方法
function bar(name,age,height,address) {
  console.log(arguments);
  var newArray2 = [].slice.apply(arguments);//让this指向arguments对象,间接的让这个arguments对象调用slice这个方法
  console.log(newArray2);
}
bar("bik",1.88,18,"清远");

//方式三:Array.from/[...arguments]
function baz(name,age,height,address) {
  console.log(arguments);
  var newArray3 = Array.from(arguments);
  console.log(newArray2);
}
baz("bik",1.88,18,"清远");

function baz(name,age,height,address) {
  console.log(arguments);
  var newArray3 = [...arguments]
  console.log(newArray3);
}
baz("bik",1.88,18,"清远");