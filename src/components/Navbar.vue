<template>
  <nav>
    <div class="logo">Legal eMarketplace</div>
    <SearchBar />
    <LanguageToggle />
    <Auth />
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue';
import LanguageToggle from './LanguageToggle.vue';
import Auth from './Auth.vue';

export default {
  components: {
    SearchBar,
    LanguageToggle,
    Auth,
  },
};
</script>

<style scoped>
/* Navbar styles */
</style>
