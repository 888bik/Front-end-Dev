import { BadRequestException } from "../filters/http-exception";
import { FileValidator } from "../types/file-validator.interface";

export interface MaxFileSizeValidatorOptions {
  // 最大文件大小（以字节为单位）
  maxSize: number;
}

export class MaxFileSizeValidator implements FileValidator {
  constructor(private options: MaxFileSizeValidatorOptions) {}
  async validate(file: any): Promise<void> {
    if (file.size > this.options.maxSize) {
      throw new BadRequestException(
        `Validation failed (expected size is less than ${this.options.maxSize})`
      );
    }
  }
}
