<script setup>
import { ref } from 'vue';
import { artAddChannelService, artEditChannelService } from '@/api/article.js'
import { ElMessage } from 'element-plus';


const dialogVisible = ref(false)
const formRef = ref()

// 绑定的表单变量
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})

// 表单校验规则    绑到rules，然后这里的每一项绑到prop
const formRules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名必须是1-10位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类别名必须是1-15位的字母数字',
      trigger: 'blur'
    }
  ]
}


const open = (row) => {
  dialogVisible.value = true
  formModel.value = { ...row }   // 添加 → 重置了表单内容，编辑 → 存储了需要回显的数据
}

// 子传父，定义
const emit = defineEmits(['success'])
const onSubmit = async () => {
  // validate 会对表单进行规则rules校验，callback，返回布尔值
  await formRef.value.validate()
  formModel.value.id ?
    await artEditChannelService(formModel.value)
    : await artAddChannelService(formModel.value)

  ElMessage({
    type: 'success',
    message: formModel.value.id ? '编辑成功' : '添加成功'
  })

  dialogVisible.value = false
  // 传出去，然后在外面监听  @success
  emit('success')
}

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="formModel.id ? '编辑分类' : '添加分类'" width="30%">
    <el-form ref="formRef" :model="formModel" :rules="formRules" label-width="100px" style="padding-right: 30px">
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="formModel.cate_name" placeholder="请输入分类名称" minlength="1" maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="formModel.cate_alias" placeholder="请输入分类别名" minlength="1" maxlength="15"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
