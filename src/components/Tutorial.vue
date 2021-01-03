<template>
  <div class="tutorial">
    <!-- INTRO -->
    <v-overlay :value="true" v-if="tutorialStep === 0">
      <p>
        Hi there, <br>
        welcome to Hot Minute. This tutorial will guide you through the app and
        teach you how to play.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Start
        </v-btn>
      </div>
    </v-overlay>

    <!-- Press play -->
    <v-overlay class="play-margin" :value="true" v-if="tutorialStep === 1">
      <div class="play-arrow" v-html="svgArrow"></div>
      <p>
        Start your turn by pressing the Play button. The app will then choose
        a random activity for you.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Pick activity
        </v-btn>
      </div>
    </v-overlay>

    <!-- Speak selected -->
    <v-overlay class="play-margin" :value="true" v-if="tutorialStep === 3">
      <p>
        The activity chosen for you is "speak". You will be given a word or a
        phrase that you will have to explain to your teammates.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Show word
        </v-btn>
      </div>
    </v-overlay>

    <!-- Word card -->
    <v-overlay class="bottom" :value="true" v-if="tutorialStep === 4">
      <p>
        The card in the center of the screen tells you which phrase your team
        has to guess. You can hide the word using the eye button.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Next
        </v-btn>
      </div>
    </v-overlay>

    <!-- I'm ready -->
    <v-overlay :value="true" v-if="tutorialStep === 5">
      <p>
        When you and your team are prepared for you to speak press the "I'm
        ready" button below. This will start a timer and give you one minute
        to demonstrate your verbal skills.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Next
        </v-btn>
      </div>
    </v-overlay>

    <!-- Speak -->
    <v-overlay class="bottom" :value="true" v-if="tutorialStep === 6">
      <p>
        The activity is indicated at the top of the screen. Here it says speak,
        which means that you have to communicate with your team verbally.
      </p>
      <p>
        You are not allowed to gesture or point with your hands, use any props,
        or use words with the same root as any of the words on your card i.e.
        you cannot use "ear" or "ring" as clues for "earring".
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Explain Draw
        </v-btn>
      </div>
    </v-overlay>

    <!-- Draw -->
    <v-overlay class="bottom" :value="true" v-if="tutorialStep === 7">
      <p>
        The second possible activity is "Draw" When drawing you must use a pen
        or pencil to draw a picture as your team tries to guess the original
        clue.
      </p>
      <p>
        While doing so you are not allowed to make any sounds or gestures other
        than confirming or deny your team's guesses. You are also not allowed
        to draw letters or numbers.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Explain Show
        </v-btn>
      </div>
    </v-overlay>

    <!-- Show -->
    <v-overlay class="bottom" :value="true" v-if="tutorialStep === 8">
      <p>
        The third available activity is "Show". It will test you ability in
        charades. You will have to mime to the best of your abilities to get
        your team to guess the given clue.
      </p>
      <p>
        You are not allowed to make sounds, not even nonsense gibberish, while
        miming. Additionally use of any props, tools, object or other people in
        the room is prohibited.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Next
        </v-btn>
      </div>
    </v-overlay>

    <!-- Bomb -->
    <v-overlay class="bottom" :value="true" v-if="tutorialStep === 10">
      <p>
        No time to think! The timer starts as soon as you see the song.
        You have to humm the given song - with your mouth closed.
        Uniquely for this activity you are not only performing for your
        team, but for everyone.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Scoring
        </v-btn>
      </div>
    </v-overlay>

    <!-- Scoring -->
    <v-overlay class="top" :value="true" v-if="tutorialStep === 11">
      <p>
        Get 50 points to win. A team gets 5 points for correctly
        guessing Speak, Draw, or Show clues. Humming
        bomb awards both guesser and performer with 3 points.
      </p>
      <p>
        Keep track of scores on the home screen, below. Use one
        device for all teams or let each team keep their own score.
      </p>
      <div class="tutorial-navigation">
        <v-btn
          class="skip-tutorial"
          text
          @click="stopTutorial();"
        >
          Skip tutorial
        </v-btn>
        <v-btn
          color="primary"
          @click="$store.commit('tutorialNext');"
        >
          Next
        </v-btn>
      </div>
    </v-overlay>

    <!-- Settings -->
    <v-overlay :value="true" v-if="tutorialStep === 12">
      <p>
        You can go to settings to:
        <ul>
          <li>change the humming bomb frequency,</li>
          <li>mute sounds,</li>
          <li>restart the tutorial,</li>
          <li>review the rules,</li>
          <li>change animation length,</li>
          <li>send feedback about the app,</li>
          <li>...</li>
        </ul>
      </p>
      <div class="tutorial-navigation">
        <span></span>
        <v-btn
          color="primary"
          @click="stopTutorial();"
        >
          Done
        </v-btn>
      </div>
    </v-overlay>
  </div>
</template>
<style lang="scss">
  .tutorial .v-overlay {
    font-family: 'Epilogue', sans-serif;
    &.bottom {
      align-items: flex-end;
      padding-bottom: 5%;
    }
    &.top {
      align-items: flex-start;
      padding-top: 5%;
    }
    &.play-margin {
      .v-overlay__content {
        align-items: flex-start;
        margin-top: 40%;
      }
    }
    .v-overlay__content {
      max-width: 600px;
      text-align: left;
      margin-left: 5%;
      margin-right: 5%;
      font-size: clamp(10px, 2.5vh, 25px);
      .tutorial-navigation {
        display: flex;
        justify-content: space-between;
        .skip-tutorial {
          padding-left: 0!important;
        }
      }
      .play-arrow{
        text-align: right;
        svg {
          max-width: 40%;
          height: 10%;
          path {
            fill: var(--color-app-txt)!important;
            stroke: var(--color-app-txt)!important;
          }
        }
      }
    }
    .v-overlay__scrim {
      opacity: 0.9!important;
    }
  }
  .tutorial-1 {
    .play {
      z-index: 6;
    }
  }
  .tutorial-3 {
    .speak {
      z-index: 6;
    }
  }
  .tutorial-4 {
    .card-wrapper {
      z-index: 6;
    }
  }
  .tutorial-5 {
    .timer .ready {
      z-index: 6;
    }
  }
  .tutorial-6, .tutorial-7, .tutorial-8 {
    .header {
      z-index: 6;
    }
  }
  .tutorial-10 {
    .bomb-wrapper {
      z-index: 6;
    }
  }
  .tutorial-11 {
    #score h1, #score .input-shape {
      z-index: 6;
    }
  }
  .tutorial-12 {
    .top a {
      z-index: 6;
    }
  }
</style>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
/* eslint-disable import/no-webpack-loader-syntax */
import svgArrow from '-!raw-loader!@/assets/arrow.svg';

export default Vue.extend({
  name: 'Tutorial',
  data() {
    return {
      overlay: true,
      svgArrow,
    };
  },
  computed: mapState(['tutorialStep']),
  watch: {
    tutorialStep(newValue, oldValue) {
      const oldClass = this.getTutorialBodyClass(oldValue);
      if (oldClass.length) document.body.classList.remove(oldClass);
      const newClass = this.getTutorialBodyClass(newValue);
      if (newClass.length) document.body.classList.add(newClass);
      this.updateRoute();
    },
  },
  mounted() {
    this.updateRoute();
    const newClass = this.getTutorialBodyClass(this.tutorialStep);
    if (newClass.length) document.body.classList.add(newClass);
  },
  methods: {
    getTutorialBodyClass(tutorialStep) {
      if (tutorialStep < 0) return '';
      return `tutorial-${tutorialStep}`;
    },
    stopTutorial() {
      this.$store.commit('tutorialStop');
      this.$router.push('/').catch((err) => console.log('Failed to redirect to /:', err));
    },
    updateRoute() {
      const routes = {
        0: '/',
        1: '/',
        2: '/selector',
        3: '/selector',
        4: '/play/speak',
        5: '/play/speak',
        6: '/play/speak',
        7: '/play/draw',
        8: '/play/show',
        9: '/play/bomb',
        10: '/play/bomb',
        11: '/',
        12: '/',
      };
      if (this.tutorialStep >= 0 && routes[this.tutorialStep] !== this.$route.path) {
        console.log('Redirecting to', routes[this.tutorialStep], 'from', this.$route.path);
        this.$router.push(routes[this.tutorialStep]).catch(() => console.log('Redirect to', routes[this.tutorialStep], 'canceled'));
      }
    },
  },
});
</script>
