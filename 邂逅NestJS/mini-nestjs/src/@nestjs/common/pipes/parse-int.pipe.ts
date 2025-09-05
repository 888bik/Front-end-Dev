import { BadRequestException } from "../filters/http-exception";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { PipeTransform } from "../types/pipe-transform.interface";

//将路由参数转化为number类型
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata?: ArgumentMetadata) {
    const val = parseInt(value);
    if (isNaN(val)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not an integer.`
      );
    }
    return val;
  }
}
