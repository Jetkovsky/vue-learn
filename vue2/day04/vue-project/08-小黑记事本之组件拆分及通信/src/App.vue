<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <TodoHeader @addTask="handleTask"></TodoHeader>

    <!-- 列表区域 -->
    <TodoMain :list="list" @delTask="handleDel"></TodoMain>

    <!-- 统计和清空 -->
    <TodoFooter :list="list" @clearTask="handleClear"></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";

export default {
  data() {
    return {
      list: [
        { id: 1, name: "打篮球" },
        { id: 2, name: "看电影" },
        { id: 3, name: "玩游戏" },
      ],
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    handleTask(newVal) {
      this.list.unshift({
        id: +new Date(),
        name: newVal,
      });
    },
    handleDel(id) {
      // console.log(id);
      this.list = this.list.filter((item) => item.id !== id);
    },
    handleClear(){
      this.list = []
    }
  },
};
</script>

<style>
</style>
