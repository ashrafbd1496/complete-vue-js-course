<template>
    <div>
      <button class="nice-button" @click="$emit('click')">{{ label }}</button>
    </div>
</template>
<script setup>
const props = defineProps(['label']);
</script>
<style>
.nice-button {
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 10px 20px;
    margin-top: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nice-button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }
  
  .nice-button:active {
    transform: translateY(0);
    background-color: #3e8e41;
  }
  
</style>