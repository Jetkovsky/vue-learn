<script setup>
import { ref } from 'vue';
import SonCom from './components/son-com.vue';

// vue2父传子
// 1.给子组件，添加属性的方式传值
// 2.在子组件，通过props接收
const parentMoney = ref(100)

const getMoney = () => {
  parentMoney.value += 10000
}
</script>


<template>
  <div>
    <h3>父组件 - {{ parentMoney }}
      <button type="button" @click="getMoney"> 挣钱 </button>
    </h3>
    <SonCom car="奔驰" :son-money="parentMoney"></SonCom>
  </div>

</template>
