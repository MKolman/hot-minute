<template>
  <div id="play" :class="$route.params.type">
    <div class="header">
      <Shine />
      <h1> {{ title }} </h1>
    </div>
    <CardFlip v-model="cardVisible" :sensitive="timerRunning">
      {{ capitalize(txt) }}
    </CardFlip>
    <Timer @start="cardVisible = false; timerRunning = true;" @stop="timerRunning = false;" />
  </div>
</template>

<style lang="scss" scoped>
#play {
  background-color: var(--color-view-bg);
  color: var(--color-view-txt);
  .header {
    flex: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
    }
    h1 {
      font-size: 4rem;
      font-weight: normal;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import allWords from '@/lib/wordlists';
import Timer from '@/components/Timer.vue';
import Shine from '@/components/Shine.vue';
import CardFlip from '@/components/CardFlip.vue';

export default {
  name: 'Play',
  components: {
    Timer,
    Shine,
    CardFlip,
  },
  data() {
    return {
      cardVisible: true,
      txt: '',
      timerRunning: false,
    };
  },
  mounted() {
    allWords.loadSettings(this.$store.state.selectedWordlists2);
    this.txt = allWords.getRandom(this.$route.params.type);
  },
  computed: {
    title() {
      return this.capitalize(this.$route.params.type);
    },
  },
  methods: {
    capitalize(txt) {
      if (!txt || !txt.length) return txt;
      return txt[0].toUpperCase() + txt.slice(1);
    },
  },
};
</script>
