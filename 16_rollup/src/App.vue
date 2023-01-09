<template>
  <div class="box">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "masg",
    };
  },
};
</script>

<style scoped>
.box {
  background-color: blue;
}
</style>
