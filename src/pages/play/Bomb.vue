<template>
  <div id="bomb" class="bomb">
    <h2 v-if="intro"> Hummmmming... </h2>
    <img
      class="splash"
      :class="{big: !startAnimation}"
      v-if="intro"
      src="@/assets/bomb.svg"
      alt="Bomb"
    >
    <div v-if="!intro" class="bomb-wrapper">
      <img src="@/assets/bomb.svg" alt="Bomb" />
      <div class="bomb-text">
        <span class="song-author">{{ artist }}</span>
        <span class="song-title">{{ title }}</span>
      </div>
    </div>
    <h1 v-if="intro"> Bomb! </h1>
    <a
      v-if="paused"
      :href="searchUrl"
      style="z-index: 1; color: var(--color-bomb-view-done-bg);"
      target="_blank"
    > Listen on YouTube </a>
    <Timer v-if="!intro" @stop="paused = true;" :noConfirm="true" />
  </div>
</template>

<style lang="scss" scoped>
#bomb {
  max-height: 100vh;
}
.bomb {
  margin-top: 5%;
  h1, h2 {
    color: black;
    font-weight: normal;
  }
  h2 {
    font-size: 3em;
  }
  h1 {
    font-size: 5em;
  }
}
img {
  width: 100%;
}
img.splash {
  transition-delay: 0.4s;
  transition-duration: 0.8s;
  transition-property: width, margin, max-height, height;
  transition-timing-function: cubic-bezier(1, 1.5, 0.8, 1.01);
  max-height: 50%;
  &.big {
    --scale: 10;
    width: calc(var(--scale) * 100%);
    max-height: calc(var(--scale) * 50%);
    margin-left: calc((var(--scale) - 1) * -50%);
    margin-top: calc(var(--scale) * -18%);
    margin-bottom: calc((var(--scale) - 1) * -50%);
  }
}
.bomb-wrapper {
  position: relative;
  max-height: 50%;
  img {
    max-height: 100%;
  }
  .bomb-text {
    color: var(--color-bomb-view-txt);
    position: absolute;
    top: 28%;
    left: 8%;
    right: 10%;
    bottom: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    span {
      line-height: 1em;
      text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    }
    .song-author {
      font-size: 3em;
    }
    .song-title {
      font-size: 4em;
    }
  }
}
@media screen and (max-width: 400px), screen and (max-height: 600px) {
  .bomb-wrapper .bomb-text {
    .song-author {
      font-size: 2em;
    }
    .song-title {
      font-size: 3em;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import allWords from '@/lib/wordlists';
import Sounds from '@/lib/audio';
import Timer from '@/components/Timer.vue';

export default {
  name: 'Bomb',
  components: {
    Timer,
  },
  data() {
    return {
      intro: true,
      startAnimation: false,
      artist: 'Queen',
      title: 'We will rock you',
      paused: false,
    };
  },
  computed: {
    searchUrl() {
      const search = new URLSearchParams();
      search.append('search_query', `${this.artist} ${this.title}`);
      return `https://www.youtube.com/results?${search}`;
    },
  },
  mounted() {
    Sounds.bomb.play();
    setTimeout(() => { this.startAnimation = true; }, 300);
    setTimeout(() => {
      this.intro = false;
      if (this.$store.state.tutorialStep === 9) {
        this.$store.commit('tutorialNext');
      }
    }, 4000);
    allWords.loadSettings();
    if (this.$store.state.tutorialStep < 0) {
      [this.artist, this.title] = allWords.getRandom('bomb').split(';');
    }
  },
};
</script>
