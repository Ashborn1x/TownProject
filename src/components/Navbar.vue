<template>
  <nav class="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center ">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center space-x-2">
        <img src="@/assets/logo.png" alt="Logo" class="h-10 w-10" />
        <span class="text-xl font-bold text-green-700 font-sans">Sagay City</span>
      </RouterLink>

      <!-- Links -->
      <ul class="flex space-x-6 text-gray-700 font-medium font-sans">
        <li>
          <RouterLink to="/" class="hover:text-blue-600 transition">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="hover:text-blue-600 transition">About</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
