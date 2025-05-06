//这个全局的中间件的执行优先级优于其他中间件
export default defineNuxtRouteMiddleware(() => {
  console.log("全局中间件执行");
})