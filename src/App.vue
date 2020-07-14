<template>
  <v-app id="app">
    <v-app-bar
      raised
    >
      <v-img
        :src="require('./assets/logo.png')"
        contain
        width="200"
        height="50"
        max-width="500"
        max-height="300"
      ></v-img>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view/>
      </v-container>
    </v-main>
    <v-footer
      color="white"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
    <v-snackbar bottom right :value="updateExists" :timeout="-1" color="primary">
      An update is available
      <v-btn text @click="refreshApp">
        Update
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import update from './mixins/update';

export default {
  name: 'App',
  mixins: [update],
};
</script>
