import { BadRequestException } from "../filters/http-exception";
import { PipeTransform } from "../types/pipe-transform.interface";

interface ParseArrayPipeOptions {
  items: any;
  separator?: string;
}
export class ParseArrayPipe implements PipeTransform<string, any[]> {
  constructor(private readonly options: ParseArrayPipeOptions) {}
  transform(value: any, metadata?: any) {
    if (!value) {
      return [];
    }
    const { items, separator = "," } = this.options;
    const values = value.split(separator).map((value) => {
      if (items === String) {
        return value;
      } else if (items === Number) {
        const val = parseInt(value);
        if (isNaN(val)) {
          throw new BadRequestException(
            `Validation failed. "${value}" is not a number.`
          );
        }
      } else if (items === Boolean) {
        if (items.toLowerCase() === "true") {
          return true;
        } else if (items.toLowerCase() === "false") {
          return false;
        } else {
          throw new BadRequestException(
            `Validation failed. "${value}" is not a boolean.`
          );
        }
      }
    });
    return values;
  }
}
