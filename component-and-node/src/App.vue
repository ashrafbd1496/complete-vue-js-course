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
            <h1>Dynamic Component Loading</h1>
            <br />
            <p>Click the button to load a component dynamically.</p>
            <br /><br />
            <!-- <Friend1 v-if="activeComp === Friend1" />
            <Friend2 v-if="activeComp === Friend2" /> -->
            <button class="btn-1" @click="activeComp = Friend1">Zahir</button>
            <button class="btn-2" @click="activeComp = Friend2">Lois</button>
            <!-- <keep-alive include="Friend1"> -->
            <keep-alive exclude="friend1, friend2">
              <component :is="activeComp" />
            </keep-alive>
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
import { shallowRef } from "vue";
import Footer from "./components/header_footer/Footer.vue";
import Friend1 from "./components/DynamicComp/friend1.vue";
import Friend2 from "./components/DynamicComp/friend2.vue";

const activeComp = shallowRef(Friend1);
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0 auto;
  text-align: center;
}
.btn-1,
.btn-2 {
  background-color: #3aafa9; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
</style>
