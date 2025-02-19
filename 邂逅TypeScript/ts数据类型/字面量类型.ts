//message的类型为message world
let message: "hello world" = "hello world";

//此时将其他值赋值给message会报错
// message = "hello bik"

//默认情况下这么做是没有太大意义的,但是可以将多个类型联合在一起
type MoveAction = "left" | "right" | " up " | "down";
function Move(direction: MoveAction) {
  if (direction === " up ") {
    console.log("⬆️");
  } else if (direction === "down") {
    console.log("⬇️");
  } else if (direction === "left") {
    console.log("👈");
  } else {
    console.log("👉");
  }
}
Move("left");
Move("right");
Move(" up ");
Move("down");

type MethodType = "GET" | "POST";

const info = {
  url: "xxx",
  method: "GET",
};
function request(url: string, method: MethodType) {
  console.log(url);
  console.log(method);
}

//直接传递字面量,类型推导为"GET"
request("xxx", "GET");

//这里会报错,因为ts在对象字面量中会自动将属性类型推导为基本类型,如string,而不是具体的字面量类型,如GET
//将鼠标放到info标识符上,会发现method的类型为string
// request(info.url, info.method);

//解决方案一:将info.method断言为"GET"
request(info.url, info.method as "GET");

//解决方案二:显式的让info对象类型是一个字面量类型,这样ts推导的话就不会将method改为string
const info2: { url: string; method: "GET" } = {
  url: "xxx",
  method: "GET",
};
request(info2.url, info2.method);

//解决方案三:将info对象中的method属性断言为MethodType类型
const info3 = {
  url: "xxx",
  method: "GET" as MethodType,
};
request(info3.url, info3.method);

//解决方案四:as const 冻结对象结构,使属性成为字面量类型
//这里会发现info4中的所有属性变成只读属性了
const info4 = {
  url: "xxx",
  method: "POST",
} as const;
request(info4.url, info4.method);
export {};
