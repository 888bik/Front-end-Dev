var obj = {
  name: "bik",
  age: 18,
}
console.log(obj.name);//原本需要这样做才能访问到name和age
console.log(obj.age);

with (obj) {
  console.log(name);
  console.log(age);
}


