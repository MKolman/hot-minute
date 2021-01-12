<template>
    <v-btn aria-label="Go home" id="home" fab large to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>
</template>

<style lang="scss">
#home {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1rem;
  background-color: var(--color-app-txt);
  color: var(--color-app-bg);
}
</style>
