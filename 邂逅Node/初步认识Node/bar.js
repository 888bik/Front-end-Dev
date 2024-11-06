const name = "bik"
const age = 18
const address  = "清远"

//下面这种写法相当于重新创建了一个对象,与exports对象再也没有关系了(常用)
module.exports = {
  name,
  age,
  address
}
console.log(module.exports.name);
console.log(module.exports.age);
console.log(module.exports.address);

//如果这时候修改exports,是不会影响module.exports的
exports.age = 999;
console.log(exports.age);