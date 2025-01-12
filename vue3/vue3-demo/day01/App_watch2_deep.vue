<script setup>
import { ref, watch } from 'vue';

// watch监听属性，  
// 注意函数和这些vue内置的属性和函数的区别，vue2的钩子函数和属性在vue3全部变成 回调函数

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
// watch([testNum, nickName], (newArr, oldArr) => {
//   console.log(newArr, oldArr);
// })

// 3.immediate  立即执行
//   就是我们希望一进页面就触发，加个对象immediate
// watch([testNum, nickName], (newArr, oldArr) => {
//   console.log(newArr, oldArr)
// }, {
//   immediate: true
// })


// 4. deep深度监视， 默认watch进行的是浅层监视
//            const ref1 = ref(简单类型)    可以直接监视
//            const ref2 = ref(复杂类型)    监视不到复杂类型内部数据的变化
const userInfo = ref({
  name: '张三',
  age: 18
})

const setUserInfo = () => {
  userInfo.value.age += 10
}

// 深度监视
// watch(userInfo, (newValue) => {
//   console.log(newValue.name)
// }, {
//   deep: true
// })

// 5.对于对象中某个属性的监视，不用deep也可实现
// 使用函数监视
watch(() => userInfo.value.age, (newValue, oldValue) => {
  console.log('新值:' + newValue, '旧值:' + oldValue);
})

</script>


<template>

  <div>
    <div>{{ testNum }}</div>
    <button type="button" @click="changeTestNum">改数值</button>
    <div>{{ nickName }}</div>
    <button type="button" @click="changeNickName">改名字</button>
    <div>---------------------------------------------</div>
    <div>{{ userInfo }}</div>
    <button type="button" @click="setUserInfo">修改userInfo</button>
  </div>


</template>
