<template>
  <div class="outer elevation-4">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  &.play {
    --color-card-bg: var(--color-play-btn-bg);
    --color-card-txt: var(--color-play-btn-txt);
  }
  &.speak {
    --color-card-bg: var(--color-speak-card-bg);
    --color-card-txt: var(--color-speak-card-txt);
    &.sat {
      --color-card-bg: var(--color-speak-card-sat-bg);
      --color-card-txt: var(--color-speak-card-sat-txt);
    }
    &.desat {
      --color-card-bg: var(--color-speak-card-desat-bg);
      --color-card-txt: var(--color-speak-card-desat-txt);
    }
  }
  &.draw {
    --color-card-bg: var(--color-draw-card-bg);
    --color-card-txt: var(--color-draw-card-txt);
    &.sat {
      --color-card-bg: var(--color-draw-card-sat-bg);
      --color-card-txt: var(--color-draw-card-sat-txt);
    }
    &.desat {
      --color-card-bg: var(--color-draw-card-desat-bg);
      --color-card-txt: var(--color-draw-card-desat-txt);
    }
  }
  &.show {
    --color-card-bg: var(--color-show-card-bg);
    --color-card-txt: var(--color-show-card-txt);
    &.sat {
      --color-card-bg: var(--color-show-card-sat-bg);
      --color-card-txt: var(--color-show-card-sat-txt);
    }
    &.desat {
      --color-card-bg: var(--color-show-card-desat-bg);
      --color-card-txt: var(--color-show-card-desat-txt);
    }
  }
}
div {
  flex: 1;
  display: flex;
}
.outer {
  background-color: var(--color-card-bg);
  margin: 1rem;
  .inner {
    margin: 5%;
    align-items: center;
    justify-content: center;
    border: 0.3rem var(--color-card-txt) solid;
    color: var(--color-card-txt);
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
  mounted() {
    this.resizeTextSize();
    window.addEventListener('resize', this.resizeTextSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeTextSize);
  },
  methods: {
    resizeTextSize() {
      (this.$el as HTMLElement).style.fontSize = `${0.4 * this.$el.clientHeight}px`;
    },
  },
});
</script>
