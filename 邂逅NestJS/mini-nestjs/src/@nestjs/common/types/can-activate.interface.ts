import { ExecutionContext } from "./execution-context.interface";

export interface CanActivate {
  // 定义 canActivate 方法，接受一个 ExecutionContext 参数，返回 boolean 或 Promise<boolean>
  canActivate(context: ExecutionContext): boolean | Promise<boolean>;
}

