<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { Plus } from '@element-plus/icons-vue'
import ChannelSelect from './ChannelSelect.vue'

// 局部注册
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { artPublishService, articleGetDetailService, articleEditService } from '@/api/article'
import { ElMessage } from 'element-plus'
import { baseURL } from '@/utils/request'



// 默认数据
const defaultForm = {
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: ''
}

// 准备数据
const formModel = ref({ ...defaultForm })

// 抽屉drawer
const visibleDrawer = ref(false)

// 组件对外暴露一个方法open,基于open传米的参数，区分添加还是编辑
// open({})=>表单无需渲染，说明是添加
// open({id, ..., ...,})=>表单需要渲染，说明是编辑
// open调用后，可以打开抽屉
const editorRef = ref()
const open = async (row) => {
  visibleDrawer.value = true
  if (row.id) {
    // 基于row.id发送请求，获取编辑对应的详情数据，进行回显
    console.log(row)
    const res = await articleGetDetailService(row.id)
    formModel.value = res.data.data
    imgUrl.value = baseURL + formModel.value.cover_img
    // 接口文档：更新-文章详情 所需要的是file
    // 网络图片转成 file 对象, 需要转换一下
    const file = await imageUrlToFile(imgUrl.value, formModel.value.cover_img)
    formModel.value.cover_img = file

  } else {
    // console.log('添加功能')
    formModel.value = { ...defaultForm } //基于默认的数据，重置form数据
    // 这里重置了表单的数据，但是图片上传img地址，富文本编辑器内容=>需要手动重置
    imgUrl.value = ''
    editorRef.value.setHTML('')
  }
}

// 将网络图片地址转换为File对象
async function imageUrlToFile(url, fileName) {
  try {
    // 第一步：使用axios获取网络图片数据
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const imageData = response.data;

    // 第二步：将图片数据转换为Blob对象
    const blob = new Blob([imageData], { type: response.headers['content-type'] });

    // 第三步：创建一个新的File对象
    const file = new File([blob], fileName, { type: blob.type });

    return file;
  } catch (error) {
    console.error('将图片转换为File对象时发生错误:', error);
    throw error;
  }
}


const imgUrl = ref('')
// 上传文件之前的文件预览
const onUploadFile = (uploadFile) => {
  // console.log(uploadFile);  可以打印对象 图片就在raw那个字段那
  imgUrl.value = URL.createObjectURL(uploadFile.raw) // 预览图片
  formModel.value.cover_img = uploadFile.raw
}

// 发布文章
const pubEmit = defineEmits('success')
const onPublish = async (state) => {

  // 将已发布还是草稿状态， 存入formModel
  formModel.value.state = state

  //注意：当前接口，需要的是formData对象
  //将普通对象 => 转换成 => formData对象
  const fd = new FormData()
  for (let key in formModel.value) {
    fd.append(key, formModel.value[key])
  }

  // 发请求
  if (formModel.value.id) {
    // 编辑请求
    await articleEditService(fd)
    ElMessage.success('编辑成功')
    visibleDrawer.value = false
    pubEmit('success', 'edit')
  } else {
    await artPublishService(fd)
    ElMessage.success('添加成功')
    visibleDrawer.value = false
    // 通知父组件添加成功，并重新渲染（即直接定位到最后一页，添加的地方）
    pubEmit('success', 'add')
  }
}


defineExpose({
  open
})
</script>


<template>
  <el-drawer v-model="visibleDrawer" :title="formModel.id ? '编辑文章' : '添加文章'" direction="rtl" size="50%">
    <!-- 发表文章表单 -->
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <channel-select v-model="formModel.cate_id" width="100%"></channel-select>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload class="avatar-uploader" :show-file-list="false" :auto-upload="false" :on-change="onUploadFile">
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <quill-editor ref="editorRef" theme="snow" v-model:content="formModel.content"
            contentType="html"></quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="onPublish('已发布')" type="primary">发布</el-button>
        <el-button @click="onPublish('草稿')" type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>


<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }

    .el-upload {
      border: 1px dashed var(--el-border-color);
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
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}

.editor {
  width: 100%;

  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
