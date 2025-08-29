import { BadRequestException } from "../http-exception";
import { PipeTransform } from "../pipe-transform.interface";

export class ParseEnumPipe implements PipeTransform<string, any> {
  constructor(private readonly enumType: any) {}
  transform(value: any, metadata?: any) {
    const enumValues = Object.values(this.enumType);
    if (!enumValues.includes(value)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not a valid enum value.`
      );
    }
    return value;
  }
}
