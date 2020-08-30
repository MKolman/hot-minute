<template>
  <div class="home">
    <div class="top">
      Hot Minute
      <v-btn text to="settings" aria-label="Settings">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </div>
    <Card class="play" v-on:click.native="play()">
      Play
    </Card>
    <v-btn v-if="!showScore" @click="showScore = true;" text>keep score</v-btn>
    <Score v-if="showScore" id="score" />
  </div>
</template>

<style lang="scss">
.home {
  max-width: 100%;
  #score {
    flex: 2;
    max-width: 100%;
  }
  .top {
    padding: 0.5rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-score-change-bg);

    .v-btn {
      padding: 0;
      min-width: 0;
    }
    .v-icon {
      font-size: 2.5em;
      color: var(--color-score-change-bg);
    }
  }
  .play-img {
    height: 0.5em;
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
  data() {
    return {
      showScore: true,
    };
  },
  methods: {
    play() {
      this.$ga.event({
        eventCategory: 'action',
        eventAction: 'pressPlay',
      });
      if (this.$store.state.tutorialStep === 1) this.$store.commit('tutorialNext');
      this.$router.push('selector');
    },
  },
};
</script>
