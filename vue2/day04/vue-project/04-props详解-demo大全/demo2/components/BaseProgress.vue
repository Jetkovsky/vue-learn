<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  // 数组传不会报任何错，我们希望能有错误信息，所以换成对象传
  // props: ['w']

  // props: {
  //   w: Number
  // }

  // 完整写法
  // 完整写法（类型、默认值、非空、自定义校验）
  props: {
    w: {
      type: Number,
      //required: true,
      default: 0,
      validator(val) {
        // console.log(val)
        if (val >= 100 || val <= 0) {
          console.error("传入的范围必须是0-100之间");
          return false;
        } else {
          return true;
        }
      },
    },
  },
};
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  width: 50%;
  height: 20px;
  border-radius: 10px;
  text-align: right;
  position: relative;
  background-color: #409eff;
  background-size: 20px 20px;
  box-sizing: border-box;
  transition: all 1s;
}
.inner span {
  position: absolute;
  right: -20px;
  bottom: -25px;
}
</style>