<template>
  <div class="leaderboard">
    <h3>Leaderboard</h3>
    <ul>
      <li v-for="provider in providers" :key="provider.id">
        <span>{{ provider.name }}</span> - {{ provider.score }} points
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      providers: [], // Load leaderboard data
    };
  },
};
</script>

<style scoped>
/* Leaderboard styles */
</style>
