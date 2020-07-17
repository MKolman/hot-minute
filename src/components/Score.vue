<template>
  <div class="wrapper">
    <h1>MY TEAM'S SCORE</h1>
    <input v-model="scoreValue" class="elevation-4">
    <div class="toolbox-shape">
      <div class="toolbox">
        <v-btn class="score-button elevation-4" fab @click="scoreValue += 5;">
          +5
        </v-btn>
        <v-btn class="score-button elevation-4" fab @click="scoreValue += 1;">
          +1
        </v-btn>
        <v-btn class="score-button elevation-4" fab @click="scoreValue -= 1;">
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
}
input {
  background-color: var(--color-score-bg);
  color: var(--color-score-txt);
  font-size: 3rem;
  width: 3em;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem;
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
  .v-icon {
    font-size: 1.2em;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Score',
  data() {
    return {
      scoreValue: 0,
    };
  },
});
</script>
