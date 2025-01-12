<script setup>
import { computed, ref } from 'vue';
// 计算属性computed

const myList = ref([1, 2, 3, 4, 5, 6, 7, 8])

const computedList = computed(() =>{
  return myList.value.filter(el => el > 3)
})

const addElement =() =>{
  return myList.value.push(888)
}

</script>


<template>
  <div>原始数据：{{ myList }}</div>
  <div>使用计算属性后的数据：{{ computedList }}</div>
  <div>------------------------------</div>
  <button @click="addElement" type="button">修改</button>
</template>
