<template>
  <div id="app">
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主体 -->
    <HmMain></HmMain>
    <!-- 底部组件 -->
    <HmFooter></HmFooter>
  </div>
</template>

<script>
// 第一
// import HmFooterVue from './components/HmFooter.vue';
// import HmHeaderVue from './components/HmHeader.vue'
// import HmMainVue from './components/HmMain.vue';

// 第二
import HmFooter from './components/HmFooter.vue';
import HmHeader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue';
export default {
  name: "App",
  components: { 
    // '组件名':组件对象
    // 第一种写法
    // HmHeader: HmHeaderVue,
    // HmMain: HmMainVue,
    // HmFooter: HmFooterVue

    // 第二种写法
    HmFooter,HmHeader,HmMain
   },
};
</script>

<style>
#app {
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>
