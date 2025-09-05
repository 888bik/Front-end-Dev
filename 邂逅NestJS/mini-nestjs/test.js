// function foo() {
//   var temp_object = new Object();
//   temp_object.x = 1;
//   temp_object.y = 2;
//   temp_object.array = new Array(200000);
//   /**
//    *   使用temp_object
//    */
//   return function () {
//     debugger;
//     console.log(temp_object.x);
//   };
// }
// function varTest() {
//   var x = 1;
//   if (true) {
//     var x = 2; // 同样的变量!
//     console.log(x); // 2
//   }
//   console.log(x); // 2
// }
// varTest();
// console.log(x);
// let myname = "极客时间";
// {
//   console.log(myname);
//   let myname = "极客邦";
// }
// function bar() {
//   console.log(myName);
// }
// function foo() {
//   var myName = " 极客邦 ";
//   bar();
// }
// var myName = " 极客时间 ";
// foo();
// function foo() {
//   var myName = " 极客时间 ";
//   let test1 = 1;
//   const test2 = 2;
//   var innerBar = {
//     getName: function () {
//       console.log(test1);
//       return myName;
//     },
//     setName: function (newName) {
//       myName = newName;
//     },
//   };
//   return innerBar;
// }
// var bar = foo();
// bar.setName(" 极客邦 ");
// bar.getName();
// console.log(bar.getName());
// function bar() {
//   if (1) {
//     console.log(myName); // "Chrome 浏览器"
//   }
// }
// let myName = "Chrome 浏览器";
// bar();

// var bar = {
//   myName: "time.geekbang.com",
//   printName: function () {
//     console.log(this.my);
//   },
// };
// function foo() {
//   let myName = " 极客时间 ";
//   return bar.printName;
// }
// let myName = " 极客邦 ";
// let _printName = foo();
// _printName();
// bar.printName();

var myObj = {
  name: " 极客时间 ",
  showThis: function () {
    console.log(this);
    var self = this;
    function bar() {
      self.name = " 极客邦 ";
    }
    bar();
  },
};
myObj.showThis();
console.log(myObj.name);
console.log(window.name);
