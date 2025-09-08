import { BadRequestException } from "../filters/http-exception";
import { FileValidator } from "../types/file-validator.interface";
// 定义 FileTypeValidatorOptions 接口，包含 fileType 字符串类型的属性
export interface FileTypeValidatorOptions {
  fileType: string;
}
export class FileTypeValidator implements FileValidator {
  constructor(private options: FileTypeValidatorOptions) {}
  async validate(file: any): Promise<void> {
    if (file.mimetype !== this.options.fileType) {
      // 抛出 BadRequestException 异常，并提示验证失败
      throw new BadRequestException(
        `Validation failed (expected type is ${this.options.fileType})`
      );
    }
  }
}
