import "reflect-metadata";
import { Type } from "@nestjs/common";
import { ExceptionFilter } from "../types/exception-filter.interface";
export function UseFilters(
  ...filters: (ExceptionFilter | Type<ExceptionFilter>)[]
) {
  return (
    target: object | Function,
    propertyKey?: string | symbol,
    descriptor?: TypedPropertyDescriptor<any>
  ) => {
    if (descriptor) {
      Reflect.defineMetadata("filters", filters, descriptor.value);
    } else {
      Reflect.defineMetadata("filters", filters, target);
    }
  };
}
