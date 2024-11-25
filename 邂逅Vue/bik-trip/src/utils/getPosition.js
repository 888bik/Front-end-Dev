import axios from "axios";
import { ref } from "vue";
let currentPosition = ref("");
//获取经纬度
function getPosition() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      const latitude = res.coords.latitude;
      const longitude = res.coords.longitude;
      // console.log("获取位置成功", res);
      //使用逆地理编码
      currentPosition = getLocationFromCoordinates(latitude, longitude);
    },
    (err) => {
      console.log("获取位置失败", err);
    }
  );
  return currentPosition;
}
//将经纬度转为具体位置
function getLocationFromCoordinates(latitude, longitude) {
  const apiKey = "1ff0ee3dd0b042258685fe00eccb436c";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  //发送api请求,转换具体位置
  axios
    .request({
      url: url,
      method: "get",
    })
    .then((res) => {
      let currentPositionStr = res.data.results[0].formatted;
      // 注意修改响应式的数据要对value修改
      //将字符串以逗号分隔,并去除首尾的空行
      currentPosition.value = currentPositionStr
        .split(",")
        .map((item) => item.trim());
    });
  return currentPosition;
}
// export default getPosition;
export { getLocationFromCoordinates, getPosition };
