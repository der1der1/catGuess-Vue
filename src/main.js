//載入 createApp 函式
import { createApp } from "vue";
//載入 根組件
import App from "./App_main.vue"
//建立 vue App 物件
const app=createApp(App);
//掛載到 HTML標籤底下
app.mount('#app');
