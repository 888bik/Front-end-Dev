import { ArgumentMetadata } from "../argument-metadata.interface";
import { PipeTransform } from "../pipe-transform.interface";

export class CustomPipe implements PipeTransform {
  transform(value: any, metadata?: ArgumentMetadata) {
    console.log(`Value: ${value}, Metadata: ${JSON.stringify(metadata)}`);
    return value;
  }
}
