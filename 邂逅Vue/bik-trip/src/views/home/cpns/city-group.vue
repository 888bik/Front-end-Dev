<template>
  <div class="city-group">
    <!-- 热门城市 -->
    <van-index-bar :index-list="indexList" highlight-color="#ff9854">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <!-- 城市分组 -->
      <template v-for="(group, index) in groupData.cities" :key="index">
        <!-- 遍历A,B,C每个组 -->
        <van-index-anchor :index="group.group" />
        <!-- 遍历A中的每个城市 -->
        <template v-for="(city, index) in group.cities" :key="index">
          <van-cell :title="city.cityName" @click="cityClick(city)"></van-cell>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import router from "@/router";
import UseCityStore from "@/stores/modules/cityStore";
import { getLocationFromCoordinates, getPosition } from "@/utils/getPosition";
import { compile, computed, toRefs } from "vue";
const cityStore = UseCityStore();
//接收父组件传来的数据
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

//自定义列表索引,因为有些字母可能没有对应的城市或者要以#开头
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

//监听城市的点击
const cityClick = (city) => {
  //选中当前城市的经纬度
  let latitude = city.latitude;
  let longitude = city.longitude;
  //查询经纬度对应的城市
  cityStore.currentCity = getLocationFromCoordinates(latitude, longitude);
  //返回上一级
  router.back();
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
