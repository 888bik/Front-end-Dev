import "reflect-metadata";
// 类装饰器
function classDecorator(target: any) {}
// 参数装饰器
function paramDecorator(
  target: any,
  propertyKey: string | undefined,
  parameterIndex: number
) {}
// 属性装饰器
function propDecorator(target: any, propertyKey: string) {}
// 方法装饰器
function methodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {}

@classDecorator
class Person {
  @propDecorator
  name: string;
  age: number;
  constructor(@paramDecorator name: string, @paramDecorator age: number) {
    this.name = name;
    this.age = age;

    console.log("Example instance created");
  }
  @methodDecorator
  sayHello(): string {
    return "hello";
  }
}
// 获取属性的类型元数据
const propertyType = Reflect.getMetadata(
  "design:type",
  Person.prototype,
  "sayHello"
);
console.log("Property type:", propertyType.name);

const paramTypes = Reflect.getMetadata("design:paramtypes", Person);
console.log(
  "Constructor param types:",
  paramTypes.map((type: any) => type.name)
);

const returnType = Reflect.getMetadata(
  "design:returntype",
  Person.prototype,
  "sayHello"
);
console.log("Method return type:", returnType.name);

// Property type: Function
// Constructor param types: [ 'String', 'Number' ]
// Method return type: String
