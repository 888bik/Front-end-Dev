const getAssetUrl = (image) => {
  //new URL() 被用来处理相对路径并转换为绝对路径
  //参数一:相对路径
  //参数二:当前路径的URL
  //正确的路径:src/assets/image/图片
  //.href 返回该 URL 对象的完整 URL 字符串
  return new URL(`../assets/image/${image}`, import.meta.url).href;
};
export default getAssetUrl;
