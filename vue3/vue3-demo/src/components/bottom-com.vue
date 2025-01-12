<script setup>

const modelValue = defineModel();

</script>


<template>
    <div class="bottom">
        <h3>    +--------------+ 
            <br>| 我是底层组件   |<br>
                +--------------+
        </h3>

        <input type="text" :value="modelValue" @input="e => modelValue = e.target.value">
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