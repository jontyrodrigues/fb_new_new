<script setup lang="ts">
import { ref } from 'vue'

const matches = ref([
  {
    date: '2024-03-20',
    matches: [
      {
        id: 1,
        time: '20:45',
        competition: 'Premier League',
        homeTeam: 'Arsenal',
        awayTeam: 'Chelsea'
      },
      {
        id: 2,
        time: '21:00',
        competition: 'Champions League',
        homeTeam: 'Real Madrid',
        awayTeam: 'Manchester City'
      }
    ]
  },
  {
    date: '2024-03-21',
    matches: [
      {
        id: 3,
        time: '19:30',
        competition: 'Premier League',
        homeTeam: 'Liverpool',
        awayTeam: 'Tottenham'
      }
    ]
  }
])
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-white mb-8">Match Schedule</h1>
    
    <div class="space-y-8">
      <div v-for="day in matches" :key="day.date" class="bg-gray-900 rounded-lg p-6">
        <h2 class="text-xl font-bold text-white mb-4">{{ new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</h2>
        
        <div class="space-y-4">
          <div v-for="match in day.matches" :key="match.id" 
            class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer">
            <div class="text-sm text-red-500 mb-2">{{ match.competition }}</div>
            <div class="flex items-center justify-between">
              <div class="text-white">{{ match.homeTeam }}</div>
              <div class="text-gray-400 mx-4">{{ match.time }}</div>
              <div class="text-white">{{ match.awayTeam }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>