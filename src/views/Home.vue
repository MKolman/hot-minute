<template>
  <div class="home">
    <div class="top">
      <div> menu </div>
    </div>
    <Card class="play" v-on:click.native="play()">PLAY</Card>
    <Score id="score" />
  </div>
</template>

<style lang="scss">
.home {
  #score {
    flex: 2;
  }
  .top {
    text-align: right;
    div {
      background-color: var(--color-score-change-bg);
      color: var(--color-app-bg);
      margin-top: 1rem;
      margin-right: 1rem;
      height: 2rem;
      width: 3rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      align-self: right;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import Score from '@/components/Score.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Score,
  },
  methods: {
    play() {
      console.log(this.$router);
      this.$router.push('selector');
    },
  },
};
</script>
