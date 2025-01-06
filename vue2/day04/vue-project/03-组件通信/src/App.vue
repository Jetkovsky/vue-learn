<template>
  <div style="height:300px;border: 3px solid #000; margin: 50px">
    我是父组件
    <!-- 1.1 【父传子】给子组件以添加属性的方式传值 -->
    <!-- <Son :title="myTitle"></Son> -->

    <!-- 2.1 【子传父】 父组件，对消息进行监听 -->
    <Son :title="myTitle" @changeTitle="getChange"></Son>
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  data() {
    return {
      myTitle: "别来Java 快跑",
    };
  },
  methods:{
    // 2.3 【子传父】提供处理函数，形参中获取参数
    getChange(newTitle){
      // console.log(newTitle);

      // 传过来后修改就能改变子组件了
      this.myTitle = newTitle
    }
  },
  components: { Son }

};
</script>

<style>
#app {
}
</style>
