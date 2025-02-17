//起别名的主要目的是复用对象类型或者联合类型,避免重复编写
type IDtype = string | number;
function print(id: IDtype) {
  console.log(id);
}
print(123);
print("abc");

type Point = {
  x: number;
  y: number;
};
function printCoordinate(point: Point) {
  console.log(point.x);
  console.log(point.y);
}
printCoordinate({ x: 1, y: 2 });
export {};
