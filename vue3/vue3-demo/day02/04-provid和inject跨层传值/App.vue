<script setup>
import { provide, ref } from 'vue';
import CenterCom from './components/center-com.vue';

// provide 和 inject ：主要用于多层嵌套组件  跨层传值

// 1. 跨层传递普通数据
provide('theme-color', 'pink')

// 2. 跨层传递响应式数据
const count = ref(100)
provide('trans-count', count)
// 3s后变500 
setTimeout(() => {
  count.value = 500
}, 3000);

// 3. 跨层传递函数 => 给子孙后代传递可以修改数据的 *方法*
provide('change-count', (newCount) => {
  count.value = newCount
})

</script>


<template>
  <div class="top">
    <h1>我是顶层组件</h1>
    <CenterCom></CenterCom>
  </div>
</template>


<style scoped>
.top {
  width: 600px;
  height: 400px;
  border: 5px solid #BF1618;

  margin-left: 200px;
}
</style>