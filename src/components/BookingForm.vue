<template>
  <div class="booking-form">
    <h3>Book a Session</h3>
    <form @submit.prevent="bookSession">
      <input type="date" v-model="bookingDate" />
      <input type="time" v-model="bookingTime" />
      <button type="submit">Book</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    providerId: String,
  },
  data() {
    return {
      bookingDate: '',
      bookingTime: '',
    };
  },
  methods: {
    bookSession() {
      // Implement booking logic
      console.log(this.bookingDate, this.bookingTime);
    },
  },
};
</script>

<style scoped>
/* BookingForm styles */
</style>
