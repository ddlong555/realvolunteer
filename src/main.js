import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/styles/index.less'
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/js/rem.js';
import './components.js'
import VueAxios from 'vue-axios'
import store from './store/index'
import axios from 'axios'
Vue.prototype.$axios = axios;
console.log(Vue.prototype.$axios)
Vue.use(VueAxios,axios)
Vue.prototype.$EventBus = new Vue()
Vue.use(ElementUI);
Vue.use(VueDPlayer);
//图片放大
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
var option = {
  maxSpreadZoom: 2, // 控制预览图最大的倍数，默认是2倍，我这里改成了原图
  fullscreenEl: true, //控制是否显示右上角全屏按钮
  closeEl: true, //控制是否显示右上角关闭按钮
  tapToClose: true, //点击滑动区域应关闭图库
  shareEl: true, //控制是否显示分享按钮
  zoomEl: true, //控制是否显示放大缩小按钮
  counterEl: true, //控制是否显示左上角图片数量按钮
  arrowEl: true,  //控制如图的左右箭头（pc浏览器模拟手机时）
  tapToToggleControls: true, //点击应切换控件的可见性
  clickToCloseNonZoomable: true //点击图片应关闭图库，仅当图像小于视口的大小时
}
Vue.use(preview, option)


//配置全局自定义设置
import settings from '../src/assets/js/settings'
//把settings赋值给Vue.prototype.$settings
Vue.prototype.$settings=settings;

import { Button } from 'vant';
Vue.use(Button);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data: {
  }
})
