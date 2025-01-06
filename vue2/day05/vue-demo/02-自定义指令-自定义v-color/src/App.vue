<template>
  <div id="app">
    <h1 v-color="color1">我是内容</h1>
    <h1 v-color="color2">我是内容</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color1: "red",
      color2: "green",
    };
  },
  components: {},
  directives: {
    color: {
      inserted(el, binding) {
        // console.log(el);
        // binding.value就是指令的值
        el.style.color = binding.value;
      },
      update(el, binding) {
        el.style.color = binding.value;
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
