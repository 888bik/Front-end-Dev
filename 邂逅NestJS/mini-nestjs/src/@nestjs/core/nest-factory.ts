import { Logger } from "./logger";
import { NestApplication } from "./nest-application";

export class NestFactory {
  static async create(module: any) {
    Logger.log("Starting Nest application...", "NestFactory");
    //传入根模块AppModule,创建app实例
    const app = new NestApplication(module);
    //返回app实例
    return app;
  }
}
