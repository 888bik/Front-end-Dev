import { APP_FILTER } from "@nestjs/core";
import {
  CustomExceptionFilter,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from "./@nestjs/common";
import { Module } from "./@nestjs/common";
import { AppController } from "./app.controller";
import { DynamicConfigModule } from "./dynamicConfig.module";
import { LoggerController } from "./logger/logger.controller";
import { loggerFunction } from "./logger/logger.function.middleware";
import { LoggerMiddleware } from "./logger/logger.middleware";
import { LoggerModule } from "./logger/logger.module";
import { LoggerService } from "./logger/logger.service";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/user.service";
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from "./@nestjs/core";
import { CustomPipe } from "./@nestjs/common/pipes/custom.pipe";
import { ValidationPipe } from "./@nestjs/common/pipes";
import { AuthGuard } from "./auth.guard";
import { Logging1Interceptor } from "./@nestjs/common/interceptors/logging1.interceptor";
import { Logging4Interceptor } from "./@nestjs/common/interceptors/logging4.interceptor";
import { MulterModule } from "./@nestjs/platform-express";
// import { UserController } from "./user/user.controller";

/**
 *AppModule组织和集中引入整个项目中用到的所有功能模块（feature modules），形成完整的依赖树，是整个应用的入口模块。
 */
@Module({
  imports: [
    MulterModule.register({
      dest: "./files",
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: "prefix",
      useValue: "prefix",
    },
    // {
    //   provide:APP_FILTER,
    //   useClass:CustomExceptionFilter
    // }
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: Logging4Interceptor,
    },
  ],
})
export class AppModule {}
