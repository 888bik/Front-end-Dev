import { z } from "zod";

export const createCatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
  })
  .required();

// 使用 zod 的 infer 方法推导 createCatSchema 的类型，定义一个名为 CreateCatDto 的类型
export type CreateCatDto = z.infer<typeof createCatSchema>;
