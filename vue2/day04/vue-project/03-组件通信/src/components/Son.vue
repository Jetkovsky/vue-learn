<template>
  <div style="height:100px;border: 3px solid #000; margin: 50px">
    子组件-----这是传过来的值：【{{ title }}】
    
    <!-- 【子传父】 -->
    <button @click="changeFn">修改标题</button>   <!-- 👇2.1 -->
  </div>
</template>

<script>
export default {
  // 1.2 【父传子】子组件内部通过props来接收
  props: ["title"],
  methods: {
    // 2.1 【子传父】 通过emit向父组件发送消息通知
    changeFn() {
      this.$emit("changeTitle", "你好世界");
    },
  },
};
</script>

<style>
</style>