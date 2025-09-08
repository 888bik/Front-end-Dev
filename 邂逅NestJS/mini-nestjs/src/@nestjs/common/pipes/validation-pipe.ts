import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  Inject,
} from "../";
import { validate, ValidationError } from "class-validator";
import { plainToInstance } from "class-transformer";

export class ValidationPipe implements PipeTransform<any> {
  constructor(@Inject("prefix") private prefix) {}

  async transform(value: any, { metatype }: ArgumentMetadata) {
    // 如果没有元类型或者元类型不需要验证，则直接返回值
    if (!metatype || !this.needToValidate(metatype)) {
      return value;
    }
    // 将普通对象转换为类实例
    const object = plainToInstance(metatype, value);
    // 验证对象
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(this.formatErrors(errors));
    }
    return value;
  }
  // 检查给定的元类型是否需要验证
  private needToValidate(metatype: Function): boolean {
    // 需要排除的原生类型
    const types: Function[] = [String, Boolean, Number, Array, Object];
    // 如果元类型在排除列表中，则不需要验证
    return !types.includes(metatype);
  }
  // 格式化验证错误信息
  private formatErrors(errors: ValidationError[]) {
    // 将每个错误信息格式化为字符串，并用逗号分隔
    return errors
      .map((err) => {
        for (const property in err.constraints) {
          return `${err.property} - ${err.constraints[property]}`;
        }
      })
      .join(", ");
  }
}
