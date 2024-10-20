<template>
  <div class="faq">
    <h3>Frequently Asked Questions</h3>
    <ul>
      <li v-for="faq in faqs" :key="faq.id">
        <h4>{{ faq.question }}</h4>
        <p>{{ faq.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [], // Load FAQs data
    };
  },
};
</script>

<style scoped>
/* FAQ styles */
</style>
