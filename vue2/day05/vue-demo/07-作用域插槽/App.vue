<template>
  <div>
    <MyTable :list="list">
      <!-- #default 实际上是插槽（slot）的默认名称。当你在一个组件中使用插槽时，如果不给插槽命名，它将被默认命名为 #default -->

      <!-- 3. 通过template #插槽名="变量名" 接收， obj接收的是一整个对象（不一定叫obj，叫什么都行）
        （接收子组件传过来的），具体可看 2. -->
      <template #default="obj">
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </MyTable>

    <MyTable :list="list2">
      <!-- #default="" 那里不一定叫obj，叫什么都行，甚至支持对象解构（下面就是）。当用解构时那就必须跟子组件一样了 -->
      <!-- <template #default="{ row }"> -->
      <template #default="obj">
        <button @click="show(obj)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
import MyTable from "./components/MyTable.vue";
export default {
  name: "App",
  data() {
    return {
      list: [
        { id: 1, name: "张小花", age: 18 },
        { id: 2, name: "孙大明", age: 19 },
        { id: 3, name: "刘德忠", age: 17 },
      ],
      list2: [
        { id: 1, name: "赵小云", age: 18 },
        { id: 2, name: "刘蓓蓓", age: 19 },
        { id: 3, name: "姜肖泰", age: 17 },
      ],
    };
  },
  components: { MyDialog, MyTable },
  methods: {
    del(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    show(o){
      // console.log(row);
      alert(`姓名：${o.row.name}; 年龄：${o.row.age} 岁; `)
    }
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
