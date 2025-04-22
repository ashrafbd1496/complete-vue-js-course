<template>
  <div class="user_profile">
    <h1>User Information</h1>
    <ul>
      <li><span>Name: </span> {{name}}</li>
      <li><span>Age: </span> {{age}}</li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps(['name', 'age']);
</script>
<style scoped>
li > span {
  font-weight: 700;
}
.user_profile {
  padding: 20px;
  margin-top: 60px; /* Adjusted for fixed header */
  text-align: center;
  border: 1px solid #ccc;
}
h1 {
  color: #0b643f;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
} 
</style>
