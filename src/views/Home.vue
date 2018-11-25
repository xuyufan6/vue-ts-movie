<template>
  <div class="home">
    <spinner></spinner>
    <p>第一个vue+ts项目</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Spinner from '@/components/Spinner.vue';

@Component({
  components: {
    Spinner
  }
})
export default class Home extends Vue {}
</script>
