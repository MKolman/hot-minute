<template>
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
</template>

<style lang="scss">
#updateSnack {
  font-family: 'Epilogue', sans-serif;
  .v-snack__content {
    color: var(--color-speak-view-bg)!important;
  }
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      // refresh variables
      refreshing: false,
      registration: null,
      updateExists: false,
    };
  },

  created() {
    // Listen for our custom event from the SW registration
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });

    // Prevent multiple refreshes
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      // Here the actual reload of the page occurs
      window.location.reload();
    });
  },

  methods: {
    // Store the SW registration so we can send it a message
    // We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
    // To alert the user there is an update they need to refresh for
    updateAvailable(event) {
      this.registration = event.detail;
      this.updateExists = true;
    },

    // Called when the user accepts the update
    refreshApp() {
      this.updateExists = false;
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!this.registration || !this.registration.waiting) return;
      // send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    },
  },
};
</script>
