<template>
  <v-app id="app">
    <v-main>
      <router-view class="view" />
    </v-main>
    <v-snackbar bottom right :value="updateExists" :timeout="-1" color="primary">
      An update is available
      <v-btn text @click="refreshApp">
        Update
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<style lang="scss">
:root {
  --color-app-bg: #fed5dd;
  --color-app-txt: #e22a28;

  // Home screen
  --color-play-btn-bg: #fd8ab3;
  --color-play-btn-txt: #e22a28;
  --color-play-btn-btn: #f4769b;
  --color-play-btn-shadow: #da7190;

  --color-score-bg: #74cbe6;
  --color-score-txt: #f4769b;

  --color-score-change-bg: #feb5ca;
  --color-score-change-txt: #944a65;

  // Select activity screen cards
  // Normal, saturated and desaturated variants
  --color-speak-card-bg: #74cbe6;
  --color-speak-card-sat-bg: #00b0e6;
  --color-speak-card-desat-bg: #74cbe6;
  --color-speak-card-txt: #f4769b;
  --color-speak-card-sat-txt: #ff3b74;
  --color-speak-card-desat-txt: #f4bacb;

  --color-draw-card-bg: #fd8ab3;
  --color-draw-card-sat-bg: #ff3b74;
  --color-draw-card-desat-bg: #f4bacb;
  --color-draw-card-txt: #e22a28;
  --color-draw-card-sat-txt: #e20200;
  --color-draw-card-desat-txt: #e27978;

  --color-show-card-bg: #a55999;
  --color-show-card-sat-bg: #a51f90;
  --color-show-card-desat-bg: #a57a9e;
  --color-show-card-txt: #74cbe7;
  --color-show-card-sat-txt: #00b0e6;
  --color-show-card-desat-txt: #74cbe6;

  // Speak view
  --color-speak-view-bg: var(--color-speak-card-bg);
  --color-speak-view-txt: var(--color-speak-card-txt);
  --color-speak-view-lines: #00b0e6;

  --color-speak-view-card-front-bg: #f4bacb;
  --color-speak-view-card-front-txt: #00b0e6;
  --color-speak-view-card-back-bg: #00b0e6;
  --color-speak-view-card-back-txt: #fb7194;

  --color-speak-view-btn-bg: #fd8ab3;
  --color-speak-view-btn-txt: #00b0e6;
  --color-speak-view-btn-shadow: var(--color-speak-view-btn-txt);
  --color-speak-view-done-bg: var(--color-speak-view-btn-txt);
  --color-speak-view-done-txt: black;

  // Draw view
  --color-draw-view-bg: var(--color-draw-card-bg);
  --color-draw-view-txt: var(--color-draw-card-txt);
  --color-draw-view-lines: #ff3b74;

  --color-draw-view-card-front-bg: var(--color-draw-view-bg);
  --color-draw-view-card-front-txt: var(--color-draw-view-txt);
  --color-draw-view-card-back-bg: #ff3b74;
  --color-draw-view-card-back-txt: #e20200;

  --color-draw-view-btn-bg: #f4bacb;
  --color-draw-view-btn-txt: #e22a28;
  --color-draw-view-btn-shadow: #ff3b74;
  --color-draw-view-done-bg: var(--color-draw-view-btn-txt);
  --color-draw-view-done-txt: black;

  // Show view
  --color-show-view-bg: var(--color-show-card-bg);
  --color-show-view-txt: var(--color-show-card-txt);
  --color-show-view-lines: #ff3b74;

  --color-show-view-card-front-bg: var(--color-show-view-bg);
  --color-show-view-card-front-txt: var(--color-show-view-txt);
  --color-show-view-card-back-bg: #a51f90;
  --color-show-view-card-back-txt: #74cbe6;

  --color-show-view-btn-bg: #74cbe6;
  --color-show-view-btn-txt: #a51f90;
  --color-show-view-btn-shadow: var(--color-show-view-btn-txt);
  --color-show-view-done-bg: var(--color-show-view-btn-txt);
  --color-show-view-done-txt: black;

  // Bomb view
  --color-bomb-view-bg: #fed5dd;
  --color-bomb-view-txt: var(--color-bomb-view-bg);

  --color-bomb-view-btn-bg: #dcb745;
  --color-bomb-view-btn-txt: #e20200;
  --color-bomb-view-btn-shadow: #f14a1a;

  --color-bomb-view-done-bg: #e20200;
  --color-bomb-view-done-txt: black;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

<script>
import update from './mixins/update';

export default {
  name: 'App',
  mixins: [update],
};
</script>
