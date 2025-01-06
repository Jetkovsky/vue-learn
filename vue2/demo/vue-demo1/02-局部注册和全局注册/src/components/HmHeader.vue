<template>
  <div class="hm-header">
    我是hm-header
    <hm-button></hm-button>
  </div>
</template>

<script>
import HmButton from './HmButton.vue';
export default {
  components: { HmButton },

};
</script>

<style>
.hm-header {
  height:100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  background-color: #826AA4;
  color: white;
}
</style>