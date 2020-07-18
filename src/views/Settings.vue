<template>
  <div class="text-page">
    <h1> Settings </h1>
    <ul>
      <li><router-link to="rules">Rules</router-link></li>
      <li><router-link to="about">About</router-link></li>
    </ul>

    <v-subheader class="pl-0">Activity selection animation length</v-subheader>
    <v-slider
      v-model="slider"
      :thumb-size="30"
      min="0"
      max="20"
      step="0.1"
    >
      <template v-slot:thumb-label="{ value }">
        {{ value + 's' }}
      </template>
    </v-slider>
    <HomeFab/>
  </div>
</template>

<style lang="scss">
#app .v-main .text-page {
  padding: 5%;
  text-align: left;
  display: block;
  font-family: 'Do Hyeon', sans-serif;
  h1, h2, h3 {
    font-family: 'Galada', cursive;
  }
}
</style>

<script>
import HomeFab from '@/components/HomeFab.vue';

export default {
  name: 'Settings',
  components: {
    HomeFab,
  },
  data() {
    return {
      slider: 0,
    };
  },
};
</script>
