import { BadRequestException } from "../http-exception";
import { PipeTransform } from "../pipe-transform.interface";

export class ParseDefaultPipe implements PipeTransform<string, any> {
  constructor(private readonly defaultValue: any) {}
  transform(value: any, metadata?: any) {
    return value !== undefined ? value : this.defaultValue;
  }
}
