<template>
  <div>
    <Card
      v-for="(activity, index) in activities"
      :key="activity"
      @click.native="goPlay(activity);"
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
      delay: 500,
      timeoutId: null,
      activities: ['speak', 'draw', 'show'],
    };
  },
  mounted() {
    setTimeout(this.roll, 1000);
    setTimeout(this.resolve, this.delay * 12);
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
      return txt[0].toUpperCase() + txt.slice(1);
    },
    roll() {
      this.highlight = (this.highlight + 1) % 3;
      this.delay = Math.max(this.delay * 0.9, 100);
      this.timeoutId = setTimeout(this.roll, this.delay);
    },
    resolve() {
      const selectedActivity = Math.floor(Math.random() * 4);
      if (selectedActivity === 3) {
        setTimeout(() => this.goPlay('bomb'), 2000);
      } else {
        clearTimeout(this.timeoutId);
        this.highlight = selectedActivity;
        for (let delay = 200; delay < 1300; delay += 200) {
          setTimeout(() => {
            this.highlight = this.highlight === -1 ? selectedActivity : -1;
          }, delay);
        }
        setTimeout(() => this.goPlay(this.activities[selectedActivity]), 3000);
      }
    },
  },
};
</script>
