<script setup lang="ts">
import { RouterView } from 'vue-router'
import MatchCarousel from './components/MatchCarousel.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-950">
    <nav class="bg-gray-900 p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <router-link to="/">
          <!-- Replace FootballHub text with an image -->
          <img src="https://cric.sportsfever.ai/storage/logo.png" alt="FootballHub Logo" class="h-8 w-auto" />
        </router-link>
        <div class="space-x-4">
          <router-link to="/schedule" class="text-white hover:text-gray-300">Schedule</router-link>
          <router-link to="/tables" class="text-white hover:text-gray-300">Tables</router-link>
          <router-link to="/stories" class="text-white hover:text-gray-300">Stories</router-link>
          <router-link to="/about" class="text-white hover:text-gray-300">About</router-link>
          <router-link to="/contact" class="text-white hover:text-gray-300">Contact</router-link>
        </div>
      </div>
    </nav>
    <MatchCarousel />
    <RouterView />
  </div>
</template>
