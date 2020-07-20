<template>
  <div class="timer">
    <v-btn
      v-if="timer === null"
      x-large class="ready"
      @click="start();"
    >
      I'm ready!
    </v-btn>
    <v-btn
      v-if="timer !== null"
      ref="timer"
      x-large
      class="ready"
    >
      {{ timerTxt }}
    </v-btn>
    <v-btn
      large
      class="done"
      :class="{hidden: timer === null}"
      @click="pauseTimer()"
      :to="pause?'/':null"
    >{{ pause ? 'home' : 'stop' }}</v-btn>
    <!-- <v-btn
      text
      class="back-btn"
      to="/"
    ><v-icon>mdi-arrow-left</v-icon></v-btn> -->
  </div>
</template>

<style lang="scss" scoped>
.back-btn {
  margin-right: auto;
  position: absolute;
  bottom: 1em;
  color: var(--color-view-btn-shadow)!important;
}
.timer {
  display: flex;
  flex-direction: column;
  flex: 0.5;
  justify-content: center;
}
.ready, .done {
  text-transform: none;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: normal;
  border-radius: 1rem;
}
.ready {
  background-color: var(--color-view-btn-bg)!important;
  color: var(--color-view-btn-txt)!important;
  box-shadow: -0.5rem 1rem 0 var(--color-view-btn-shadow)!important;
  margin-bottom: 1.5rem;
  padding-top: 0.2em!important;
  font-size: 3rem!important;
}
.done {
  background-color: var(--color-view-done-bg)!important;
  color: var(--color-view-done-txt)!important;
  margin-bottom: 1rem;
  font-size: 2.5rem!important;
  padding-top: 0.2em!important;
}
.hidden {
    visibility: hidden;
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Timer',
  props: {
    noConfirm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timer: null,
      pause: false,
    };
  },
  computed: {
    timerTxt() {
      return `${Math.floor(this.timer / 60).toString().padStart(2, '0')}:${(this.timer % 60).toString().padStart(2, '0')}`;
    },
  },
  mounted() {
    if (this.noConfirm) {
      this.start();
    }
  },
  methods: {
    start() {
      this.timer = this.$store.state.timer + 1;
      this.countdown();
      this.$emit('start');

      this.$ga.time({
        timingCategory: 'timer',
        timingVar: 'start',
        timingValue: this.timer,
        timingLabel: this.$route.params.type || 'bomb',
      });
      this.$ga.event({
        eventCategory: 'action',
        eventAction: 'timerStart',
        eventValue: this.timer,
      });
    },
    pauseTimer() {
      this.pause = true;
      this.$emit('stop');
      this.$ga.time({
        timingCategory: 'timer',
        timingVar: 'pause',
        timingValue: this.timer,
        timingLabel: this.$route.params.type || 'bomb',
      });
      this.$ga.event({
        eventCategory: 'action',
        eventAction: 'timerPause',
        eventValue: this.timer,
      });
    },
    countdown() {
      if (this.timer !== null && this.timer <= 0) {
        this.pause = true;
        this.$emit('stop');
        this.$ga.event({
          eventCategory: 'action',
          eventAction: 'timerOver',
        });
      }
      if (this.pause) {
        this.$refs.timer.$el.classList.toggle('hidden');
        setTimeout(this.countdown, 500);
      } else if (this.timer !== null && this.timer > 0) {
        if (this.$refs.timer) this.$refs.timer.$el.classList.remove('hidden');
        this.timer -= 1;
        setTimeout(this.countdown, 1000);
      }
    },
  },
});
</script>
