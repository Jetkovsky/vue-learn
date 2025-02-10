<script setup>
import { Plus, Upload } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useUserStore } from '@/stores';
import { userUpdateAvatarService } from '@/api/user';
import { ElMessage } from 'element-plus';


const userStore = useUserStore()
const imageUrl = ref(userStore.user.user_pic)
const uploadRef = ref()

const onSelectFile = (uploadFile) => {
  // imageUrl.value = URL.createObjectURL(uploadFile.raw)
  // 基于 fileReader 做图片预览
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imageUrl.value = reader.result
  }
}

// 上传头像
const onUpdateAvatar = async () => {
  await userUpdateAvatarService(imageUrl.value)
  await userStore.getUser()
  ElMessage({ type: 'success', message: '更换头像成功' })
}
</script>

<template>
  <page-container title="更换头像">
    <el-upload ref="uploadRef" class="avatar-uploader" :show-file-list="false" :auto-upload="false"
      :on-change="onSelectFile">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">
        <Plus />
      </el-icon>
    </el-upload>
    <br />
    <!-- dom 用选择器拿到input（看源代码可以看到file是通过input标签传输的） -->
    <el-button @click="uploadRef.$el.querySelector('input').click()" type="primary" :icon="Plus"
      size="large">选择图片</el-button>
    <el-button @click="onUpdateAvatar" type="success" :icon="Upload" size="large">上传头像</el-button>
  </page-container>
</template>



<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }

    .el-upload {
      border: 2px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>
