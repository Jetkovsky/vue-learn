<script setup>
import { inject } from 'vue';


const themeColor = inject('theme-color')
const sonCount = inject('trans-count')

// 传值修改
const changeCount = inject('change-count')
const clickFn = ()=>{
    changeCount(666)
}

</script>


<template>
    <div class="bottom">
        <h3>    +--------------+ 
            <br>| 我是底层组件   |<br>
                +--------------+
        </h3>

        <h3>接收到来自顶层的值→: {{ themeColor  }} - {{ sonCount }}</h3>
        <button type="button" @click="clickFn">修改count</button>
    </div>
</template>

<style scoped>
.bottom {
    width: 500px;
    height: 200px;
    border: 5px solid #5997AB;

    margin-left: 25px;
}
</style>