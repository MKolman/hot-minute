<template>
  <div class="fill-height home">
    <Card class="speak">Speak</Card>
    <Card class="draw">Draw</Card>
    <Card class="show">Show</Card>
  </div>
</template>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'Selector',
  components: {
    Card,
  },
};
</script>
