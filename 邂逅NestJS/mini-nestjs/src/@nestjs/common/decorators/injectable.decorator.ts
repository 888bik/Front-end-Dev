import "reflect-metadata";
import { INJECTABLE } from "../constants";

export function Injectable(): ClassDecorator {
  return function (target: Function) {
    Reflect.defineMetadata(INJECTABLE, true, target);
  };
}
