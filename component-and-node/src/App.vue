<template>
  <div>
    <!-- used global header component -->
    <app-header />
    <div class="content">This is for content</div>
    <Footer />
  </div>
</template>

<script setup>
//imported component locally
import Footer from "./components/header_footer/Footer.vue";
</script>

<style>
h1 {
  color: purple;
}
</style>
