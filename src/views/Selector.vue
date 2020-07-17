<template>
  <div>
    <Card @click.native="goPlay('speak');" class="speak">Speak</Card>
    <Card @click.native="goPlay('draw');" class="draw">Draw</Card>
    <Card @click.native="goPlay('show');" class="show">Show</Card>
  </div>
</template>

<style lang="scss">
</style>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'Selector',
  components: {
    Card,
  },
  methods: {
    goPlay(type) {
      this.$router.replace({ name: 'Play', params: { type } });
    },
  },
};
</script>
