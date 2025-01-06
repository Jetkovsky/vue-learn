<template>
  <div class="base-b">
    <div>我是B组件（发布方）</div>
    <button @click="sendMsgFn">发送消息</button>
  </div>
</template>

<script>
import eventBus from '../utils/EventBus'
export default {
  methods:{
    // 3.发布消息  触发事件的方式发送消息
    sendMsgFn(){
      eventBus.$emit('sendMsg',"别来Java，快跑")
    }
  }
}
</script>

<style scoped>
.base-b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>