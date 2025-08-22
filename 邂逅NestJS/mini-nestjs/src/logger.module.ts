import { Module } from "./@nestjs/common";
import { LoggerController } from "./logger.controller";
import { LoggerService } from "./logger.service";

@Module({
  providers: [LoggerService],
  exports: [LoggerService],
  
})
export class LoggerModule {}
