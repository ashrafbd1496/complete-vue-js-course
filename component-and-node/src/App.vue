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
          <userProfile :name="data.name" age="20" />
          <button @click="updateName">Upadate Name</button>
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
import userProfile from "./components/User/Profile.vue";
import { reactive } from "vue";

const data = reactive({
  name: "Ashraf",
});
const updateName = () => {
  data.name = "Ali";
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
