<script setup>
import { ref } from 'vue';
import CenterCom from './components/center-com.vue';

const testNum = ref('123456')

</script>


<template>
  <div class="top">
    <h1>我是顶层组件 - {{ testNum }}</h1>
    <CenterCom v-model="testNum"></CenterCom>

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