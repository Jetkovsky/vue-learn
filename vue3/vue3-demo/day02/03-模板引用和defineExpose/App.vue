<script setup>
import { onMounted, ref } from 'vue';
import TestCom from './components/test-com.vue';

//模板引用（可以获取dom,也可以获取组件）
// 1. 调用ref函数，生成一个ref对象
// 2. 通过ref标识，进行绑定
// 3. 通过ref对象.valuel即可访问到绑定的元素(必须渲染完成，才能拿到)  那就得使用钩子函数

const inp = ref(10086)

// 生命周期钩子 onMounted
onMounted(() => {
  // console.log(inp.value);
  // inp.value.focus()
})

const clickFn = () => {
  inp.value.focus()
}

// ------------------defineExpose()显示暴露组件内的属性和方法------------------------------
const testRef = ref(null)

const getCom = () => {
  console.log(testRef.value);
}

</script>


<template>
  <div>
    <input ref="inp" type="text">
    <button @click="clickFn">点击让输入框聚焦 </button>

    <TestCom ref="testRef"></TestCom>
    <button @click="getCom">获取组件</button>
  </div>
</template>
