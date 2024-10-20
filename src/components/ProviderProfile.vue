<template>
  <div class="provider-profile">
    <h2>{{ provider.name }}</h2>
    <p>Expertise: {{ provider.expertise }}</p>
    <Reviews :providerId="provider.id" />
    <BookingForm :providerId="provider.id" />
  </div>
</template>

<script>
import Reviews from './Reviews.vue';
import BookingForm from './BookingForm.vue';

export default {
  props: {
    provider: Object,
  },
  components: {
    Reviews,
    BookingForm,
  },
};
</script>

<style scoped>
/* ProviderProfile styles */
</style>
