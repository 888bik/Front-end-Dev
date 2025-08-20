import "reflect-metadata";
import { INJECTABLE } from "./constant";
export function Injectable(): ClassDecorator {
  return function (target: Function) {
    Reflect.defineMetadata(INJECTABLE, true, target);
  };
}
