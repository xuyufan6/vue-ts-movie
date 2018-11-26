<template>
  <van-nav-bar title="首页" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { NavBar } from 'vant';

@Component({
  components: {
    [NavBar.name]: NavBar
  }
})
export default class Header extends Vue {}
</script>
