<template>
  <!-- eslint-disable -->
  <div class="home">
    <spinner v-if="loading"></spinner>
    <vant-tabs v-model="active">
      <vant-tab
        v-for="tab in tabs"
        :key="tab"
        :title="tab"
      >
        <div class="list-movie-container">
          <movie-item :movie="movieListData"></movie-item>
        </div>
      </vant-tab>
    </vant-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action } from "vuex-class";
import { Tab, Tabs } from "vant";
import MovieItem from "@/components/MovieItem.vue";
import Spinner from "@/components/Spinner.vue";

@Component({
  components: {
    Spinner,
    MovieItem,
    "vant-tab": Tab,
    "vant-tabs": Tabs
  }
})
export default class Home extends Vue {
  private movieListData = null;
  private cate: string = "in_theaters";
  private loading: boolean = true;
  private active: number = 0;
  private tabs: string[] = ["正在热映", "即将上映", "Top250"];

  @Action
  private movieList!: (cate: string) => any;

  private created() {
    this.loadMovieList();
  }

  @Watch("active")
  private onActiveChange(val: number) {
    let arr: string[] = ["in_theaters", "coming_soon", "top250"];
    this.changeType(val, arr[val]);
  }

  changeType(active: number, cate: string) {
    this.cate = cate;
    this.loading = true;
    this.loadMovieList();
  }

  loadMovieList() {
    this.movieList(this.cate).then((res: any) => {
      this.movieListData = res.subjects;
      this.loading = false;
    });
  }
}
</script>

<style lang="scss">
.list-movie-container {
  padding: 0 16px;
  p {
    text-align: left;
  }
}
</style>
