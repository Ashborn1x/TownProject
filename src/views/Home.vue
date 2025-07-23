<template>
  <section
    class="min-h-screen bg-cover bg-center text-white font-sans relative pt-20"
    style="background-image: url('/images/carbin.jpg')"
  >
    <div class="absolute inset-0 bg-black/60 z-0"></div>
    <div class="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-4 fade-in">
      <h1 class="text-4xl md:text-5xl font-bold drop-shadow-md">Welcome to Sagay City</h1>
      <p class="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-sm">
        Explore the beauty, history, and spirit of our hometown in Northern Negros Occidental.
      </p>
    </div>

    <div class="relative z-10 bg-white text-gray-800 px-6 py-16 space-y-32">
<section class="max-w-5xl mx-auto text-center fade-in">
    <h2 class="text-3xl font-bold text-blue-700 mb-8">Elected Officials</h2>

    <Splide
      :options="{
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }"
      class="px-4"
    >
      <SplideSlide v-for="official in officials" :key="official.name">
        <div class="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            :src="official.photo"
            alt="Official"
            class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800">{{ official.name }}</h3>
          <p class="text-gray-600">{{ official.position }}</p>
        </div>
      </SplideSlide>
    </Splide>
  </section>

      <!-- 🔹 Other City Officials -->
      <section class="max-w-5xl mx-auto text-center fade-in">
        <h2 class="text-3xl font-bold text-green-700 mb-6">City Officials</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">Engr. Pedro Santos</h3>
            <p class="text-gray-600">City Engineer</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">Dr. Carla Mendoza</h3>
            <p class="text-gray-600">City Health Officer</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">Atty. Luis Navarro</h3>
            <p class="text-gray-600">City Legal Officer</p>
          </div>
        </div>
      </section>

      <!-- 🔹 Announcements & Articles -->
      <section class="max-w-5xl mx-auto text-center fade-in">
        <h2 class="text-3xl font-bold text-purple-700 mb-6">Announcements & Articles</h2>
        <div class="space-y-6 text-left">
          <div class="bg-white border-l-4 border-blue-600 p-4 shadow">
            <h4 class="text-xl font-semibold text-blue-700">Upcoming Festival: Sinigayan 2025</h4>
            <p class="text-gray-600 mt-2">Join us in celebrating Sagay’s culture and creativity this coming March!</p>
          </div>
          <div class="bg-white border-l-4 border-green-600 p-4 shadow">
            <h4 class="text-xl font-semibold text-green-700">Health Advisory</h4>
            <p class="text-gray-600 mt-2">COVID-19 vaccinations are ongoing at the City Health Office from Mon-Fri.</p>
          </div>
          <div class="bg-white border-l-4 border-yellow-500 p-4 shadow">
            <h4 class="text-xl font-semibold text-yellow-600">Public Service Update</h4>
            <p class="text-gray-600 mt-2">New garbage collection schedule effective August 1st.</p>
          </div>
        </div>
      </section>
    </div>
  </section>
<!-- 🔹 Plans, Programs & Projects -->
  <section class="max-w-6xl mx-auto text-center fade-in">
    <h2 class="text-3xl font-bold text-indigo-700 mb-6">Plans, Programs & Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4 bg-white text-left">
          <h3 class="text-lg font-semibold text-gray-800">{{ project.title }}</h3>
          <p class="text-sm text-gray-600 mt-2">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>

<!-- 🔹 Hotlines & Emails -->
<section class="max-w-5xl mx-auto text-center fade-in">
  <h2 class="text-3xl font-bold text-red-700 mb-6">Hotlines & Emails</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
    <!-- City Hall -->
    <div class="bg-white p-4 shadow border-l-4 border-red-600 rounded">
      <h4 class="text-xl font-semibold text-red-700">City Hall</h4>
      <p class="text-gray-700">📞 (034) 488-0641</p>
      <p class="text-gray-700">✉️ cityhall@sagay.gov.ph</p>
    </div>

    <!-- Health Office -->
    <div class="bg-white p-4 shadow border-l-4 border-green-600 rounded">
      <h4 class="text-xl font-semibold text-green-700">City Health Office</h4>
      <p class="text-gray-700">📞 (034) 488-0120</p>
      <p class="text-gray-700">✉️ health@sagay.gov.ph</p>
    </div>

    <!-- PNP -->
    <div class="bg-white p-4 shadow border-l-4 border-blue-600 rounded">
      <h4 class="text-xl font-semibold text-blue-700">Sagay PNP</h4>
      <p class="text-gray-700">📞 0998-987-6543</p>
      <p class="text-gray-700">✉️ pnp@sagay.gov.ph</p>
    </div>

    <!-- Bureau of Fire Protection -->
    <div class="bg-white p-4 shadow border-l-4 border-yellow-500 rounded">
      <h4 class="text-xl font-semibold text-yellow-700">Bureau of Fire Protection</h4>
      <p class="text-gray-700">📞 0923-456-7890</p>
      <p class="text-gray-700">✉️ fire@sagay.gov.ph</p>
    </div>
  </div>
</section>

</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'


const officials = [
  {
    name: 'Juan Dela Cruz',
    position: 'Mayor',
    photo: '/images/mayor.jpg',
  },
  {
    name: 'Maria Reyes',
    position: 'Vice Mayor',
    photo: '/images/vice.jpg',
  },
  {
    name: 'Councilor 1',
    position: 'Councilor',
    photo: '/images/councilor1.jpg',
  },
  {
    name: 'Councilor 2',
    position: 'Councilor',
    photo: '/images/councilor2.jpg',
  },
  {
    name: 'Councilor 3',
    position: 'Councilor',
    photo: '/images/councilor3.jpg',
  },
]
const projects = [
  {
    title: 'Flood Control Program',
    description: 'Reinforcement of riverbanks and drainage expansion.',
    image: '/images/project1.jpg',
  },
  {
    title: 'Tree Planting Initiative',
    description: 'Greening schools and barangay zones.',
    image: '/images/project2.jpg',
  },
  {
    title: 'Barangay Road Cementing',
    description: 'Improved access in rural areas.',
    image: '/images/project3.jpg',
  },
  {
    title: 'Public Market Renovation',
    description: 'A modern, cleaner Sagay Market.',
    image: '/images/project4.jpg',
  },
  {
    title: 'Scholarship Expansion',
    description: 'More students supported in 2025.',
    image: '/images/project5.jpg',
  },
  {
    title: 'Digital Barangay System',
    description: 'Records and services go online.',
    image: '/images/project6.jpg',
  },
  {
    title: 'Water Supply Project',
    description: 'Improved access to clean water.',
    image: '/images/project7.jpg',
  },
  {
    title: 'Women Empowerment Trainings',
    description: 'Programs for skills and business.',
    image: '/images/project8.jpg',
  },
  {
    title: 'Tourism Promotion Drive',
    description: 'Highlighting Sagay’s landmarks.',
    image: '/images/project9.jpg',
  },
]

</script>


<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.1s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
