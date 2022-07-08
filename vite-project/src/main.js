import { createApp } from 'vue'
import App from './App.vue'
import './style/index.scss'
import router from './router/index'
import store from './store'

// 引入qiankun,启动
import start from '@/micros'

const app = createApp(App);

app.use(router)
app.use(store)

app.mount('#app')

start({ sandbox: { experimentalStyleIsolation: true } })