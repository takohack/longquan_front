import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router'
import router from './router'
import './plugins/element.js'
import VideoPlayer from 'vue-video-player'

// markdown
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VideoPlayer)

new Vue({
  vuetify,
  render: h => h(App),

  router:router,

}).$mount('#app')
