<template>
  <div>
    <!-- <input type="text" value="message" @input="inputChange" /> -->
    <input :value="modelValue" @input="inputChange" />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: ["modelValue"],
  methods: {
    inputChange(event) {
      // console.log(event.target.value);
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
