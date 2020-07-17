<template>
  <v-app id="app">
    <v-main>
      <router-view class="view" />
    </v-main>
    <v-snackbar bottom right :value="updateExists" :timeout="-1" color="primary">
      An update is available
      <v-btn text @click="refreshApp">
        Update
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<style lang="scss">
@import "./styles/_colors.scss";
#app {
  font-family: 'Galada', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--color-app-bg);
  color: var(--color-app-txt);

  .v-main {
    margin: auto;
    max-width: 600px;
    width: 100%;
    .v-main__wrap {
      display: flex;
      flex:1;
    }
    .view {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>

<script>
import update from './mixins/update';

export default {
  name: 'App',
  mixins: [update],
};
</script>
