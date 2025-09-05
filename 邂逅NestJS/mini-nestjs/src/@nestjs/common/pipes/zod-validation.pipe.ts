import { ZodType } from "zod";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { PipeTransform } from "../types/pipe-transform.interface";
import { BadRequestException } from "../filters/http-exception";

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}
  transform(value: any, metadata?: ArgumentMetadata) {
    try {
      // 使用 ZodSchema 进行解析和验证，如果通过则返回解析后的值
      return this.schema.parse(value);
    } catch (error) {
      // 如果解析失败，则抛出 BadRequestException 异常，并显示 'Validation failed' 错误信息
      throw new BadRequestException("Validation failed");
    }
  }
}
