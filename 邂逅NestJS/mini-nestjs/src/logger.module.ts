import { Module } from "./@nestjs/common";
import { LoggerService } from "./logger.service";
import { UserModule } from "./user.module";

@Module({
  controllers: [],
  // providers: [LoggerService],
  imports: [UserModule],
  exports: [UserModule],
})
export class LoggerModule {}
