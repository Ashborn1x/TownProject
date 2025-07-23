<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <RouterLink to="/">
        <img src="@/assets/logo.png" alt="Logo" class="h-10" />
      </RouterLink>
    <ul class="flex gap-4">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/landmarks">Landmarks</RouterLink></li>
      <li><RouterLink to="/gallery">Gallery</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
