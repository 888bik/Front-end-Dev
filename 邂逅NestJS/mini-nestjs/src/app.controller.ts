import {
  Controller,
  Get,
  Req,
  Request,
  Inject,
  HttpException,
  HttpStatus,
  BadRequestException,
  Catch,
  CustomExceptionFilter,
  UseFilters,
  Body,
  Param,
  Query,
  Post,
  UsePipes,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from "./@nestjs/common";
import {
  FileSizeValidationPipe,
  FileTypeValidator,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseDefaultPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  ZodValidationPipe,
} from "./@nestjs/common/pipes";


import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
  NoFilesInterceptor,
} from "./@nestjs/platform-express/file.interceptor";
import { ParseFilePipe } from "./@nestjs/common/pipes/parse-file.pipe";
import { MaxFileSizeValidator } from "./@nestjs/common/pipes/max-file-size.validator";
import { ExistingProvider } from "@nestjs/common";

enum UserRole {
  Admin = "Admin",
  User = "User",
}

@Controller("app")
export class AppController {
  constructor() {}

  // @Get("test")
  // index() {
  //   // throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  //   throw new BadRequestException("请求失败", "111111");
  // }

  // @Get("custom1")
  // custom1() {
  //   throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  // }

  // @Get("getNum/:id")
  // getNum(@Param("id", ParseIntPipe) id: number) {
  //   return typeof id === "number";
  // }

  @Get("getFloat/:value")
  getFloat(@Param("value", ParseFloatPipe) value: number) {
    return value;
  }

  // @Get("getBool/:value")
  // getBool(@Param("value", ParseBoolPipe) value) {
  //   return typeof value === "boolean";
  // }

  // @Get("getArray/:arr")
  // getArray(
  //   @Param("arr", new ParseArrayPipe({ items: String, separator: "," }))
  //   arr: any
  // ) {
  //   console.log(arr);
  //   return arr;
  // }

  // @Get("getUUID/:id")
  // getUUID(@Param("id", ParseUUIDPipe) id) {
  //   return id;
  // }

  // @Get("getEnum/:role")
  // getEnum(@Param("role", new ParseEnumPipe(UserRole)) role: UserRole) {
  //   return role;
  // }

  // @Get("getDefault")
  // getDefaultValue(@Query("name", new ParseDefaultPipe("bik")) name) {
  //   return name;
  // }
  // @Get("custom/:value")
  // getCustom(@Param("value", CustomPipe) value: any): string {
  //   return `The custom value is ${value}`;
  // }

  // //应用 ZodValidationPipe 管道，使用 createCatSchema 进行数据验证
  // @Post("cats")
  // @UsePipes(new ZodValidationPipe(createCatSchema))
  // createCat(@Body() createCatDto: CreateCatDto) {
  //   return createCatDto;
  // }

  // @Post("user/create")
  // @UsePipes(new ClassValidationPipe())
  // async createUser(@Body() createUser: CreateUserDto) {
  //   console.log(createUser);
  //   return "hello";
  // }

  // @Post("users/create/global")
  // async createGlobalUser(
  //   @Body() createUserDto: CreateUserDto
  // ): Promise<string> {
  //   console.log("Global Create User DTO:", createUserDto);
  //   return "This action adds a new user globally";
  // }

  // // 使用 @Roles 装饰器来限制只有具有 'admin' 角色的用户才能访问此方z法
  // @Roles("admin")
  // @UseGuards(AuthGuard)
  // @Get("guards")
  // testGuards() {
  //   return "test guards";
  // }

  // @Roles2(["admin"])
  // @UseGuards(new AuthGuard2(new Reflector()))
  // @Get("guards2")
  // testGuards2() {
  //   return "test guards2";
  // }

  // @Roles("aaa")
  // @Get("guards3")
  // testGlobalGuards() {
  //   return "test global guards";
  // }

  // @Get("pay")
  // @UseInterceptors(Logging3Interceptor)
  // @UseInterceptors(Logging2Interceptor)
  // @UseInterceptors(Logging1Interceptor)
  // testInterceptor() {
  //   return "interceptor";
  // }

  // @Get("excludeNull")
  // @UseInterceptors(ExcludeNull)
  // excludeNull() {
  //   return null;
  // }
  // @Get("transform")
  // @UseInterceptors(Transform)
  // transform() {
  //   return "abc";
  // }

  // @Get("throwError")
  // @UseInterceptors(ErrorInterceptor)
  // throwError() {
  //   throw new Error("abc");
  // }

  @Post("uploadFile")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return "upload success:" + file;
  }

  @Post("uploadFileLimited")
  @UseInterceptors(FileInterceptor("file"))
  uploadFileLimited(
    @UploadedFile(FileSizeValidationPipe) file: Express.Multer.File
  ) {
    // console.log(file);
    return "upload success";
  }

  @Post("fileValidator")
  @UseInterceptors(FileInterceptor("file"))
  fileValidator(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 10 }),
          new FileTypeValidator({ fileType: "image/png" }),
        ],
      })
    )
    file: Express.Multer.File
  ) {
    console.log(file);
    return "validate success";
  }

  @Post("uploadFiles")
  @UseInterceptors(FilesInterceptor("files", 3))
  uploadFiles(@UploadedFiles() file) {
    console.log(file);
    return "upload files success";
  }

  @Post("uploadFilesFields")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: "avatar", maxCount: 2 },
      { name: "other", maxCount: 1 },
    ])
  )
  uploadFilesFields(@UploadedFiles() files: Express.Multer.File) {
    console.log(files);
    return "upload files success";
  }

  @Post("uploadAnyFiles")
  @UseInterceptors(AnyFilesInterceptor())
  anyFiles(@UploadedFiles() files) {
    console.log(files);
    return "upload files success";
  }

  @Post("noFiles")
  @UseInterceptors(new NoFilesInterceptor())
  @UseInterceptors(AnyFilesInterceptor())
  noFiles(@UploadedFiles() files) {
    return "forbidden upload files";
  }
}
