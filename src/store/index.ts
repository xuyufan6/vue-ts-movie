import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import movie from './movie';
import start from './start';
import comment from './comment';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    movie,
    start,
    comment
  }
});
