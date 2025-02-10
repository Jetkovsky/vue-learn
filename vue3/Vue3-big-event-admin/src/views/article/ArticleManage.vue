<script setup>
import { ref } from 'vue';
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelSelect from './components/ChannelSelect.vue'
import { formatTime } from '@/utils/format';
import { artGetListService } from '@/api/article';
import ArticleEdit from './components/ArticleEdit.vue';


// 定义参数对象
const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: ''
})

const articleList = ref([])
const total = ref(0)
const loading = ref(false)

const getArticleList = async () => {
  loading.value = true
  const res = await artGetListService(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}

getArticleList()


// 抽屉drawer 添加功能
const articleEditRef = ref()
// 添加逻辑
const onAddArticle = () => {
  articleEditRef.value.open({})
}

// 编辑逻辑
const onEditArticle = (row) => {
  articleEditRef.value.open(row)
}
// 删除逻辑
const onDelArticle = (row) => {
  console.log(row);
}

// 页数变化变化  -> 一页可显示的条数
const onSizeChange = (size) => {
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}

// 当前页变化
const onCurrentChange = (page) => {
  params.value.pagenum = page
  getArticleList()
}

// 搜索按钮
const onSearch = () => {
  params.value.pagenum = 1
  getArticleList()
}

// 重置按钮
const onReset = () => {
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
  getArticleList()
}

// 添加或者编辑   成功的回调
const onSuccess = (type) => {
  if (type === 'add') {
    // 如果是添加，需要跳转渲染最后一页，编辑直接渲染当前页
    const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
    params.value.pagenum = lastPage
    getArticleList()
  }
  // 如果是编辑，直接渲染当前页即可
  getArticleList()
}


</script>


<template>
  <page-container title="文章管理">
    <template #extra>
      <el-button @click="onAddArticle">添加文章</el-button>
    </template>

    <!-- 表单部分 -->
    <el-form :inline="true" class="form-inline">
      <el-form-item label="文章分类：">
        <!-- Vue2 => v-model  => :value 和 @input 的简写 -->
        <!-- Vue3 => v-model  => :modelValue 和 @update:modelValue 的简写 -->
        <!-- <channel-select v-model:modelValue="params.cate_id"></channel-select> -->

        <!-- Vue3 => v-model:cid =>  :cid和@update:cid的简写 -->
        <channel-select v-model:cid="params.cate_id"></channel-select>
      </el-form-item>
      <el-form-item label="发布状态：">
        <el-select v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格部分 ,填充数据的两种方式： 作用域插槽 或者 prop-->
    <el-table :data="articleList" v-loading="loading">
      <el-table-column label="文章标题">
        <template #default="{ row }">
          <el-link type="primary" :underline="false"> {{ row.title }}</el-link>
        </template>
      </el-table-column>
      <!-- 1.prop -->
      <el-table-column label="分类" prop="cate_name"></el-table-column>
      <!-- 2.作用域插槽 -->
      <!-- <el-table-column label="分类">
        <template #default="{ row }">
          <p>{{ row.cate_name }}</p>
        </template>
      </el-table-column> -->
      <el-table-column label="发表时间" prop="pub_date">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state"></el-table-column>

      <!-- 利用作用域插槽 row 可以获取当前行的数据 -->
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="primary" circle plain :icon="Edit" @click="onEditArticle(row)"></el-button>
          <el-button type="danger" circle plain :icon="Delete" @click="onDelArticle(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页部分 -->
    <el-pagination v-model:current-page="params.pagenum" v-model:page-size="params.pagesize"
      :page-sizes="[2, 3, 4, 5, 10]" background layout="jumper, total, sizes, prev, pager, next" :total="total"
      @size-change="onSizeChange" @current-change="onCurrentChange"
      style="margin-top: 20px; justify-content: flex-end;" />


    <!-- 抽屉   编辑文章部分 -->
    <article-edit ref="articleEditRef" @success="onSuccess"></article-edit>
  </page-container>
</template>


<style lang="scss" scoped>
.form-inline .el-input {
  --el-input-width: 220px;
}

.form-inline .el-select {
  --el-select-width: 220px;
}
</style>
