import { BadRequestException } from "../filters/http-exception";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { PipeTransform } from "../types/pipe-transform.interface";

export class ParseBoolPipe implements PipeTransform<string, boolean> {
  transform(value: any, metadata?: ArgumentMetadata) {
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
