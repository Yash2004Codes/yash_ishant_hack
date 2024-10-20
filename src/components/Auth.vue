<template>
  <div class="filters">
    <h3>Filters</h3>
    <select v-model="selectedExpertise">
      <option v-for="expertise in expertises" :key="expertise" :value="expertise">{{ expertise }}</option>
    </select>
    <button @click="applyFilters">Apply Filters</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expertises: ['All', 'Advocates', 'Mediators', 'Arbitrators'],
      selectedExpertise: 'All',
    };
  },
  methods: {
    applyFilters() {
      // Implement filter logic
      console.log(this.selectedExpertise);
    },
  },
};
</script>

<style scoped>
/* Filters styles */
</style>
