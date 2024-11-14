<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const matches = ref([
  {
    id: 1,
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    homeScore: 2,
    awayScore: 1,
    status: 'Live',
    minute: '75'
  },
  {
    id: 2,
    homeTeam: 'Liverpool',
    awayTeam: 'Man City',
    homeScore: 0,
    awayScore: 0,
    status: 'Upcoming',
    time: '20:45'
  },
  {
    id: 3,
    homeTeam: 'Man United',
    awayTeam: 'Tottenham',
    homeScore: 3,
    awayScore: 2,
    status: 'Live',
    minute: '89'
  },
  {
    id: 4,
    homeTeam: 'Newcastle',
    awayTeam: 'Aston Villa',
    homeScore: 1,
    awayScore: 1,
    status: 'HT',
    minute: '45'
  },
  {
    id: 5,
    homeTeam: 'Brighton',
    awayTeam: 'West Ham',
    homeScore: 0,
    awayScore: 0,
    status: 'Upcoming',
    time: '21:00'
  }
])

const navigateToMatch = (matchId: number) => {
  router.push(`/match/${matchId}`)
}
</script>

<template>
  <div class="w-full bg-gray-900 py-8">
    <div class="max-w-7xl mx-auto px-4">
      <Swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1.2"
        :space-between="20"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :breakpoints="{
          '640': { slidesPerView: 2.2 },
          '1024': { slidesPerView: 3.2 },
          '1280': { slidesPerView: 4.2 }
        }"
        class="match-swiper"
      >
        <SwiperSlide v-for="match in matches" :key="match.id">
          <div
            @click="navigateToMatch(match.id)"
            class="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition transform hover:-translate-y-1 duration-200"
          >
            <div class="flex justify-between items-center mb-4">
              <span class="text-red-500 font-semibold">{{ match.status }}</span>
              <span v-if="match.minute" class="text-gray-400">{{ match.minute }}′</span>
              <span v-else class="text-gray-400">{{ match.time }}</span>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <div class="text-white text-lg">{{ match.homeTeam }}</div>
                <div class="text-2xl font-bold text-white">{{ match.homeScore }}</div>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-white text-lg">{{ match.awayTeam }}</div>
                <div class="text-2xl font-bold text-white">{{ match.awayScore }}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.match-swiper {
  padding-bottom: 3rem !important;
}
:deep(.swiper-pagination) {
  bottom: 0 !important;
}
:deep(.swiper-pagination-bullet) {
  background: #fff !important;
}
:deep(.swiper-pagination-bullet-active) {
  background: #ef4444 !important;
}
</style>