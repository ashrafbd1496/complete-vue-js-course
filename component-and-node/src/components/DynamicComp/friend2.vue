<template>
    <div>
        <h1>Lois</h1>
    </div>
</template>

<script setup>
import { onUnmounted } from 'vue';
onUnmounted(() => {
    console.log('Lois component is destroyed');
});
</script>