// class C {
//   accessor x = 1;
// }
// // 等同于
// class C2 {
//   #x = 1;
//   get x() {
//     return this.#x;
//   }
//   set x(val) {
//     this.#x = val;
//   }
// }
function logAccessor(value: any, context: ClassAccessorDecoratorContext) {
  console.log("访问器属性名称：", context.name);
}

class Person {
  @logAccessor
  accessor name: string = "Tom";
}

export {};
