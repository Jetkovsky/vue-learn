<script setup>
import { ref } from 'vue';
import SonCom from './components/son-com.vue';


// 子传父
// 1.在子组件内部，emit触发事件（编译器宏获取）
// 2.在父组件，通过@监听
const parentMoney = ref(10000)

const changeFn = () => {
  parentMoney.value -= 10
}

</script>


<template>
  <div>
    <h3>父组件 - parent的账户余额：{{ parentMoney }} </h3>
    <!-- 1. 绑定自定义事件 -->
    <!-- 子组件通过 @要发送函数 = 父组件函数接收 的方式绑定 -->
    <SonCom @change-money="changeFn"></SonCom>
  </div>

</template>
