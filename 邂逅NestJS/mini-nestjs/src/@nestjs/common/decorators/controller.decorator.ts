import "reflect-metadata";
//该装饰器接收路径前缀,路径前缀可以为空、对象、字符串
export interface ControllerOptions {
  prefix?: string;
}
export function Controller(): ClassDecorator; //传空
export function Controller(prefix: string): ClassDecorator; //传递字符串
export function Controller(options: ControllerOptions): ClassDecorator; //传递对象
export function Controller(OptionPrefix?: string | ControllerOptions) {
  let options: ControllerOptions = {};
  if (typeof OptionPrefix === "string") {
    options.prefix = OptionPrefix;
  } else if (typeof OptionPrefix === "object") {
    options.prefix = OptionPrefix.prefix;
  }

  return function (target: Function) {
    //给这个控制器类添加路径前缀元属性
    Reflect.defineMetadata("prefix", options.prefix || "", target);
  };
}
