<template>
  <v-app id="app">
    <v-main>
      <router-view class="view" />
    </v-main>
    <UpdatePWA />
    <Tutorial />
  </v-app>
</template>

<style lang="scss">
@import "./styles/_colors.scss";
#app {
  font-family: 'Galada', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--color-app-bg);
  color: var(--color-app-txt);

  .v-main {
    margin: auto;
    max-width: 600px;
    width: 100%;
    .v-main__wrap {
      display: flex;
      flex:1;
    }
    .view {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>

<script lang="ts">
import UpdatePWA from '@/components/UpdatePWA.vue';
import Tutorial from '@/components/Tutorial.vue';
import Audio from '@/lib/audio';
import allWords from '@/lib/wordlists';

export default {
  name: 'App',
  components: { Tutorial, UpdatePWA },
  mounted() {
    this.$root.$on('play', (sound) => {
      Audio[sound].play(this.$store.state.enabledSounds2);
    });
    allWords.reload(this.$store.state.customWords);
  },
};
</script>
