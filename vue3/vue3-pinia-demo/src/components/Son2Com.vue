<script setup>
import { useCounterStore } from '@/store/counter';


const counterStore = useCounterStore()
</script>

<template>
    <div class="son2">
        我是Son2.vue - {{ counterStore.count }}
        <button type="button" @click="counterStore.subCounter">➖</button>
    </div>
</template>

<style scoped>
.son2 {
    width: 550px;
    height: 100px;
    border: 5px solid #5997AB;

    margin-left: 20px;
    margin-top: 5px;
}
</style>
