import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// 添加pinia持久化插件
const persistedState = createPersistedState()
pinia.use(persistedState)

export default pinia


// 外面的可以做到像这个导了
// import {useUserStore, useCountstore} from '@/stores'
// 这样导可以使得直接使用 index.js的导了
// import { useUserStore } from './modules/user'
// export { useUserStore }

// 经典白学   下面这个顶上面两行
export * from './modules/user'


// import { useCounterStore } from './modules/user'
// export { useCounterStore }

