const labelService = require("../service/label.service");

const verifyLabelExists = async (context, next) => {
  const { labels } = context.request.body;
  const existsLabels = [];
  for (const labelName of labels) {
    const labelObj = { labelName }; //无论标签是否存在,先创建一个标签对象
    //校验标签是否存在
    const result = await labelService.queryLabelByName(labelName);
    //如果存在,将标签的id添加到label对象中
    if (result.length) {
      // console.log(result);
      labelObj.id = result[0].id;
    } else {
      //不存在则创建标签,并把创建之后的标签id添加到label对象中
      const insertResult = await labelService.createLabel(labelName);
      labelObj.id = insertResult.insertId;
    }
    //把所有标签对象加入到标签数组中
    existsLabels.push(labelObj);
  }
  context.labels = existsLabels;
  await next()
};
module.exports = {
  verifyLabelExists,
};
