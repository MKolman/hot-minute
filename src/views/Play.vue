<template>
  <div id="play" :class="$route.params.type">
    <div class="header">
      <Shine />
      <h1> {{ title }} </h1>
    </div>
    <CardFlip v-model="cardVisible">
      Kamen spotike
    </CardFlip>
    <Timer @start="cardVisible = false;" />
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
    };
  },
  computed: {
    title() {
      const result = this.$route.params.type;
      return result.charAt(0).toUpperCase() + result.slice(1);
    },
  },
};
</script>
