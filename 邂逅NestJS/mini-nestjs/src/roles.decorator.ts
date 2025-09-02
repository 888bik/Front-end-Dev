import { SetMetadata } from "./@nestjs/common";

export const Roles = (...roles: string[]) => {
  //SetMetadata返回一个装饰器函数
  //return SetMetadata 相当于 return function(){}
  return SetMetadata("roles", roles);
};
