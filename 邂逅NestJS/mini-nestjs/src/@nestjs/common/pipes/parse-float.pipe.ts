import { BadRequestException } from "../filters/http-exception";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { PipeTransform } from "../types/pipe-transform.interface";

export class ParseFloatPipe implements PipeTransform<string, number> {
  transform(value: any, metadata?: ArgumentMetadata) {
    const val = parseFloat(value);
    if (isNaN(val)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not a float.`
      );
    }
    return val;
  }
}
