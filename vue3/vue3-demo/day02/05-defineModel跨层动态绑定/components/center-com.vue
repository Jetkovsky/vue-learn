<script setup>
import BottomCom from './bottom-com.vue';

const centerValue = defineModel()

</script>


<template>
    <div class="center">
        <h2>我是中层组件</h2>
        <BottomCom v-model="centerValue"></BottomCom>    
    </div>
</template>

<style scoped>

.center {
    width: 550px;
    height: 300px;
    border: 5px solid #E19E5C;

    margin-left: 25px;
}
</style>