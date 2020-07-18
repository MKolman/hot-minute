<template>
  <div class="text-page">
    <h1> Settings </h1>
    <ul>
      <li><router-link to="rules">Rules</router-link></li>
      <li><router-link to="about">About</router-link></li>
    </ul>
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
};
</script>
