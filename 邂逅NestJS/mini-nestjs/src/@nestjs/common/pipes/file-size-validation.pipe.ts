import { BadRequestException } from "../filters/http-exception";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { PipeTransform } from "../types/pipe-transform.interface";

export class FileSizeValidationPipe implements PipeTransform {
  transform(value, metadata?: ArgumentMetadata) {
    // 定义最大文件大小为 1MB
    const maxSize = 1 * 1024 * 24; // 1MB
    // 如果文件大小超过最大值，则抛出 BadRequestException 异常
    if (value.size > maxSize) {
      throw new BadRequestException("The file is too large");
    }
    return value;
  }
}
