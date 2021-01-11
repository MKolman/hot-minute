<template>
  <div class="text-page">
    <h1>
      About
      <small>
        <router-link to="settings">Settings</router-link>
        <router-link to="rules">Rules</router-link>
      </small>
    </h1>

    <p>
      Hot Minute is a game app inspiried by <a
      href="https://boardgamegeek.com/boardgame/8790/activity">Activity</a>
      and <a href="https://www.amazon.com/dp/178905642X">Fabulous After Dinner
      Games For Not So Responsible Adults</a>. It's a party game played in
      teams of at least two people. Players take turns explaining, miming, or
      drawing objects and phrases, as well humming melodies to well known songs.
    </p>

    <h2> Installation </h2>
    <p>
      Because it is built as a Progressive Web App (PWA), Hot Minute can be
      played directly in the browser or installed on a device of your choice.
      Installing the app offers extra functionality, like full offline support
      and orientation lock.
    </p>

    <h2>Authors</h2>

    <p>
      Hot Minute was made by <a
      href="https://www.youtube.com/channel/UCwBOG5QN-goDFcRtVkWxrYQ">Pavla
      Lušin</a> and <a href="https://www.kolman.si">Maks Kolman</a>. Both code
      and website are <a href="https://github.com/MKolman/hot-minute">hosted
      on github</a> under a GPLv3 license.
    </p>

    <h2>Contact</h2>

    <p>
      If you find an issue with app or any of the words present you can either
      <a href="mailto:maks@kolman.si">email us</a> with the details or <a
      href="https://github.com/MKolman/hot-minute/issues">open an issue on
      github</a>.
    </p>

    <h2>Credits</h2>

    <p>
      In the making of this app the following resourcers have been utilized:
      <ul class="credit-links">
        <li><a href="https://github.com/dangelov/Pictionary-Card-Generator">
          Dangelov's pictionary clues
        </a></li>
        <li><a href="https://www.zapsplat.com/">
          Zapsplat's free library of sound effects
        </a></li>
        <li><a href="https://www.billboard.com/">
          Billboard lists of most popular songs
        </a></li>
        <li><a href="http://www.discjockey.org/reunion-dj/">
          Lists of top 100 reunion songs per decade
        </a></li>
      </ul>
    </p>

    <HomeFab />
  </div>
</template>

<style lang="scss">
@import "@/assets/css/_settings.scss";
.credit-links {
  line-height: 32px;
}
</style>

<script>
import HomeFab from '@/components/HomeFab.vue';

export default {
  name: 'About',
  components: {
    HomeFab,
  },
};
</script>
