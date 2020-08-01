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
      Disable or enable sound effects
    </v-subheader>
    <v-treeview
      :items="soundItems"
      v-model="enabledSounds"
      selectable
      :open-on-click="true"
      selected-color="primary"
    ></v-treeview>

    <v-divider></v-divider>

    <v-subheader>
      Change which wordsets are used
    </v-subheader>
    <v-treeview
      :items="wordItems"
      v-model="selectedWordlists2"
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

    <v-divider></v-divider>

    <v-subheader>
      Restart the tutorial
      <v-btn
        text
        style="text-decoration: none;"
        @click="$store.commit('tutorialStart');"
        color="primary"
      >
        Start
      </v-btn>
    </v-subheader>

    <HomeFab/>
  </div>
</template>

<style lang="scss">
@import "@/styles/_settings.scss";
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
      soundItems: [
        {
          name: 'All sound',
          id: 'all',
          children: [
            {
              name: 'Timer',
              id: 'timer',
              children: [
                {
                  name: 'Last 5s',
                  id: 'countdown',
                }, {
                  name: 'Time\'s up',
                  id: 'timesup',
                },
              ],
            }, {
              name: 'Selection',
              id: 'selection',
              children: [
                {
                  name: 'Sound while rolling selection',
                  id: 'select',
                }, {
                  name: 'Three tones when selected',
                  id: 'selected',
                }, {
                  name: 'Bomb explosion',
                  id: 'bomb',
                },
              ],
            }, {
              name: 'Card flip sound',
              id: 'flip',
            }, {
              name: 'Winning sound effect',
              id: 'winner',
            },
          ],
        },
      ],
    };
  },
  created() {
    this.wordItems = [allWords.all('')];
    this.wordItems[0].name = 'Select categories';
  },
  computed: {
    selectedWordlists2: {
      get() {
        return this.$store.state.selectedWordlists2;
      },
      set(value) {
        const countActions = {};
        for (let i = 0; i < value.length; i += 1) {
          countActions[value[i].split('/', 3)[2]] = true;
        }
        if (Object.keys(countActions).length === 4) {
          this.$store.commit('updateSelectedWordlists2', value);
        } else {
          this.$store.commit('updateSelectedWordlists2', this.$store.state.selectedWordlists2.splice(0));
        }
      },
    },
    enabledSounds: {
      get() {
        return this.$store.state.enabledSounds;
      },
      set(value) {
        this.$store.commit('updateEnabledSounds', value);
      },
    },
  },
};
</script>
