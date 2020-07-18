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
    <Timer />
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
import Timer from '@/components/Timer.vue';

export default {
  name: 'Play',
  components: {
    Card,
    Timer,
  },
  data() {
    return {
      showCard: true,
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
