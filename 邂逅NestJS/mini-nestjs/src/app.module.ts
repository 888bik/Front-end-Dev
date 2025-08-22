import { Module } from "./@nestjs/common";
import { AppController } from "./app.controller";
import { DynamicConfigModule } from "./dynamicConfig.module";
import { LoggerController } from "./logger.controller";
import { LoggerModule } from "./logger.module";
import { UserModule } from "./user.module";

/**
 *AppModule组织和集中引入整个项目中用到的所有功能模块（feature modules），形成完整的依赖树，是整个应用的入口模块。
 */
@Module({
  imports: [DynamicConfigModule.footRoot("hello")],
  controllers: [AppController, LoggerController],
  providers: [],
})
export class AppModule {}
