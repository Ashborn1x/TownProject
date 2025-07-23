<template>
  <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
    <img :src="image" alt="" class="rounded mb-2 w-full h-48 object-cover" />
    <h2 class="text-lg font-semibold">{{ name }}</h2>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(['name', 'image', 'description'])
</script>
