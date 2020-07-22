<template>
  <div class="text-page">
    <h1>
      Settings
      <small>
        <router-link to="rules">Rules</router-link>
        <router-link to="about">About</router-link>
      </small>
    </h1>

    <v-subheader>
      Change which wordsets are used
    </v-subheader>
    <v-treeview
      :items="wordItems"
      v-model="selectedWordlists"
      selectable
      :open-on-click="true"
      selected-color="primary"
    ></v-treeview>

    <v-divider></v-divider>

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

    <v-divider></v-divider>

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

    <v-divider></v-divider>

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
  font-family: 'Epilogue', sans-serif;
  display: block;
  padding-bottom: 5em;
  h1, h2 {
    text-transform: uppercase;
  }
  h1 {
    border-bottom: var(--color-app-txt) solid 0.3em;
    vertical-align: bottom;
    padding-bottom: 0;
    margin-bottom: 1em;
    display: flex;
    align-items: baseline;
    small {
      text-transform: none;
      font-size: small;
      display: inline-block;
      text-align: right;
      width: auto;
      flex: 1;
      a {
        margin-left: 1em;
      }
    }
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
      wordItems: [],
    };
  },
  created() {
    this.wordItems = [allWords.all('')];
    this.wordItems[0].name = 'Select categories';
  },
  computed: {
    selectedWordlists: {
      get() {
        return this.$store.state.selectedWordlists;
      },
      set(value) {
        const countActions = {};
        for (let i = 0; i < value.length; i += 1) {
          countActions[value[i].split('/', 3)[2]] = true;
        }
        if (Object.keys(countActions).length === 4) {
          this.$store.commit('updateSelectedWordlists', value);
        } else {
          this.$store.commit('updateSelectedWordlists', this.$store.state.selectedWordlists);
        }
      },
    },
  },
};
</script>
