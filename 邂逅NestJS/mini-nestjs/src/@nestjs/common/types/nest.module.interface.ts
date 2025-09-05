import { MiddlewareConsumer } from "../index";

export interface NestModule {
  configure(consumer: MiddlewareConsumer): void;
}
