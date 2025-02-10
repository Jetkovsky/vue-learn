<script setup>
import { artGetChannelsService, artDelChannelService } from '@/api/article';
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue';
import ChannelEdit from './components/ChannelEdit.vue';
import { ElMessageBox, ElMessage } from 'element-plus';


const channelList = ref([])

const loading = ref(false)
const dialogRef = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}

getChannelList()



const onDelChannel = async (row) => {
  await ElMessageBox.confirm('确定删除该条信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  })
  await artDelChannelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getChannelList()
}


const onEditChannel = (row) => {
  dialogRef.value.open(row)
}

const onAddChannel = () => {
  dialogRef.value.open({})
}

// 子传父，监听事件。  子组件修改（edit对话框修改） -> 通知父组件表单修改（回显）
const onSuccess = () => {
  // 监听，子组件变化后，回显父组件
  getChannelList()
}
</script>


<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>

    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column label="操作" width="100">
        <!-- row就是channelList 的一项  $index 下标 -->
        <template #default="{ row, $index }">
          <el-button type="primary" plain :icon="Edit" circle @click="onEditChannel(row, $index)"></el-button>
          <el-button type="danger" plain :icon="Delete" circle @click="onDelChannel(row, $index)"></el-button>
        </template>
      </el-table-column>

      <!-- el-table支持empty的具名插槽 -->
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>

    <!-- 编辑、添加对话框 -->
    <channel-edit ref="dialogRef" @success="onSuccess"></channel-edit>
  </page-container>
</template>


<style lang="scss" scoped></style>
