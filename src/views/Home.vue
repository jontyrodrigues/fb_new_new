<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

const topStories = ref([
  {
    id: 1,
    title: 'Arsenal Takes Control of Title Race',
    excerpt: 'A commanding performance puts the Gunners in pole position...',
    image: 'https://placehold.co/600x400',
    date: '2024-03-15'
  },
  {
    id: 2,
    title: 'Champions League Draw Revealed',
    excerpt: 'Exciting quarter-final matchups announced...',
    image: 'https://placehold.co/600x400',
    date: '2024-03-14'
  },
  {
    id: 3,
    title: 'Manchester United Revival',
    excerpt: 'Red Devils show promising signs under new management...',
    image: 'https://placehold.co/600x400',
    date: '2024-03-13'
  },
  {
    id: 4,
    title: 'Premier League Transfer News',
    excerpt: 'Latest updates on summer transfer window targets...',
    image: 'https://placehold.co/600x400',
    date: '2024-03-12'
  }
])

const quickStats = ref([
  {
    title: 'Top Scorer',
    player: 'Erling Haaland',
    value: '18 goals'
  },
  {
    title: 'Most Assists',
    player: 'Kevin De Bruyne',
    value: '12 assists'
  },
  {
    title: 'Clean Sheets',
    player: 'Alisson',
    value: '10 sheets'
  }
])

const topTeams = ref([
  { position: 1, team: 'Arsenal', points: 58 },
  { position: 2, team: 'Man City', points: 56 },
  { position: 3, team: 'Liverpool', points: 54 }
])
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-8">
    <!-- Featured Section with Carousel -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-white mb-6">Featured Stories</h2>
      <Swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :breakpoints="{
          '640': { slidesPerView: 2 },
          '1024': { slidesPerView: 3 }
        }"
        class="story-swiper"
      >
        <SwiperSlide v-for="story in topStories" :key="story.id">
          <article class="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition cursor-pointer h-full">
            <img :src="story.image" :alt="story.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="text-gray-400 text-sm mb-2">{{ story.date }}</div>
              <h3 class="text-xl font-bold text-white mb-2">{{ story.title }}</h3>
              <p class="text-gray-300">{{ story.excerpt }}</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- Quick Stats Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-white mb-6">Season Statistics</h2>
      <div class="grid gap-4 md:grid-cols-3">
        <div v-for="stat in quickStats" :key="stat.title" 
          class="bg-gray-900 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-white mb-2">{{ stat.title }}</h3>
          <p class="text-2xl font-bold text-red-500">{{ stat.value }}</p>
          <p class="text-gray-400">{{ stat.player }}</p>
        </div>
      </div>
    </section>

    <!-- Quick Table View -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-white">Top Teams</h2>
        <router-link to="/tables" 
          class="text-red-500 hover:text-red-400 font-semibold">
          View Full Table →
        </router-link>
      </div>
      <div class="bg-gray-900 rounded-lg p-6">
        <div class="space-y-4">
          <div v-for="team in topTeams" :key="team.position" 
            class="flex justify-between items-center p-2 hover:bg-gray-800 rounded transition">
            <div class="flex items-center gap-4">
              <span class="text-gray-400 w-8">{{ team.position }}</span>
              <span class="text-white font-medium">{{ team.team }}</span>
            </div>
            <span class="text-white font-bold">{{ team.points }} pts</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.story-swiper {
  padding-bottom: 3rem !important;
}
.story-swiper .swiper-pagination {
  bottom: 0 !important;
}
.story-swiper .swiper-pagination-bullet {
  background: #fff !important;
}
.story-swiper .swiper-pagination-bullet-active {
  background: #ef4444 !important;
}
</style>