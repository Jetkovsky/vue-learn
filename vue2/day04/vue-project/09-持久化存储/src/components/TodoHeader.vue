<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <!-- <input v-model.trim="todoName" @key.enter="handleAdd" placeholder="请输入任务" class="new-todo" />
      <button class="add" @click="handleAdd">添加任务</button> -->

    <input
      placeholder="请输入任务"
      class="new-todo"
      v-model="todoName"
      @keyup.enter="handleAdd"
    />
    <button class="add" @click="handleAdd">添加任务</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      todoName: "",
    };
  },
  methods: {
    handleAdd() {
      this.$emit("addTask", this.todoName);
      this.todoName = "";
    },
  },
};
</script>

<style>
</style>