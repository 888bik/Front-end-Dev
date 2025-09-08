import { Observable } from "rxjs";
import { ExecutionContext } from "../common/types/execution-context.interface";
import { NestInterceptor } from "../common/types/nest-interceptor.interface";
import multer from "multer";
import { CallHandler } from "../common/types/call-handler.interface";
import { BadRequestException, Injectable } from "../common";
import { MulterConfigService } from "./multer-config.service";

/**
 * 上传单个文件
 * @param fileName 文件名
 * @returns
 */
export function FileInterceptor(fileName) {
  @Injectable()
  class FileInterceptor implements NestInterceptor {
    constructor(readonly multerConfigService: MulterConfigService) {}
    async intercept(context: ExecutionContext, next: CallHandler) {
      const request = context.switchToHttp().getRequest();
      const response = context.switchToHttp().getResponse();
      const upload = this.multerConfigService
        .getMulterInstance()
        .single(fileName);
      await new Promise<void>((resolve, reject) => {
        upload(request, response, (error) => {
          error ? reject(error) : resolve();
        });
      });
      return next.handle();
    }
  }
  return FileInterceptor;
}

/**
 * 上传多个文件
 * @param fileName 文件名
 * @param maxCount 上传最大数量
 * @returns
 */
export function FilesInterceptor(fileName: string, maxCount: number) {
  @Injectable()
  class FilesInterceptor implements NestInterceptor {
    constructor(readonly multerConfigService: MulterConfigService) {}
    async intercept(context: ExecutionContext, next: CallHandler) {
      const request = context.switchToHttp().getRequest();
      const response = context.switchToHttp().getResponse();
      const upload = this.multerConfigService
        .getMulterInstance()
        .array(fileName, maxCount);
      await new Promise<void>((resolve, reject) => {
        upload(request, response, (error) => {
          error ? reject(error) : resolve();
        });
      });
      return next.handle();
    }
  }
  return FilesInterceptor;
}

export function FileFieldsInterceptor(
  uploadFields: { name: string; maxCount: number }[]
) {
  @Injectable()
  class FileFieldsInterceptor implements NestInterceptor {
    constructor(readonly multerConfigService: MulterConfigService) {}
    async intercept(context: ExecutionContext, next: CallHandler) {
      const request = context.switchToHttp().getRequest();
      const response = context.switchToHttp().getResponse();
      const upload = this.multerConfigService
        .getMulterInstance()
        .fields(uploadFields);
      await new Promise<void>((resolve, reject) => {
        upload(request, response, (error) => {
          error ? reject(error) : resolve();
        });
      });
      return next.handle();
    }
  }
  return FileFieldsInterceptor;
}

export function AnyFilesInterceptor() {
  @Injectable()
  class AnyFilesInterceptor implements NestInterceptor {
    constructor(readonly multerConfigService: MulterConfigService) {}
    async intercept(context: ExecutionContext, next: CallHandler) {
      const request = context.switchToHttp().getRequest();
      const response = context.switchToHttp().getResponse();
      const upload = this.multerConfigService.getMulterInstance().any();
      await new Promise<void>((resolve, reject) => {
        upload(request, response, (error) => {
          error ? reject(error) : resolve();
        });
      });
      return next.handle();
    }
  }
  return AnyFilesInterceptor;
}

@Injectable()
export class NoFilesInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    if (request.files && (request.files.length as number) > 0) {
      throw new BadRequestException("Files are not allowed");
    }
    return next.handle();
  }
}
