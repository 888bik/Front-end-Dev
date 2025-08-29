import { BadRequestException } from "../http-exception";
import { PipeTransform } from "../pipe-transform.interface";

export class ParseBoolPipe implements PipeTransform<string, boolean> {
  transform(value: any, metadata?: any) {
    if (value === "true") {
      return true;
    } else if (value === "false") {
      return false;
    } else {
      throw new BadRequestException(
        `Validation failed. "${value}" is not a boolean.`
      );
    }
  }
}
