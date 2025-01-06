<template>
  <div>
    <MyDialog>
      <template v-slot:head>
        <div>我是大标题</div>
      </template>

      <template v-slot:content>
        <div>我是内容</div>
      </template>

      <!-- 简写形式 -->
      <template #footer>
        <button>确认</button>
        <button>取消</button>
      </template>
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
