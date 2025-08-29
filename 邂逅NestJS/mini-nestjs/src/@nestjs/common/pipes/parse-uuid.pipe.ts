import { BadRequestException } from "../http-exception";
import { PipeTransform } from "../pipe-transform.interface";
import { validate } from "uuid";

export class ParseUUIDPipe implements PipeTransform<string, string> {
  transform(value: string, metadata?: any) {
    if (!validate(value)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not a valid UUID.`
      );
    }
    return value;
  }
}
