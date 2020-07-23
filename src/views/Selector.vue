<template>
  <div>
    <Card
      v-for="(activity, index) in activities"
      :key="activity"
      :class="{
        sat: index === highlight,
        desat: highlight != null && index !== highlight,
        [activity]: true}"
    >{{ capitalize(activity) }}</Card>
  </div>
</template>

<style lang="scss">
</style>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'Selector',
  components: {
    Card,
  },
  data() {
    return {
      highlight: null,
      delay: this.$store.state.animationTimeS * 33,
      timeoutIds: [null],
      activities: ['speak', 'draw', 'show'],
    };
  },
  mounted() {
    const initialDelay = this.$store.state.animationTimeS * 66;
    this.timeoutIds.push(setTimeout(this.roll, initialDelay));
    this.timeoutIds.push(setTimeout(this.resolve, initialDelay + this.delay * 10));
  },
  destroyed() {
    this.clearTimeouts();
  },
  methods: {
    goPlay(type) {
      if (type === 'bomb') {
        this.$router.replace('/play/bomb');
      } else {
        this.$router.replace({ name: 'Play', params: { type } });
      }
    },
    capitalize(txt) {
      if (!txt || !txt.length) return txt;
      return txt[0].toUpperCase() + txt.slice(1);
    },
    roll() {
      this.highlight = (this.highlight + 1) % 3;
      this.delay = Math.max(this.delay * 0.9, 100);
      this.timeoutIds[0] = setTimeout(this.roll, this.delay);
    },
    resolve() {
      if (Math.random() < this.$store.state.bombProbability) {
        this.timeoutIds.push(setTimeout(() => this.goPlay('bomb'), 2000));
      } else {
        this.clearTimeouts();
        const selectedActivity = Math.floor(Math.random() * 3);
        this.highlight = selectedActivity;
        for (let delay = 200; delay < 1300; delay += 200) {
          this.timeoutIds.push(setTimeout(() => {
            this.highlight = this.highlight === -1 ? selectedActivity : -1;
          }, delay));
        }
        this.timeoutIds.push(
          setTimeout(() => this.goPlay(this.activities[selectedActivity]), 3000),
        );
      }
    },
    clearTimeouts() {
      this.timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    },
  },
};
</script>
