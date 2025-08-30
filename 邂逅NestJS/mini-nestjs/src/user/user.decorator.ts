import { createParamsDecorator } from "../@nestjs/common";

export const User = createParamsDecorator((data, ctx) => {
  const req = ctx.switchToHttp().getRequest();
  return data ? req.user[data] : req.user;
});
