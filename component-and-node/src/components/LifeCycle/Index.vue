<template>
  <div>
    <h1>LifeCycle</h1>
    <br />
    {{ text }}
  </div>
  <button @click="text = 'changed ...'">Trigger update</button>
</template>
<script setup>
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";

const text = ref("The text before update!");
onBeforeMount(() => {
  console.log("1. onBeforeMount");
});
onMounted(() => {
  console.log("2. onMounted");
});
onBeforeUpdate(() => {
  console.log("3. onBeforeUpdate");
});
onUpdated(() => {
  console.log("4. onUpdated");
});

onBeforeUnmount(() => {
  console.log("5. onBeforeUnmount");
});
onUnmounted(() => {
  console.log("6. onUnmounted");
});
</script>
