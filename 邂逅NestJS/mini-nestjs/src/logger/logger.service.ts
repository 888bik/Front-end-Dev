import { Injectable } from "../@nestjs/common";

@Injectable()
export class LoggerService {
  constructor() {}
  log(message) {
    console.log("LoggerService", message);
  }
}
@Injectable()
export class UseValueService {
  constructor(public suffix) {}
  log(message) {
    console.log("UseValueService", this.suffix);
  }
}

@Injectable()
export class UseFactory {
  constructor(public prefix1, public prefix2) {}
  log(message) {
    console.log("UseFactory", this.prefix1, this.prefix2);
  }
}
