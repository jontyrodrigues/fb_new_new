<script setup lang="ts">
import { ref } from 'vue'

const match = ref({
  id: 1,
  homeTeam: 'Arsenal',
  awayTeam: 'Chelsea',
  homeScore: 2,
  awayScore: 1,
  referee: 'Michael Oliver',
  stadium: 'Emirates Stadium',
  fouls: { home: 8, away: 12 },
  possession: { home: 55, away: 45 },
  shots: { home: 15, away: 10 },
  commentary: [
    { time: '75′', text: 'Yellow card for Mount after a late challenge' },
    { time: '70′', text: 'GOAL! Saka scores from the penalty spot!' },
    { time: '65′', text: 'Five minutes added time' }
  ]
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-gray-900 rounded-lg p-6 mb-8">
      <div class="grid grid-cols-3 items-center mb-6">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-white">{{ match.homeTeam }}</h2>
          <div class="text-4xl font-bold text-white mt-2">{{ match.homeScore }}</div>
        </div>
        <div class="text-center text-gray-400">VS</div>
        <div class="text-center">
          <h2 class="text-2xl font-bold text-white">{{ match.awayTeam }}</h2>
          <div class="text-4xl font-bold text-white mt-2">{{ match.awayScore }}</div>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 text-white">
        <div class="bg-gray-800 p-4 rounded">
          <h3 class="font-semibold mb-2">Match Details</h3>
          <p>Referee: {{ match.referee }}</p>
          <p>Stadium: {{ match.stadium }}</p>
        </div>
        <div class="bg-gray-800 p-4 rounded">
          <h3 class="font-semibold mb-2">Statistics</h3>
          <p>Possession: {{ match.possession.home }}% - {{ match.possession.away }}%</p>
          <p>Fouls: {{ match.fouls.home }} - {{ match.fouls.away }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-900 rounded-lg p-6">
      <h2 class="text-xl font-bold text-white mb-4">Match Commentary</h2>
      <div class="space-y-4">
        <div v-for="(comment, index) in match.commentary" :key="index" class="flex gap-4 text-white">
          <span class="text-red-500 font-semibold">{{ comment.time }}</span>
          <p>{{ comment.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>