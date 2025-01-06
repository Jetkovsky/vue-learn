<template>
  <div id="app">
    <!-- 每个组件之间数据是独立的 -->
    <BaseCount></BaseCount>
    <BaseCount></BaseCount>
    <BaseCount></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue';



export default {
  name: 'App',
  components: {
    BaseCount
}
}
</script>

<style>
#app {
}
</style>
