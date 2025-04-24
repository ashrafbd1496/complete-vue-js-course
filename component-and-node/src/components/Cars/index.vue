<template>
  <div class="cars">
    <h1>Welcome to Cars</h1>
    <hr />
    <CarList :cars="cars" />
  </div>
</template>

<script setup>
import CarList from "./list.vue";
const props = defineProps(["cars"]);
</script>

<style scoped></style>
