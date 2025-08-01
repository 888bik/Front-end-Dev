function LogParam(target: any, methodName: string, paramIndex: number) {
  console.log(`方法 ${methodName} 的第 ${paramIndex + 1} 个参数被装饰`);
}

class Person {
  greet(@LogParam name: string) {}
}

export {};
