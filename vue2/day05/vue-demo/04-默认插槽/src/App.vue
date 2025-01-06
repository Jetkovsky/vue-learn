<template>
  <div id="app">
    <MyDialog>
      <div>您确定要进行删除操作吗？</div>
    </MyDialog>
    <MyDialog> 
      <p>删除？</p>
      <p>删除？</p>
      <p>删除？</p>
      <p>删除？</p>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { MyDialog },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
