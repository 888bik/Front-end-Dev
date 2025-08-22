import { Global, Module } from "./@nestjs/common";
import { LoggerService, UseFactory, UseValueService } from "./logger.service";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Global()
@Module({
  controllers: [UserController],
  providers: [
    {
      provide: "SUFFIX",
      useValue: "suffix",
    },
    UserService,
    {
      provide: "StringToken",
      useValue: new UseValueService("suffix"),
    },
    {
      provide: "FactoryToken",
      inject: ["prefix1", "SUFFIX"],
      useFactory: (prefix1, prefix2) => new UseFactory(prefix1, prefix2),
    },
  ],
  exports: [UserService],
})
export class UserModule {}
