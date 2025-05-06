<template>
  <div>
    <h1>count:{{ count }}</h1>
    <h1>countRef:{{ countRef }}</h1>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <!-- <div>apiSecret: {{ runtimeConfig.apiSecret }}</div> -->
    <div>baseURL:{{ runtimeConfig.public.baseURL }}</div>
  </div>
</template>
<script setup>
let count = useCounter();
let countRef = ref(Math.round(Math.random() * 1000));
function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
// const content = useState("comment", () => "");
// const isLogin = useLogin();
// const router = useRouter();
// console.log(router.path);
// if (isLogin.value) {
//   content.value = "";
// } else {
//   //要求登录
//   router.push("/login?callback=" + router.path);
// }
const appConfig = useAppConfig();
console.log(appConfig.title);
const runtimeConfig = useRuntimeConfig();
if (import.meta.server) {
  console.log(runtimeConfig.apiSecret);
  console.log(runtimeConfig.public.baseURL);
}
</script>
