var Obj = {
  toString() {
    return "200";
  },
  valueOf() {
    return 100;
  },
};
var res = Obj + "3";
console.log(res);//1003
console.log(typeof res);//string
