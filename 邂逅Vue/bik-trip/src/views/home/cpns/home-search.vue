<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <!-- 位置选择 -->
      <div class="city" @click="cityClick">
        {{ cityStore.currentCity[1] }}-{{ cityStore.currentCity[2] }}
      </div>
      <div class="position" @click="getPositionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/image/home/icon_location.png" alt="获取位置" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div
      class="section date-range bottom-gray-line"
      @click="showCalendar = true"
    >
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ totalStay }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      @confirm="onConfirm"
      :show-confirm="false"
      color="#ff9854"
      :round="false"
    />
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import UseCityStore from "@/stores/modules/cityStore";
import useHomeStore from "@/stores/modules/homeStore";
import { formatMonthWithDay, getDiffDays } from "@/utils/formatDate";
import { getPosition } from "@/utils/getPosition";
import { storeToRefs } from "pinia";
import { onBeforeUnmount, onMounted, ref, toRef } from "vue";
const cityStore = UseCityStore();
// 城市选择
const cityClick = () => {
  router.push("/city");
};

// 获取热门建议数据
const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);
// 点击按钮获取地理位置
function getPositionClick() {
  cityStore.currentCity = getPosition();
}
// const hasExecuted = ref(false); // 用来标记函数是否已经执行过
//组件加载时自动执行一次函数
// onMounted(() => {
//   if (!hasExecuted.value) {
//     getPosition();
//     hasExecuted.value = true; // 标记为已经执行过
//   }
// });
// 点击按钮时执行函数
// const getPositionClick = () => {
//   if (!hasExecuted.value) {
//     getPosition();
//     hasExecuted.value = true; // 标记为已经执行过
//   }
// };
// onBeforeUnmount(() => {
//   hasExecuted.value = false; // 你可以选择是否清除状态
// });

//处理日期时间
const nowDate = new Date();
const newDate = new Date();
newDate.setDate(nowDate.getDate() + 1);
const startDate = ref(formatMonthWithDay(nowDate));
const endDate = ref(formatMonthWithDay(nowDate, newDate));
//计算居住时间
const totalStay = ref(getDiffDays(nowDate, newDate));

//选择日期范围
const showCalendar = ref(false);
const onConfirm = (value) => {
  //设置日期
  const selectStartDate = value[0];
  const selectEndDate = value[1];
  startDate.value = formatMonthWithDay(selectStartDate);
  endDate.value = formatMonthWithDay(selectEndDate);
  totalStay.value = getDiffDays(selectStartDate, selectEndDate);
  //隐藏日历
  showCalendar.value = false;
};
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
.hot-suggests {
  margin: 10px 0;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
</style>
