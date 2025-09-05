import { plainToInstance } from "class-transformer";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { validate } from "class-validator";
import { Injectable } from "../decorators/injectable.decorator";
import { PipeTransform } from "../types/pipe-transform.interface";
import { BadRequestException } from "../filters/http-exception";

@Injectable()
export class ClassValidationPipe implements PipeTransform {
  async transform(value: any, metadata?: ArgumentMetadata) {
    //metatype为参数的类型
    const { metatype } = metadata;
    //如果不存在则说明不用校验
    if (!metatype || !this.needToValidate(metatype)) {
      return value;
    }
    //将普通对象转化为实例
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException("Validation failed");
    }
    return value;
  }

  private needToValidate(metatype): boolean {
    //不需要校验的类型
    const types = [String, Number, Boolean, Array, Object];
    return !types.includes(metatype);
  }
}
