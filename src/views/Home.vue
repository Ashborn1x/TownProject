<template>
<div class="bg-neutral-100 min-h-screen">
  <section
    ref="heroSection"
    :class="[
      'transition-opacity duration-700 ease-in-out',
      isVisible ? 'opacity-100' : 'opacity-0'
    ]"
    class="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col justify-center items-center px-4"
    style="background-image: url('/images/carbin-hd.webp')"
  >
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold drop-shadow-lg">Welcome to Sagay City</h1>
      <p class="text-lg md:text-xl mt-4 max-w-2xl mx-auto drop-shadow">
        Explore the beauty, history, and spirit of our hometown in Northern Negros Occidental.
      </p>
    </div>
  </section>
  <div class="relative z-10 text-gray-800 px-6 py-16 space-y-32">
    <!-- 🔹 Elected Officials -->
    <section class="max-w-5xl mx-auto text-center fade-in px-4 py-16 rounded-lg shadow-sm">
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
          <div class="p-6 rounded-xl shadow-md text-center">
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

    <!-- 🔹 City Officials -->
    <section class="max-w-5xl mx-auto text-center fade-in px-4 py-16">
      <h2 class="text-3xl font-bold text-green-700 mb-6">City Officials</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold">Engr. Pedro Santos</h3>
          <p class="text-gray-600">City Engineer</p>
        </div>
        <div class="p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold">Dr. Carla Mendoza</h3>
          <p class="text-gray-600">City Health Officer</p>
        </div>
        <div class="p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold">Atty. Luis Navarro</h3>
          <p class="text-gray-600">City Legal Officer</p>
        </div>
      </div>
    </section>

    <!-- 🔹 Announcements -->
    <section class="max-w-5xl mx-auto text-center fade-in px-4 py-16">
      <h2 class="text-3xl font-bold text-purple-700 mb-6">Announcements & Articles</h2>
      <div class="space-y-6 text-left">
        <div class="border-l-4 border-blue-600 p-4 shadow">
          <h4 class="text-xl font-semibold text-blue-700">Upcoming Festival: Sinigayan 2025</h4>
          <p class="text-gray-600 mt-2">Join us in celebrating Sagay’s culture and creativity this coming March!</p>
        </div>
        <div class="border-l-4 border-green-600 p-4 shadow">
          <h4 class="text-xl font-semibold text-green-700">Health Advisory</h4>
          <p class="text-gray-600 mt-2">COVID-19 vaccinations are ongoing at the City Health Office from Mon-Fri.</p>
        </div>
        <div class="border-l-4 border-yellow-500 p-4 shadow">
          <h4 class="text-xl font-semibold text-yellow-600">Public Service Update</h4>
          <p class="text-gray-600 mt-2">New garbage collection schedule effective August 1st.</p>
        </div>
      </div>
    </section>
  </div>

  <!-- 🔹 Plans, Programs & Projects -->
  <section class="max-w-6xl mx-auto text-center fade-in px-4 py-16">
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
        <div class="p-4 text-left">
          <h3 class="text-lg font-semibold text-gray-800">{{ project.title }}</h3>
          <p class="text-sm text-gray-600 mt-2">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 🔹 Contact Section -->
  <section class="max-w-6xl mx-auto px-4 py-20 fade-in">
    <h2 class="text-3xl font-bold text-center text-red-700 mb-12">Contact Us</h2>

    <div class="flex flex-col md:flex-row gap-10">
      <div class="flex-1 shadow-md rounded-xl p-6 space-y-6">
        <div class="space-y-4">
          <h3 class="text-2xl font-semibold text-gray-800">City Hall</h3>
          <div class="flex items-center space-x-3">
            <i class="fas fa-phone text-red-600"></i>
            <a href="tel:(034)488-0641" class="text-gray-700 hover:text-red-700">(034) 488-0641</a>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fas fa-envelope text-red-600"></i>
            <a href="mailto:cityhall@sagay.gov.ph" class="text-gray-700 hover:text-red-700">cityhall@sagay.gov.ph</a>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fas fa-map-marker-alt text-red-600"></i>
            <p class="text-gray-700">Rizal Street, Sagay City Hall</p>
          </div>
        </div>

        <div class="border-t pt-4 space-y-4">
          <h3 class="text-xl font-semibold text-gray-800">Socials</h3>
          <div class="flex space-x-4">
            <a href="https://facebook.com/sagaycity" target="_blank" class="text-blue-600 hover:text-blue-800">
              <i class="fab fa-facebook fa-lg"></i>
            </a>
            <a href="mailto:info@sagay.gov.ph" class="text-red-600 hover:text-red-800">
              <i class="fas fa-envelope fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42502.86042733965!2d123.43411560085033!3d10.892401878895818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1753276293856!5m2!1sen!2sph"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
const heroSection = ref(null)
const isVisible = ref(true)
const officials = ref([])
const projects = ref([])


const handleScroll = () => {
  if (!heroSection.value) return
  const sectionTop = heroSection.value.getBoundingClientRect().top
  isVisible.value = sectionTop >= -800 // fades out when it scrolls too far up
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const fetchData = async () => {
  try {
    const officialRes = await fetch('/data/officials.json')
    officials.value = await officialRes.json()

    const projectRes = await fetch('/data/projects.json')
    projects.value = await projectRes.json()
  } catch (err) {
    console.error('Failed to fetch data:', err)
  }
}
onMounted(() => {
  fetchData()
})
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
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s ease-out both;
}
</style>
