<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
  <button @click="goBack">goBack</button>
</template>
<script setup>
//手动引入全局样式
import "~/assets/styles/global.scss";

let router = useRouter()
function goBack() {
  router.go(-1);
}
router.beforeEach((to,from) => {
  console.log(to,from);
})
</script>
