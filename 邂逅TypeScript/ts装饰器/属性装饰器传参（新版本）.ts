function markField(type: string) {
  return function (target: undefined, context: ClassFieldDecoratorContext) {
    const name = String(context.name);
    console.log(`字段 ${name} 标记为类型 ${type}`);
  };
}

class Setting {
  @markField("string")
  title: string = "Hello";
}
