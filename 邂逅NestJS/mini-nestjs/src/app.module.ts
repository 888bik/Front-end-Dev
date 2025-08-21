import { Module } from "./@nestjs/common";
import { AppController } from "./app.controller";
import { LoggerModule } from "./logger.module";
import { UserModule } from "./user.module";

/**
 *AppModule组织和集中引入整个项目中用到的所有功能模块（feature modules），形成完整的依赖树，是整个应用的入口模块。
 */
@Module({
  controllers: [AppController],
  providers: [],
  imports: [LoggerModule],
})
export class AppModule {}
