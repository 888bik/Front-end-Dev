import multer from "multer";
import { Inject, Injectable } from "../common";
import { MULTER_MODULE_OPTIONS } from "./constants";
import { MulterModuleOptions } from "./multer-options.interface";

@Injectable()
export class MulterConfigService {
  constructor(
    @Inject(MULTER_MODULE_OPTIONS) private options: MulterModuleOptions
  ) {}
  // 创建 createMulterOptions 方法，返回配置选项
  createMulterOptions() {
    console.log("createMulterOptions", this.options);
    return this.options;
  }
  // 创建 getMulterInstance 方法，返回 multer 实例
  getMulterInstance() {
    // 调用 createMulterOptions 方法并传递给 multer 以创建并返回 multer 实例
    return multer(this.createMulterOptions());
  }
}
