import { Module } from "./@nestjs/common";
import { AppController } from "./app.controller";
import { LoggerService, UseValueService, UseFactory } from "./logger.service";
import { UserController } from "./user.controller";

/**
 *AppModule组织和集中引入整个项目中用到的所有功能模块（feature modules），形成完整的依赖树，是整个应用的入口模块。
 */
@Module({
  controllers: [AppController, UserController],
  providers: [
    {
      provide: "SUFFIX",
      useValue: "suffix",
    },
    // LoggerService, //这种写法等同于下面的写法
    {
      provide: LoggerService,
      useClass: LoggerService,
    },
    {
      provide: "StringToken",
      useValue: new UseValueService("suffix"),
    },
    {
      provide: "FactoryToken",
      inject: ["prefix1", "SUFFIX"],
      useFactory: (prefix1, prefix2) => new UseFactory(prefix1, prefix2),
    },
  ],
})
export class AppModule {}
