<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

