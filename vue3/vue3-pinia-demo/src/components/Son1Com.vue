<script setup>
import { useCounterStore } from '@/store/counter';

const counterStore = useCounterStore()
</script>

<template>
    <div class="son1">
        我是Son1.vue - {{ counterStore.count }} - 双倍： {{ counterStore.double }} <br>
        ----------------------------- <br>
        年龄：{{ counterStore.age }} | 工资：{{ counterStore.money }}
        <button type="button" @click="counterStore.multipleAdd">➕</button>
    </div>
</template>

<style scoped>
.son1 {
    width: 550px;
    height: 100px;
    border: 5px solid #E19E5C;

    margin-left: 20px;
    margin-top: 5px;
}
</style>
