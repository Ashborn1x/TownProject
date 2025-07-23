<template>
  <section class="max-w-4xl mx-auto p-6 text-gray-800 font-sans space-y-32 pt-20">

    <!-- 🔹 About Sagay City -->
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      class="max-w-3xl mx-auto text-center px-4">
      <div
        id="about-sagay"
        class="transition-all duration-700 ease-out"
        :class="{
          'opacity-100 translate-y-0': showAbout,
          'opacity-0 -translate-y-10': !showAbout
        }"
      >
        <h1 class="text-3xl font-bold text-blue-800">About Sagay City</h1>
        <p class="text-gray-700 mt-4 leading-relaxed">
          <strong>Sagay</strong>, officially the <strong>City of Sagay</strong>
          (Hiligaynon: <em>Dakbanwa sang Sagay</em>; Cebuano: <em>Dakbayan sa Sagay</em>;
          Filipino: <em>Lungsod ng Sagay</em>), is a component city in the province of
          <strong>Negros Occidental, Philippines</strong>. According to the 2020 census,
          it has a population of <strong>148,894</strong> people.
        </p>
      </div>
    </section>
    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4"
    >
      <div class="md:w-1/2 h-48 bg-gray-200 rounded-lg shadow-md hidden md:block"></div>

      <div class="md:w-1/2 text-left">
        <h2 class="text-2xl font-semibold text-blue-700 mb-2">Cityhood</h2>
        <p class="text-gray-700 leading-relaxed">
          Under the leadership of Mayor Joseph G. Marañon and Vice Mayor Fortunato S. Javelosa,
          Congressman Alfredo G. Marañon authored House Bill No. 6543 during the 10th Congress,
          aiming to convert Sagay into a component city. After public hearings and Senate sponsorship
          by Sen. Raul Roco, the bill became Republic Act 8192. On <strong>June 11, 1996</strong>,
          President Fidel V. Ramos signed it into law, and on <strong>June 10, 1996</strong>,
          residents ratified the cityhood of Sagay.
        </p>
      </div>
    </section>

    <section
      data-aos="fade-left"
      data-aos-duration="1000"
      class="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4"
    >
      <div class="md:w-1/2 text-left">
        <h2 class="text-2xl font-semibold text-blue-600 mb-2">Geography</h2>
        <p class="text-gray-700 leading-relaxed">
          Sagay is located on the northern tip of Negros and resembles an "ice-cream cone" on the map.
          It is bordered by the Asuncion Pass and the Visayan Sea to the north, Calatrava and Talisay
          to the south, Cadiz and Silay to the west, and Escalante and Toboso to the east. It is
          approximately <strong>82 km (51 miles)</strong> from Bacolod.
        </p>
      </div>
      <div class="md:w-1/2 h-48 bg-gray-200 rounded-lg shadow-md hidden md:block"></div>
    </section>

    <section class="max-w-5xl mx-auto px-4">
  <h2
    class="text-2xl font-semibold text-blue-600 mb-6 text-center"
    data-aos="fade-up"
  >
    Barangays of Sagay City
  </h2>

  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    <div
      v-for="(barangay, index) in barangays"
      :key="index"
      class="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <p class="text-gray-800 font-medium">{{ barangay }}</p>
    </div>
  </div>
</section>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showAbout = ref(true)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      showAbout.value = entry.isIntersecting
    },
    {
      threshold: 0.4,
    }
  )

  const el = document.querySelector('#about-sagay')
  if (el) observer.observe(el)
})
const barangays = [
  "Andres Bonifacio", "Bato", "Baviera", "Bulanon", "Campo Himoga-an",
  "Campo Santiago", "Colonia Divina", "Rafaela Barrera", "Fabrica", "General Luna",
  "Himoga-an Baybay", "Lopez Jaena", "Malubon", "Maquiling", "Molocaboc",
  "Old Sagay", "Paraiso", "Plaridel", "Poblacion I (Barangay 1)", "Poblacion II (Barangay 2)",
  "Puey", "Rizal", "Taba-ao", "Tadlong", "Vito"
]

</script>
