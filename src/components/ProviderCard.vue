<template>
  <div class="provider-card">
    <img :src="provider.image" alt="Provider Image" />
    <h3>{{ provider.name }}</h3>
    <p>Expertise: {{ provider.expertise }}</p>
    <p>Rating: {{ provider.rating }}</p>
    <router-link :to="{ name: 'ProviderProfile', params: { id: provider.id } }">View Profile</router-link>
  </div>
</template>

<script>
export default {
  props: {
    provider: Object,
  },
};
</script>

<style scoped>
/* ProviderCard styles */
</style>
