<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import { useRouter } from "vue-router";

// 在Vue3 CompositionAPI中
// 1.获取路由对象 router useRouter
//    const router = useRouter()
// 2.获取路由参数route  useRoute
//   const route = useRoute()

// el-config-provider 配置全局中文，详情参考ele官网*配置组件 Config Provider*
</script>

<template>
  <div>
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
