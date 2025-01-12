import { defineStore } from "pinia";
import { computed, ref } from "vue";


//定义store
//defineStore(仓库的唯一标识，()=>{ ... })
export const useCounterStore = defineStore('publicCounter', () => {


  //声明数据 state
  const count = ref(100)
  const msg = ref('hi pinia')
  const age = ref(16)
  const money = ref(2000)

  //声明操作数据的方法action
  const addCounter = () => count.value++
  const subCounter = () => count.value--

  // 复杂用法示例
  const multipleAdd = () => {
    addCounter()
    age.value++
    money.value+=1000
  }


  //声明基于数据派生的计算属性getters
  const double = computed(() => count.value * 2)

  return {
    count,
    msg,
    age,
    money,
    double,
    addCounter,
    subCounter,
    multipleAdd
  }
})
