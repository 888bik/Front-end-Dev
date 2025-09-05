import { BadRequestException } from "../filters/http-exception";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { PipeTransform } from "../types/pipe-transform.interface";

export class ParseEnumPipe implements PipeTransform<string, any> {
  constructor(private readonly enumType: any) {}
  transform(value: any, metadata?: ArgumentMetadata) {
    const enumValues = Object.values(this.enumType);
    if (!enumValues.includes(value)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not a valid enum value.`
      );
    }
    return value;
  }
}
