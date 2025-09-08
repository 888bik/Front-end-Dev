import { DynamicModule, Global, Module } from "../common";
import { MULTER_MODULE_OPTIONS } from "./constants";
import { MulterConfigService } from "./multer-config.service";
import { MulterModuleOptions } from "./multer-options.interface";

@Global()
@Module({})
export class MulterModule {
  // 定义一个静态方法 register，接收 MulterModuleOptions 类型的参数，并返回 DynamicModule
  static register(options: MulterModuleOptions): DynamicModule {
    return {
      // 指定该模块
      module: MulterModule,
      // 定义提供者
      providers: [
        {
          // 提供 MULTER_MODULE_OPTIONS 令牌
          provide: MULTER_MODULE_OPTIONS,
          // 使用传入的 options 值
          useValue: options,
        },
        // 注册 MulterConfigService 服务
        MulterConfigService,
      ],
      // 导出 MulterConfigService 服务
      exports: [MulterConfigService],
    };
  }
}
