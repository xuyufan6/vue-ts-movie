import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MovieDetail from './views/MovieDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/movieDetail/:id',
      name: 'movieDetail',
      component: MovieDetail,
      meta: {
        title: '电影详情'
      }
    }
  ]
});
