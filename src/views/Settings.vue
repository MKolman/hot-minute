<template>
  <div class="text-page">
    <h1> Settings </h1>
    <ul>
      <li><router-link to="rules">Rules</router-link></li>
      <li><router-link to="about">About</router-link></li>
    </ul>

    <v-subheader>
      Change which datasets are used for word generation
    </v-subheader>
    <v-treeview
      :items="wordItems"
      selectable
      :open-on-click="true"
      selected-color="primary"
    ></v-treeview>

    <v-subheader>
      Activity selection animation length: {{ $store.state.animationTimeS }}s
    </v-subheader>
    <v-slider
      v-model="$store.state.animationTimeS"
      min="0"
      max="20"
      step="0.1"
      thumb-label
    >
      <template v-slot:thumb-label="{ value }">
        {{ value + 's' }}
      </template>
    </v-slider>

    <v-subheader>
      Probability of humming bomb: {{ $store.state.bombProbability }}
    </v-subheader>
    <v-slider
      v-model="$store.state.bombProbability"
      min="0"
      max="1"
      step="0.01"
      thumb-label
    ></v-slider>

    <v-subheader>
      Time per round:
      {{
        Math.floor($store.state.timer / 60).toString().padStart(2, '0')
      }}:{{
        ($store.state.timer % 60).toString().padStart(2, '0')
      }}
    </v-subheader>
    <v-slider
      v-model="$store.state.timer"
      min="0"
      max="120"
      step="5"
      thumb-label
    >
      <template v-slot:thumb-label="{ value }">
      {{
        Math.floor(value / 60).toString().padStart(2, '0')
      }}:{{
        (value % 60).toString().padStart(2, '0')
      }}
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
import allWords from '@/lib/wordlists';
import HomeFab from '@/components/HomeFab.vue';

export default {
  name: 'Settings',
  components: {
    HomeFab,
  },
  data() {
    return {
      slider: 0,
      wordItems: allWords.all('').children,
    };
  },
};
</script>
