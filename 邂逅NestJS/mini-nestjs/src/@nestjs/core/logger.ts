import clc from "cli-color";
export class Logger {
  private static lastTime = Date.now();

  /**
   *
   * @param message 要打印的消息
   * @param context 在哪个类打印的
   */
  static log(message: string, context: string) {
    //获取当前进程id
    const pid = process.pid;
    //获取当前的时间戳
    const timestamp = new Date().toLocaleString();
    const currentTime = Date.now();
    const TimeDiff = currentTime - this.lastTime;
    console.log(
      `[${clc.green("Nest")}] ${clc.green(pid.toString())}  - ${clc.yellow(
        timestamp
      )}     ${clc.green("LOG")} [${clc.yellow(context)}] ${clc.green(
        message
      )} ${clc.white("+")}${clc.green(TimeDiff)}${clc.white("ms")}`
    );
    this.lastTime = currentTime;
  }
}
