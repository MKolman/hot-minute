<template>
  <div class="text-page">
    <h1>
      Rules
      <small>
        <router-link to="settings">Settings</router-link>
        <router-link to="about">About</router-link>
      </small>
    </h1>
    <p>
      Hot Minute requires players to be split into teams of at least two
      players each. If you have a hard time deciding you can use an app like
      <a href="https://playerone.kevincox.ca/">PlayerOne</a> to do that for
      you. In principal everyone could be playing with only a single device
      displaying Hot Minute, but it's recommended that you have at least one
      per team.
    </p>
    <p>
      Teams take turns playing a single round of the game. One person from the
      team will select play to make the app select an activity and phrase for
      them. They then have to communicate that phrase to the rest of their
      team in time under the restrictions that the activity demands.
    </p>
    <p>
      The team that is the first to reach 50 points wins the game.
    </p>

    <h2>Speak</h2>
    <p>
      When speaking you have to verbally communicate the phrase thrust upon
      you. You are not allowed to use any hand gestures (e.g. pointing, miming
      a box) or any other props to help explain your point. Use of any words
      that appear in your phrase is also prohibitet, as are any words with a
      common root (e.g. type, typography, and typewriter).
    </p>

    <h2>Draw</h2>
    <p>
      You are allowed a sheet of paper and one single colored pen or pencil to
      draw the object of your game. While doing so, you may not write out any
      numbers of letters on your drawings. Speaking, making other sounds or
      miming is not allowed during this activity.
    </p>

    <h2>Show</h2>
    <p>
      This activity prohibits you from making any sounds. You have to pantomime
      what is written on your card to the best of your abilities without using
      any other person or object.
    </p>

    <h2>Humming bomb</h2>
    <p>
      Occasionally you will be attacked by a Humming Bomb. This round you will
      not have any time to prepare -- the timer will start right away. In
      addition you will be performing for all players even those in opposing
      teams. Your goal is to hum, with your mouth closed, the melody and
      rhythm of the song given to you.
    </p>

    <h1> Scoring </h1>
    <p>
      Every team should have a designated score keeper that keeps track of how
      many points your team got. Every round that your team successfully
      communicates and guesses the correct term in time you are awarded <b>5
      points</b>.
    </p>

    <h2>Humming bomb</h2>
    <p>
      During a Humming Bomb round any team is free to guess the song. If any
      team guesses the song correctly they get awarder <b>3 points</b>. In
      addition the team whose member is doing the humming gets also awarded
      <b>3 points</b> as long as anyone guesses the songs. This means that the
      team performing can get a total of <b>6 points</b> if they are the ones
      to guess the song correctly.
    </p>

    <h2>3 Player variant</h2>
    <p>
      If there are only three players they each form their own team. Every
      round is performed for every player regardless of the chosen activity.
      When a term is successfully guessed the player guessing and player
      performing both get <b>3 points</b> each.
    </p>

    <HomeFab />
  </div>
</template>

<style lang="scss">
@import "@/styles/_settings.scss";
</style>

<script>
import HomeFab from '@/components/HomeFab.vue';

export default {
  name: 'Rules',
  components: {
    HomeFab,
  },
};
</script>
