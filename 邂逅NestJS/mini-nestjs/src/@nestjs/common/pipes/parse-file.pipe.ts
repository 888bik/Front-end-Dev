import { BadRequestException } from "../filters/http-exception";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { FileValidator } from "../types/file-validator.interface";
import { PipeTransform } from "../types/pipe-transform.interface";
export interface ParseFilePipeOptions {
  validators?: FileValidator[];
}
export class ParseFilePipe implements PipeTransform {
  // 构造函数，接受一个ParseFilePipeOptions对象，默认值为空对象
  constructor(private options: ParseFilePipeOptions = {}) {}
  async transform(value: any, metadata?: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException("No file submitted");
    }
    if (this.options.validators) {
      for (const validator of this.options.validators) {
        await validator.validate(value);
      }
    }
    return value;
  }
}
