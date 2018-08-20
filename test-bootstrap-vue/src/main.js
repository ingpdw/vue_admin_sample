import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/demo.css';
import 'codemirror/lib/codemirror.css'

import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VueHighlightJS from 'vue-highlightjs';
import VueCodemirror from 'vue-codemirror';
import VueGoogleCharts from 'vue-google-charts';
import Routes from './routes/index';
import App from './App.vue';


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueCodemirror);
Vue.use(VueHighlightJS);
Vue.use(VueGoogleCharts);

const router = new VueRouter({
  routes: Routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
