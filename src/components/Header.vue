<template>
  <div class="header">
    <van-nav-bar :title="title" :left-arrow="back" @click-left="goBack" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { NavBar } from "vant";

@Component({
  components: {
    [NavBar.name]: NavBar
  }
})
export default class Header extends Vue {
  private title: string = "";
  private back: boolean = false;

  @Watch("$route.meta.title")
  private onRouterTitleChange(val: string) {
    this.title = val;
    this.back = Boolean(val !== "首页");
  }

  private created() {
    this.title = this.$route.meta.title;
    this.back = Boolean(this.title !== "首页");
  }

  private goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss">
.van-nav-bar {
  color: #fff;
  background-color: #ee4000;
  .van-icon {
    color: #fff;
  }
}
</style>
