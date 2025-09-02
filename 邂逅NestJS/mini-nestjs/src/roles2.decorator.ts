import { Reflector } from "./@nestjs/core/reflector";

// 使用 Reflector 类的 createDecorator 方法创建一个新的装饰器 Roles2
// 该装饰器的泛型类型为 string[]，即该装饰器接受一个字符串数组作为参数
export const Roles2 = Reflector.createDecorator<string[]>();
