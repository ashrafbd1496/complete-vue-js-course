<template>
    <div>
        <h1>Zahir</h1>
    </div>
</template>
<style>
</style>
<script setup>
import { onUnmounted , onActivated, onDeactivated} from 'vue';
onUnmounted(() => {
    console.log('Zahir component is destroyed');
});
onActivated(() => {
    console.log('Zahir component is onActivated');
});
onDeactivated(() => {
    console.log('Zahir component is onDeactivated');
});
</script>