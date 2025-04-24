<template>
  <div>
    <div class="container">
      <header class="header">
        <!-- used global header component -->
        <app-header />
      </header>

      <div class="content-wrapper">
        <aside class="sidebar left">Left Sidebar</aside>
        <main class="main">
          <Cars :cars="cars" />
        </main>
        <aside class="sidebar right">Right Sidebar</aside>
      </div>

      <footer class="footer">
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup>
//imported component locally
import Footer from "./components/header_footer/Footer.vue";
import { reactive } from "vue";
import Cars from "./components/Cars/index.vue";

const cars = reactive([
  { model: "F9", brand: "Ferrari" },
  { model: "911", brand: "Porsche" },
  { model: "Tipo", brand: "Fiat" },
]);
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
