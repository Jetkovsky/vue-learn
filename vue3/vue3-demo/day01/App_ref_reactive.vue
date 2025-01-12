<script setup>

// day1 ： reactive 和 ref

// 1. reactive：接收一个对象类型的数据，返回一个响应式的对象
// import { reactive } from 'vue';
// const state = reactive({
//   count: 100
// })
// const setCount = () => {
//   state.count++
// }


// 2. ref ：接收简单类型或者复杂类型，返回一个响应式的对象
//        本质：是在原有传入数据的基础上，外层包了一层对象，包成了复杂类型
//        底层，包成复杂类型之后，再借助reactive实现的响应式
//        注意点：
//        1> 访问数据，需要通过 .value
//        2> 在template中,  .value不需要加（vue帮我们扒了一层）


// 3. 最佳实践，以后声明数据统一用 ref
import { ref } from 'vue';

const testRefNum = ref(666)
const setAdd = () => {
  testRefNum.value++
}

</script>


<template>
  <div>
    <!-- 1.reactive -->
    <!-- <div>{{ state.count }}</div>
    <button @click="setCount">+1</button> -->

    <!-- 2.ref -->
     <!-- <div>{{ testRefNum }}</div> -->
    <div>{{ testRefNum }}</div>
    <button @click="setAdd">+1</button>
  </div>
</template>
