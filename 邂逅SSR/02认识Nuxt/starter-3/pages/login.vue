<template>
  <div>
    <NButton @click="onLogin">登录</NButton>
  </div>
</template>

<script setup lang="ts">
const isLogin = useLogin();
const router = useRouter();
const route = useRoute();
const onLogin = () => {
  isLogin.value = true;
  const callback = route.query.callback?.toString() || "";
  router.push(callback);
};
</script>
