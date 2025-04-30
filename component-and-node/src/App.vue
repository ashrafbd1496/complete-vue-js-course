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
          <div>
            <LifeCycle v-if="showIt"/>
            <br>
            <br>
            <hr>
            <br>
            <button @click="showIt = !showIt">Toggle</button>
          </div>
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
import { reactive,ref, provide } from "vue";
import LifeCycle from "@/components/LifeCycle/Index.vue";

const showIt = ref(true)

const cars = reactive([
   { model: "F9", brand: "Ferrari" },
  { model: "911", brand: "Porsche" },
  { model: "Tipo", brand: "Fiat" },
]);

const updateCar = () => {
  cars[0].model = "f98";
  cars[0].brand = "Ford";
};
provide("cars", {
  cars,
  updateCar,
});
const brands = reactive(["Mazda", "Honda", "Mitsubishi"]);
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0 auto;
  text-align: center;
}
</style>
