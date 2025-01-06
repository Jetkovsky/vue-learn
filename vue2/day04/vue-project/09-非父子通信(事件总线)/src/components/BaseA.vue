<template>
  <div class="base-a">
    我是A组件（接受方）
    <p>{{msg}}</p>  
  </div>
</template>

<script>
import eventBus from '../utils/EventBus'
export default {
  created() {
    // 2.监听bus的事件（订阅消息）  回调：接收消息后干啥
    eventBus.$on('sendMsg', (msg)=>{
      console.log(msg);
      this.msg = msg
    })
  },
  data() {
    return {
      msg:''
    }
  }
}
</script>

<style scoped>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>