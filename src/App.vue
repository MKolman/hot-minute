<template>
  <v-app id="app">
    <v-main>
      <router-view class="view" />
    </v-main>
    <v-snackbar
      id="updateSnack"
      bottom
      right
      :value="updateExists"
      :timeout="-1"
    >
      An update is available
      <template v-slot:action="{ attrs }">
      <v-btn
        text
        color="var(--color-speak-view-btn-bg)"
        v-bind="attrs"
        @click="refreshApp"
      >
        Update
      </v-btn>
      </template>
    </v-snackbar>
    <Tutorial />
  </v-app>
</template>

<style lang="scss">
@import "./assets/css/_colors.scss";
#updateSnack {
  font-family: 'Epilogue', sans-serif;
  .v-snack__content {
    color: var(--color-speak-view-bg)!important;
  }
}
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
import update from '@/mixins/update';
import Tutorial from '@/components/Tutorial.vue';

export default {
  name: 'App',
  components: { Tutorial },
  mixins: [update],
};
</script>
