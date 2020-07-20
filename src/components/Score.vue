<template>
  <div class="wrapper">
    <h1><label for="scoreInput">MY TEAM'S SCORE</label></h1>
    <input id="scoreInput" type="number" v-model="score" class="elevation-4">
    <div class="toolbox-shape">
      <div class="toolbox">
        <v-btn class="score-button numeric elevation-4" fab @click="score += 1;">
          +1
        </v-btn>
        <v-btn class="score-button numeric elevation-4" fab @click="score += 5;">
          +5
        </v-btn>
        <v-btn
          class="score-button elevation-4"
          fab
          @click="score -= 1;"
          aria-label="Undo"
        >
          <v-icon dark>mdi-undo</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
h1 {
  color: var(--color-score-bg);
  font-family: 'Epilogue', sans-serif;
}
input {
  background-color: var(--color-score-bg);
  color: var(--color-score-txt);
  font-size: 3rem;
  width: 3em;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem;
  padding-top: 1.1rem;
}
.toolbox-shape {
  margin-left: 1rem;
  margin-right: 1rem;
  width: calc(100% - 2rem);
  padding-top: calc(0.25 * (100% - 2rem));
  position: relative;
  max-height: 100px;
}
.toolbox {
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.score-button {
  // margin: 1rem;
  background-color: var(--color-score-change-bg)!important;
  color: var(--color-score-change-txt)!important;
  font-size: 2em;
  font-weight: bold;
  display: inline-block;
  position: relative;
  width: 25%;
  height: 100%;
  max-height: 100px;
  max-width: 100px;
  // width: 2.5em;
  // height: 2.5em;
  &.numeric {
    padding-top: 0.2em;
    padding-right: 0.2em;
  }
  .v-icon {
    font-size: 1.2em;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Score',
  computed: {
    score: {
      get() {
        return this.$store.state.score;
      },
      set(value) {
        this.$store.commit('updateScore', value);
      },
    },
  },
});
</script>
