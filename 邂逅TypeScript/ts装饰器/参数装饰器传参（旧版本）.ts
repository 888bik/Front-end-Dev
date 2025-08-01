function LogParam(value: string) {
  return function (target: any, key: string, index: number) {
    console.log(`${value}：方法 ${key} 的第 ${index + 1} 个参数`);
  };
}
class API {
  get(@LogParam("token参数") token: string) {
    console.log("调用API");
  }
}

export {};
