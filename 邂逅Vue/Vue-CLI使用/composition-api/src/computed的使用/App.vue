<template>
  <div>
    <h2>{{ fullName }}</h2>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  setup() {
    let firstName = "zhao";
    let lastName = "kaize";
    // 写法一
    // let fullName = computed(() => {
    //   return firstName + lastName;
    // });
    // 写法二
    let fullName = computed({
      set: function () {
        return firstName + " " + lastName;
      },
      get: function (newValue) {
        let names = newValue.split(" ");
        firstName = name[0];
        lastName = name[0];
      },
    });

    return {
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
