<script setup>

// 注意：由于写了setup,所以无法直接配置props选项
// 所以：此处需要借助于“编译器宏”函数接收子组件传递的数据
const sonProps = defineProps({
    car: String,
    sonMoney: Number
})

console.log(sonProps.car);

</script>

<template>
    <!-- 对于props传递过来的数据，模板中可以直接使用 -->
    <div class="son">子组件，接收到父组件的值-----》{{ car }}-----余额：{{ sonMoney }}</div>

</template>

<style>
.son {
    width: 500px;
    height: 100px;
    border: 1px solid #000;
    padding: 30px;
}
</style>