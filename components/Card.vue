<template>
  <div class="outer elevation-4">
    <div class="inner">
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
div {
  flex: 1;
  display: flex;
}
.outer:first-child {
  margin-top: 5%;
}
.outer {
  background-color: var(--color-card-bg);
  color: var(--color-card-txt);
  max-height: 33vh;
  margin: 5%;
  margin-top: 0%;
  position: relative;
  align-items: center;
  justify-content: center;
  transition-duration: 0.3s;
  transition-property: background-color, border-color, color;
  .inner {
    position: absolute;
    left: 0.25em;
    top: 0.25em;
    width: calc(100% - 0.5em);
    height: calc(100% - 0.5em);
    box-sizing: border-box;
    border: 0.3rem var(--color-card-txt) solid;
    border-radius: 0.5rem;
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
