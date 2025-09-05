import { validate } from "uuid";
import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { PipeTransform } from "../types/pipe-transform.interface";
import { BadRequestException } from "../filters/http-exception";

export class ParseUUIDPipe implements PipeTransform<string, string> {
  transform(value: string, metadata?: ArgumentMetadata) {
    if (!validate(value)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not a valid UUID.`
      );
    }
    return value;
  }
}
