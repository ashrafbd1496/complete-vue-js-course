<template>
  <div>
    <ol class="cars">
      <li v-for="car in cars" :key="car.model">
        <span>{{ car.brand }}: </span> {{ car.model }}
      </li>
    </ol>
  </div>
</template>

<script setup>
import { inject } from "vue";
const {cars, updateCar} = inject(["cars"]);
</script>

<style scoped> 
.cars {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}
</style>
