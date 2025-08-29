import { BadRequestException } from "../http-exception";
import { PipeTransform } from "../pipe-transform.interface";

export class ParseFloatPipe implements PipeTransform<string, number> {
  transform(value: any, metadata?: any) {
    const val = parseFloat(value);
    if (isNaN(val)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not a float.`
      );
    }
    return val;
  }
}
