<template>
  <div class="user-profile">
    <h3>{{ user.name }}</h3>
    <p>Email: {{ user.email }}</p>
    <p>Role: {{ user.role }}</p>
    <button @click="editProfile">Edit Profile</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}, // Load user data
    };
  },
  methods: {
    editProfile() {
      // Implement profile editing logic
      console.log('Edit profile');
    },
  },
};
</script>

<style scoped>
/* UserProfile styles */
</style>
