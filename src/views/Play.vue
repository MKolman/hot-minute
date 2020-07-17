<template>
  <div id="play" :class="$route.params.type">
    <h1> {{ title }} </h1>
    <div class="card-wrapper" :class="{flip: showCard}">
      <Card class="back" :class="$route.params.type"></Card>
      <Card class="front" :class="$route.params.type">
        Kamen spotike
      </Card>
      <v-btn class="eye" @click="showCard = !showCard"><v-icon>mdi-eye</v-icon></v-btn>
    </div>
    <v-btn
      v-if="timer === null"
      x-large class="ready"
      @click="countdown();"
    >
      I'm ready!
    </v-btn>
    <v-btn
      v-if="timer !== null"
      x-large
      class="ready"
    >
      {{ timerTxt }}
    </v-btn>
    <v-btn
      large
      class="done"
      :class="{hidden: timer === null}"
      @click="timer = null"
      router=""
    >done</v-btn>
  </div>
</template>

<style lang="scss">
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
.flip > .front{
  transform: rotateY(180deg);
}
.flip > .back {
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
#play {
  // align-items: center;
  // justify-content: space-around;
  background-color: var(--color-view-bg);
  color: var(--color-view-txt);
  h1 {
    flex: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-weight: normal;
  }
}
.ready, .done{
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
  flex: 0.2;
  font-size: 3rem!important;
}
.done {
  background-color: var(--color-view-done-bg)!important;
  color: var(--color-view-done-txt)!important;
  margin-bottom: 1rem;
  font-size: 2.5rem!important;
  padding-top: 0.2em!important;
}
.done.hidden {
  visibility: hidden;
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
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'Play',
  components: {
    Card,
  },
  data() {
    return {
      showCard: true,
      timer: null,
    };
  },
  computed: {
    title() {
      const result = this.$route.params.type;
      return result.charAt(0).toUpperCase() + result.slice(1);
    },
    timerTxt() {
      return `${Math.floor(this.timer / 60).toString().padStart(2, '0')}:${(this.timer % 60).toString().padStart(2, '0')}`;
    },
  },
  methods: {
    countdown() {
      if (this.timer === null) {
        this.timer = 61;
      }
      if (this.timer > 0) {
        this.timer -= 1;
        setTimeout(this.countdown, 1000);
      }
    },
  },
};
</script>
