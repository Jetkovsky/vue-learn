<script setup>

import { storeToRefs } from 'pinia';
import { useChannelStore } from './store/channel';
import { useCounterStore } from './store/counter';

// 使用pinia， 使得三个组件修改了数据都能联动
// 1.定义store
// 2.组件使用store


const counterStore = useCounterStore()
const channelStore = useChannelStore()

// 此时，直接解构，不处理，数据会丢失响应式
// const {{ count,msg }} = counterStore()

// 用上面的就相当于 你把值放到解构的对象里 已经不具备响应式了
// 为了保持原有的响应式，要使用这种
const { count, msg } = storeToRefs(counterStore)

// guest what can I do in the remote repo.

</script>

<template>
  <div class="top">
    <!-- <h3> APP 根组件 - {{ counterStore.count }} - {{ counterStore.msg }}</h3> -->
     <!-- 解构后就不用加前缀了，上面那个是有前缀的 -->
    <h3> APP 根组件 - {{ count }} - {{ msg }}</h3>
    <!-- <Son1Com></Son1Com> -->
    <!-- <Son2Com></Son2Com> -->
    <button @click="channelStore.getList">点击添加数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id"> {{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.top {
  width: 600px;
  height: 400px;
  border: 5px solid #BF1618;

  margin-left: 200px;
}
</style>
