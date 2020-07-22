<template>
  <div class="wrapper" :class="{ disableTransitions: disableTransitions }">
    <h1 :class="{left: transitionScoreTitleLeft}">
      <transition name="title">
          <span v-if="scores.length && activeScore" :key="activeScore.id">
            {{ activeScore.name }}
            <v-btn
              color="primary"
              text
              fab
              small
              @click="openScoreDialog = true"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </span>
          <span v-else :key="-1">
            Keep Score
          </span>
      </transition>
    </h1>
    <div
      class="input-shape"
      :class="{empty: scores.length === 0}"
      @scroll="handleScroll"
      ref="allScores"
    >
      <transition-group
        name="scores"
        @after-enter="activeScoreIndex = activeScoreIndex"
        @after-leave="activeScoreIndex = activeScoreIndex"
      >
        <div class="empty-pad" key="-1">
          <v-btn @click="prependScore()" fab large class="elevation-4">+</v-btn>
        </div>
        <input
          v-for="score in scores"
          :key="score.id"
          v-model="score.value"
          :class="{big: score.id === activeScore.id}"
          class="elevation-4"
          type="number"
        />
        <div class="empty-pad" key="-2">
          <v-btn @click="appendScore()" fab large class="elevation-4">+</v-btn>
        </div>
      </transition-group>
    </div>
    <transition name="toolbox">
      <div class="toolbox-shape" v-if="scores.length !== 0">
        <div class="toolbox">
          <v-btn class="score-button numeric elevation-4" fab @click="activeScore.changeScore(3);">
            +3
          </v-btn>
          <v-btn class="score-button numeric elevation-4" fab @click="activeScore.changeScore(5);">
            +5
          </v-btn>
          <v-btn
            class="score-button elevation-4"
            fab
            @click="activeScore.undoScore()"
            aria-label="Undo"
          >
            <v-icon dark>mdi-undo</v-icon>
          </v-btn>
        </div>
      </div>
    </transition>

    <v-dialog v-model="openScoreDialog">
      <v-card>
        <v-card-title>
          {{ activeScore.name }}
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="Team name"
            required
            v-model="activeScore.name"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            @click="deleteScore()"
          >
            Delete
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="openScoreDialog = false"
          >
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow-x: hidden;
  }
  h1, .v-card {
    // font-weight: normal;
    font-family: 'Epilogue', sans-serif;
  }
  .v-card {
    background-color: var(--color-app-bg);
    color: var(--color-app-txt);
  }

  h1 {
    overflow-x: hidden;
    text-transform: uppercase;
    color: var(--color-score-title);
    width: 100%;
    white-space: nowrap;
    span {
      display: inline-block;
      position: absolute;
      left: 0;
      text-align: center;
      right: 0;
    }
  }
  .input-shape {
    scroll-behavior: smooth;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    font-size: 3rem;

    &.empty .empty-pad:last-child {
      display: none;
    }
    .empty-pad {
      display: inline-block;
      width: 50%;
      vertical-align: middle;
    }
    .v-btn {
      font-size: 3rem;
      background-color: var(--color-score-bg)!important;
      color: var(--color-score-txt)!important;
    }
  }
  input {
    background-color: var(--color-score-bg);
    color: var(--color-score-txt);
    width: 3em;
    text-align: center;
    font-weight: bold;
    padding: 0rem;
    padding-top: 0.6rem;
    margin: 1rem 0.25em;
    opacity: 0.5;
    transition-duration: 0.5s;
    transition-property: opacity, padding, margin;
    &.big {
      opacity: 1;
      padding: 0.5rem;
      padding-top: 1.1rem;
      margin: 0.5rem 0.25em;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;
    }
  }
  .disableTransitions *{
    transition: none!important;
  }
  .scores-enter-active, .scores-leave-active,
  .toolbox-enter-active, .toolbox-leave-active {
    transition: all 1s;
  }
  .scores-enter, .scores-leave-to {
    opacity: 0!important;
    width: 0!important;
    margin-left: 0!important;
    margin-right: 0!important;
    padding-left: 0!important;
    padding-right: 0!important;
  }
  .title-enter-active, .title-leave-active {
    transition: all 0.5s;
  }
  .title-enter {
    transform: translateX(-100%);
    opacity: 0;
  }
  .title-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
  .left {
    .title-enter {
      transform: translateX(100%);
    }
    .title-leave-to {
      transform: translateX(-100%);
    }
  }
  .toolbox-shape {
    margin-left: 1rem;
    margin-right: 1rem;
    width: calc(100% - 2rem);
    padding-top: calc(0.25 * (100% - 2rem));
    position: relative;
    max-height: 100px;
    bottom: 0;

    &.toolbox-enter, &.toolbox-leave-to {
      opacity: 0!important;
      transform: translateY(100px);
      width: 0px;
      padding-top: 0px;
    }
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

class Score {
  static idCounter = 0;

  id: number;

  value: number;

  history: number[];

  name: string;

  static load(obj: object) {
    const result = new Score('');
    Object.assign(result, obj);
    return result;
  }

  constructor(name: string) {
    this.value = 0;
    this.history = [] as number[];
    this.id = Score.idCounter;
    this.name = `${name} Team ${this.id + 1}`;
    Score.idCounter += 1;
  }

  changeScore(diff: number) {
    this.history.push(this.value);
    if (this.history.length > 100) this.history.splice(0, 1);
    this.value += diff;
  }

  undoScore() {
    if (this.history.length > 0) {
      this.value = this.history.pop() || 0;
    } else if (this.value > 0) {
      this.value -= 1;
    }
  }
}

export default Vue.extend({
  name: 'Score',
  data() {
    return {
      scores: [] as Score[],
      scoreScroll: 0,
      transitionScoreTitleLeft: true,
      openScoreDialog: false,
      scrollIntervalId: 0,
      disableTransitions: true,
    };
  },
  watch: {
    scores: {
      deep: true,
      handler() {
        this.$store.commit('updateScores', this.scores);
      },
    },
  },
  computed: {
    activeScoreIndex: {
      get() {
        const th = this as any;
        return Math.min(
          Math.floor(
            (th.scoreScroll || 0) * th.scores.length,
          ),
          th.scores.length - 1,
        );
      },
      set(scoreIndex: number) {
        const el = this.$refs.allScores as HTMLElement;
        const scrollPercentage = ((scoreIndex + 0.5) / this.scores.length) || 0;
        el.scrollLeft = scrollPercentage * (el.scrollWidth - el.offsetWidth);
      },
    },
    activeScore() {
      const th = this as any;
      return th.scores.length ? th.scores[th.activeScoreIndex] : {};
    },
  },
  mounted() {
    for (let i = 0; i < this.$store.state.scores.length; i += 1) {
      this.scores.push(Score.load(this.$store.state.scores[i]));
    }
    setTimeout(() => { this.disableTransitions = false; }, 200);
  },
  methods: {
    deleteScore() {
      this.scores.splice(this.activeScoreIndex, 1);
      if (this.scores.length === 0) Score.idCounter = 0;
      this.$store.commit('updateScores', this.scores);
      this.openScoreDialog = false;
      this.$nextTick(() => { this.activeScoreIndex = this.activeScoreIndex + 1 - 1; });
    },
    prependScore() {
      this.activeScoreIndex = 0;
      this.scores.unshift(new Score(''));
      this.$store.commit('updateScores', this.scores);
      this.transitionScoreTitleLeft = false;
      this.$nextTick(() => { this.activeScoreIndex = 0; });
    },
    appendScore() {
      this.scores.push(new Score(''));
      this.$store.commit('updateScores', this.scores);
      this.transitionScoreTitleLeft = true;
      this.$nextTick(() => { this.activeScoreIndex = this.scores.length; });
    },
    handleScroll() {
      const el = this.$refs.allScores as HTMLElement;
      const newValue = el.scrollLeft / (el.scrollWidth - el.offsetWidth);
      this.transitionScoreTitleLeft = this.scoreScroll < newValue;
      this.scoreScroll = newValue;
    },
  },
});
</script>
