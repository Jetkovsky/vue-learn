<template>
  <div class="hm-footer">
    我是footer
    <hm-button></hm-button>
  </div>
</template>

<script>
import HmButton from './HmButton.vue'
export default {
  components: { HmButton },

}
</script>

<style>
.hm-footer{
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    text-align: center;
    background-color: #4f81bd;
    color: white;
}
</style>