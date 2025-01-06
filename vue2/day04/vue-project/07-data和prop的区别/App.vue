<template>
  <div class="app">
    <!-- 监听子组件发过来的消息通知 -->
    <BaseCount @changeCount="getChange" :count="count"></BaseCount>
  </div>
</template>

<script>
import BaseCount from "./components/BaseCount.vue";
export default {
  data() {
    return {
      count: 100,
    };
  },
  methods: {
    getChange(newValue) {
      this.count = newValue
      // console.log(newValue);
    },
  },
  components: {
    BaseCount,
  },
};
</script>

<style>
</style>