<script setup lang="ts">
import { ref } from 'vue';
const leagueTable = ref([
  { position: 1, team: 'Arsenal', played: 25, won: 18, drawn: 4, lost: 3, points: 58 },
  { position: 2, team: 'Man City', played: 25, won: 17, drawn: 5, lost: 3, points: 56 },
  { position: 3, team: 'Liverpool', played: 25, won: 16, drawn: 6, lost: 3, points: 54 }
])
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-gray-900 rounded-lg p-6">
      <h2 class="text-2xl font-bold text-white mb-6">Premier League Table</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-white">
          <thead>
            <tr class="text-left border-b border-gray-700">
              <th class="pb-4 px-2">Pos</th>
              <th class="pb-4 px-2">Team</th>
              <th class="pb-4 px-2">P</th>
              <th class="pb-4 px-2">W</th>
              <th class="pb-4 px-2">D</th>
              <th class="pb-4 px-2">L</th>
              <th class="pb-4 px-2">Pts</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="team in leagueTable" :key="team.position" class="border-b border-gray-800">
              <td class="py-4 px-2">{{ team.position }}</td>
              <td class="py-4 px-2">{{ team.team }}</td>
              <td class="py-4 px-2">{{ team.played }}</td>
              <td class="py-4 px-2">{{ team.won }}</td>
              <td class="py-4 px-2">{{ team.drawn }}</td>
              <td class="py-4 px-2">{{ team.lost }}</td>
              <td class="py-4 px-2 font-bold">{{ team.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>