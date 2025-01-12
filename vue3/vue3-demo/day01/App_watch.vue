<script setup>
import { ref, watch } from 'vue';


const testNum = ref(0)
const nickName = ref('张三')

const changeTestNum = () => {
  testNum.value++
}
const changeNickName = () => {
  nickName.value = '李四'
}

// 1.监视单个数据的变化
//    watch(ref对象，(newValue,oldValue)=>{ ... })
// watch(testNum, (newVal, oldVal) => {
//   console.log("newValue:" + newVal, "oldValue:" + oldVal)
// })


// 2.监视多个对象的变化
//   watch([ref对象1,ref对象2],(newArr,oldArr)=>{ ... })
watch([testNum, nickName], (newArr, oldArr) => {
  console.log(newArr, oldArr);
})

</script>


<template>
  <div>{{ testNum }}</div>
  <button type="button" @click="changeTestNum">改数值</button>
  <div>{{ nickName }}</div>
  <button type="button" @click="changeNickName">改名字</button>
</template>
