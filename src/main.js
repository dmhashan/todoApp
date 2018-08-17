import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(VueRouter);
Vue.component('app-NavBar', NavBar);

const routes = [
	{path:'/', component:Home},
	{path:'/About', component:About}
];

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
