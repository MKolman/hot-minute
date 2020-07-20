<template>
  <div class="card-wrapper" :class="{hidecard: !(value || touching)}">
    <Card class="back" :class="$route.params.type"></Card>
    <Card class="front" :class="$route.params.type">
      <slot></slot>
    </Card>
    <v-btn
      class="eye"
      aria-label="Show card"
      v-touch="{
          start: touchstart,
          end: touchend,
        }"
      @click="click"
    >
      <v-icon>mdi-eye</v-icon>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  flex:1;
  display: flex;
  flex-direction: column;
  position: relative;
}
.front, .back {
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.hidecard > .front{
  transform: rotateY(180deg);
}
.hidecard > .back {
  transform: rotateY(360deg);
}
.front {
  font-size: 3rem!important;
}
.back {
    position: absolute!important;
    width: 90%!important;
    height: 90%!important;
    top: 0!important;
    margin-top: 0!important;
    transform: rotateY(180deg);
}
.eye {
  margin-left: auto;
  margin-right: 5%;
  // margin-bottom: auto;
  margin-top: -5%;
  border-radius: 0;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  background-color: var(--color-view-card-back-bg)!important;
  color: var(--color-view-card-back-txt)!important;
  box-shadow: 0px 6px 1px -4px rgba(0, 0, 0, 0.2),
              0px 5px 2px -1px rgba(0, 0, 0, 0.14),
              0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  .v-icon {
    font-size: 2.5rem;
  }
  // box-shadow: none;
}
</style>

<script>
import Vue from 'vue';
import Card from '@/components/Card.vue';

export default Vue.extend({
  name: 'CardFlip',
  props: ['value', 'sensitive'],
  data() {
    return {
      onTouch: false,
      touching: false,
    };
  },
  components: {
    Card,
  },
  methods: {
    touchstart() {
      if (this.sensitive) {
        this.onTouch = true;
        this.touching = true;
      }
    },
    click() {
      if (!this.sensitive || !this.onTouch) this.$emit('input', !this.value);
    },
    touchend() {
      if (this.sensitive) {
        this.touching = false;
      }
    },
  },
});
</script>
