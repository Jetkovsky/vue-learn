<script setup>
import { artGetChannelsService } from '@/api/article';
import { ref } from 'vue';

defineProps({
  cid: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})

const emit = defineEmits(['update:cid'])

// 声明个数组存一下结果
const channelList = ref([])

const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
}


getChannelList()
</script>

<template>
  <!-- label 展示给用户看的， value 收集起来提交给后台 -->
  <el-select :modelValue="cid" @update:modelValue="emit('update:cid', $event)" :style="{ width }">
    <el-option v-for="item in channelList" :key="item.id" :label="item.cate_name" :value="item.id"></el-option>
  </el-select>
</template>
