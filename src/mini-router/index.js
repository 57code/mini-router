// 1.导入页面组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import { createRouter } from './router'

// 2.定义路由：每个路由对应一个组件
const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
]

const router = createRouter({
  // history: createWebHashHistory(),
  routes
})

export default router
