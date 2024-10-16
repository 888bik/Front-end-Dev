// function foo(name,age) {
//   console.log(name+age);
//   //arguments保存了这个函数的所有形参
//   console.log(arguments);
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }
// foo("bik",18);
// var names = ["abc", "cba", "nba", "mba"]
// var name1 = ["bik","dik","cik"]
// var newNames = names.slice() // this -> names
// var newName = [].slice.apply(name1);
// console.log(newNames);
// console.log(newName);

//箭头函数是不绑定arguments的,所以会向上层找
console.log(arguments);

var bar = (x,y,z) => {
  console.log(arguments);
}
bar(10, 20, 30);