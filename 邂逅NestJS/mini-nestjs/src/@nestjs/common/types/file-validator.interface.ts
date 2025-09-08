export interface FileValidator {
  // `validate` 方法，用于验证文件，参数是 `file`，类型为 `any`
  // 返回一个 `Promise` 对象，泛型为 `void`
  validate(file: any): Promise<void>;
}
