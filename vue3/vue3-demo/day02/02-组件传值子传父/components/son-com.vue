<script setup>

// 注意：由于写了setup,所以无法直接配置props选项
// 所以：此处需要借助于“编译器宏”函数接收子组件传递的数据

// 2. 通过defineEmits 编译器宏生成emit方法
const sonEmit = defineEmits(['changeMoney'])

const buy = () => {
    sonEmit('changeMoney', 10)
}

</script>

<template>

    <div class="son">
        <!-- 3.触发自定义事件，并传递参数 -->
        <button type="button" @click="buy"> child消费10 </button>
    </div>

</template>

<style>
.son {
    width: 500px;
    height: 100px;
    border: 1px solid #000;
    padding: 30px;
}
</style>