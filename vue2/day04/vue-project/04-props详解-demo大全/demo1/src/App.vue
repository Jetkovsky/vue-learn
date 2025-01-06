<template>
  <div>
    <UserInfo
      :username="username"
      :age="age"
      :isSingle="isSingle"
      :car="car"
      :hobby="hobby"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from "./components/UserInfo.vue";

export default {
  data(){
    return {
      username:'小帅',
      age:'22',
      isSingle:'yes',
      car:'benz',
      hobby:'唱跳rap'
    }
  },
  components: { UserInfo },
};
</script>

<style>
#app {
}
</style>
