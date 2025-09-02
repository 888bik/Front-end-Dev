import { CanActivate } from "./@nestjs/common/can-activate.interface";
import { ExecutionContext } from "./@nestjs/common/execution-context.interface";
import { Inject, Injectable } from "./@nestjs/common";
import { Reflector } from "./@nestjs/core/reflector";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get("roles", context.getHandler());
    //role不存在则说明不用校验权限,放行
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = { roles: [request.query.roles] };
    // 检查用户角色是否匹配所需角色
    return matchRoles(roles, user.roles);
  }
}
function matchRoles(
  allRoles: string[],
  queryRoles
): boolean | Promise<boolean> {
  return queryRoles.some((roles) => allRoles.includes(roles));
}
