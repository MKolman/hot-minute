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
      Select difficulty and songs
    </v-subheader>
    <v-treeview
      :items="wordItems"
      v-model="selectedWordlists2"
      selectable
      selected-color="primary"
      @update:open="setTreeviewClickListeners"
    ></v-treeview>
    <v-btn
      aria-label="Reset all settings"
      to="/import"
      color="primary"
      outlined
      block
    >
      <v-icon>mdi-playlist-music</v-icon>
      <v-spacer></v-spacer>
      Add playlist
      <v-spacer></v-spacer>
    </v-btn>
    <v-divider></v-divider>

    <v-subheader>
      Probability of humming bomb: {{ $store.state.bombProbability }}
    </v-subheader>
    <v-slider
      aria-label="Set probability of humming bomb"
      v-model="$store.state.bombProbability"
      min="0"
      max="1"
      step="0.01"
      thumb-label
    ></v-slider>

    <v-divider></v-divider>

    <v-subheader>
      Disable or enable sound effects
    </v-subheader>
    <v-treeview
      :items="soundItems"
      v-model="enabledSounds"
      selectable
      selected-color="primary"
      @update:open="setTreeviewClickListeners"
    ></v-treeview>

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
      aria-label="Set the time for each round"
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
      Activity selection animation length: {{ $store.state.animationTimeS }}s
    </v-subheader>
    <v-slider
      aria-label="Set activity animation length"
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
      Restart the tutorial
      <v-spacer></v-spacer>
      <v-btn
        aria-label="Restart tutorial"
        text
        style="text-decoration: none;"
        @click="$store.commit('tutorialStart');"
        color="primary"
      >
        Start
      </v-btn>
    </v-subheader>

    <v-subheader>
      Reset all settings
      <v-spacer></v-spacer>
      <v-btn
        aria-label="Reset all settings"
        text
        style="text-decoration: none;"
        @click="$store.dispatch('setDefaultAll'); allWords.reload();"
        color="primary"
      >
        Reset
      </v-btn>
    </v-subheader>

    <v-snackbar
      v-model="deleteWordsSnackbar"
      :timeout="2000"
    >
      Can't deselect all options

      <template v-slot:action="{ attrs }">
        <v-btn
          aria-label="Close snackbar"
          dark
          text
          v-bind="attrs"
          @click="deleteWordsSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <HomeFab/>
  </div>
</template>

<style lang="scss">
@import "@/styles/_settings.scss";
</style>

<script lang="ts">
import Vue from 'vue';
import allWords from '@/lib/wordlists';
import HomeFab from '@/components/HomeFab.vue';

type TreeType = { name: string; id: string; children: TreeType[] };

export default Vue.extend({
  name: 'Settings',
  components: {
    HomeFab,
  },
  data() {
    return {
      allWords,
      deleteWordsSnackbar: false,
      slider: 0,
      wordItems: [] as TreeType[],
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
                }, {
                  name: 'Activity type indicator',
                  id: 'activity_type',
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
    const wordGraph: TreeType = allWords.all('');
    const transposed = { easy: [], medium: [], hard: [] } as { [k: string]: TreeType[] };
    for (let i = 0; i < wordGraph.children.length; i += 1) {
      for (let j = 0; j < wordGraph.children[i].children.length; j += 1) {
        const name = wordGraph.children[i].children[j].name.toLowerCase();
        if (name in transposed) {
          transposed[name].push({
            name: wordGraph.children[i].name,
            id: wordGraph.children[i].children[j].id,
            children: [],
          });
        }
      }
    }

    this.wordItems = [
      {
        name: 'Easy',
        id: 'easy',
        children: transposed.easy,
      }, {
        name: 'Medium',
        id: 'medium',
        children: transposed.medium,
      }, {
        name: 'Hard',
        id: 'hard',
        children: transposed.hard,
      },
      allWords.findSubtree('bomb').all('/root'),
    ];
    this.wordItems[3].name = 'Songs';
  },
  mounted() {
    this.setTreeviewClickListeners();
  },
  methods: {
    setTreeviewClickListeners() {
      setTimeout(() => {
        const treeviewLabels = document.getElementsByClassName('v-treeview-node__content') as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < treeviewLabels.length; i += 1) {
          treeviewLabels[i].onclick = this.toggleTreeview;
        }
      }, 100);
    },
    toggleTreeview(clickEvent: UIEvent) {
      // Makes sure that the treeview opens and closes when you click on the label
      const path = clickEvent.composedPath() as HTMLElement[];
      for (let i = 0; i < path.length; i += 1) {
        if (path[i].classList.contains('v-treeview-node__content')) {
          let toClick: Element | null = path[i].previousElementSibling;
          if (path[i].innerText === 'Songs') {
            toClick = toClick && toClick.previousElementSibling;
          }
          if (toClick instanceof HTMLElement) {
            toClick.click();
          }
          break;
        }
      }
    },
  },
  computed: {
    selectedWordlists2: {
      get(): string[] {
        return this.$store.state.selectedWordlists2;
      },
      set(value: string[]) {
        const getActivity = (val: string) => val.split('/', 3)[2];
        const countLists = {} as { [activity: string]: true };
        value.forEach((val) => {
          countLists[getActivity(val)] = true;
        });
        const fallbackLists = {} as { [activity: string]: string };
        this.$store.state.selectedWordlists2.forEach((val: string) => {
          fallbackLists[getActivity(val)] = val;
        });
        Object.keys(fallbackLists).forEach((activity) => {
          if (!(activity in countLists)) {
            value.push(fallbackLists[activity]);
            this.deleteWordsSnackbar = true;
          }
        });
        this.$store.commit('updateSelectedWordlists2', value);
      },
    },
    enabledSounds: {
      get(): string[] {
        return this.$store.state.enabledSounds2;
      },
      set(value: string[]) {
        this.$store.commit('updateEnabledSounds', value);
      },
    },
  },
});
</script>
