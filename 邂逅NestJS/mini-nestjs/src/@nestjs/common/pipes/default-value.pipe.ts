import { ArgumentMetadata } from "../types/argument-metadata.interface";
import { PipeTransform } from "../types/pipe-transform.interface";

export class ParseDefaultPipe implements PipeTransform<string, any> {
  constructor(private readonly defaultValue: any) {}
  transform(value: any, metadata?: ArgumentMetadata) {
    return value !== undefined ? value : this.defaultValue;
  }
}
