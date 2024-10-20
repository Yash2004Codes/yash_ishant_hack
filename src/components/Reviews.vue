<template>
  <div class="reviews">
    <h3>Reviews</h3>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <p>{{ review.text }}</p>
        <span>Rating: {{ review.rating }}</span>
      </li>
    </ul>
    <form @submit.prevent="submitReview">
      <textarea v-model="newReviewText" placeholder="Leave a review"></textarea>
      <input type="number" v-model="newReviewRating" min="1" max="5" />
      <button type="submit">Submit Review</button>
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
      reviews: [],
      newReviewText: '',
      newReviewRating: 5,
    };
  },
  methods: {
    submitReview() {
      // Implement review submission logic
      console.log(this.newReviewText, this.newReviewRating);
    },
  },
};
</script>

<style scoped>
/* Reviews styles */
</style>
