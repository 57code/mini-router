import { ref } from 'vue'
import RouterLink from './RouterLink'
import RouterView from './RouterView'

export function createRouter(options) {
  // router实例
  const router = {
    options, // 保存配置项
    current: ref(window.location.hash.slice(1) || '/'),
    install(app) {
      const router = this
      
      // 1. 注册两个全局组件
      app.component('RouterLink', RouterLink)
      app.component('RouterView', RouterView)

      // 2. 注册$router
      app.config.globalProperties.$router = router
    }
  } 

  // 监听事件
  window.addEventListener('hashchange', () => {
    // 变化保存到current并触发RouterView更新
    router.current.value = window.location.hash.slice(1)
  })
  
  return router
}