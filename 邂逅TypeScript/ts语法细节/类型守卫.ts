let Foo: string | number;

function isString(input: any): input is string {
  //如果返回true,则input就是字符串
  return typeof input === "string";
}

let p = "hello";
let v = 99;

if (isString(p)) {
  p = p.charAt(1);
}
if (isString(v)) {
}
export {};
