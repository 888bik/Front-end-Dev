//枚举成员的初始值默认为0,依次递增,也可以指定初始化,后面的值也是往后递增
enum Direction {
  LEFT = 1000,
  RIGHT,
  UP,
  DOWN,
  CENTER = "中间",
}

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("向左移动");
  }
}

//延迟求值
const returnNum = () => 91;

enum Items {
  Foo,
  Baz = 91,
  Bar = returnNum(),
}
console.log(Items.Foo, Items.Bar, Items.Baz);

enum Item {
  name = "bik",
  age = 20,
}
console.log(Item.age); //20
console.log(Item[20]); //age
console.log(Item.name); //bik
// console.log(Item["bik"]);//这样是不行的,只有枚举成员是数字类型才可以进行双向映射

//常量枚举
const enum Items2 {
  Bar,
  Baz,
  Foo,
}

console.log(Items2.Bar);
// console.log(Items2[0]); //与普通枚举的区别是,常量枚举只能通过枚举成员访问值,而不能通过值访问枚举成员
