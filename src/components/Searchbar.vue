<template>
  <div class="search-bar">
    <input type="text" placeholder="Search for legal services..." v-model="query" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      // Implement search functionality
      console.log(this.query);
    },
  },
};
</script>

<style scoped>
/* SearchBar styles */
</style>
