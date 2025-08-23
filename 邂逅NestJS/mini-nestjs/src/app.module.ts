import {
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from "./@nestjs/common";
import { Module } from "./@nestjs/common";
import { AppController } from "./app.controller";
import { DynamicConfigModule } from "./dynamicConfig.module";
import { LoggerController } from "./logger.controller";
import { loggerFunction } from "./logger.function.middleware";
import { LoggerMiddleware } from "./logger.middleware";
import { LoggerModule } from "./logger.module";
import { LoggerService } from "./logger.service";
import { UserModule } from "./user.module";
import { UserService } from "./user.service";

/**
 *AppModule组织和集中引入整个项目中用到的所有功能模块（feature modules），形成完整的依赖树，是整个应用的入口模块。
 */
@Module({
  imports: [LoggerModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: "app/1", method: RequestMethod.GET })
      .forRoutes(AppController);
  }
}
