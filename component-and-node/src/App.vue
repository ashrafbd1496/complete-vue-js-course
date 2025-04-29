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
            <Cars />
            <button @click="updateCar">Udate Car</button>
            <CarBrands>
              <ol>
                <li v-for="(brand, index) in brands" :key="index">{{brand}}</li>
              </ol>
            </CarBrands>
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
import { reactive, provide } from "vue";
import Cars from "./components/Cars/index.vue";
import CarBrands from "./components/Cars/brands.vue";

const cars = reactive([
  { model: "F9", brand: "Ferrari" },
  { model: "911", brand: "Porsche" },
  { model: "Tipo", brand: "Fiat" },
]);

const updateCar = () => {
  cars[0].model = "f98";
  cars[0].brand = "Ford";
}
provide("cars", {
  cars,
  updateCar
})
const brands = reactive([
  'Mazda', 'Honda', 'Mitsubishi'
]);
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
