import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useChannelStore = defineStore('channel', () => {
  // 声明数据
  const channelList = ref([])
  // 声明操作数据的方法
  const getList = async () => {
    // 支持异步
    // const res = axios.get('http://geek.itheima.net/v1_0/channels')  //下面是解构的，解构完直接用
    const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
    // channels 是因为，接口请求里的数据格式是 {data : {channels:[...]}}
    channelList.value = data.channels
    // console.log(data)

  }


  return {
    channelList,
    getList
  }
})
