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
