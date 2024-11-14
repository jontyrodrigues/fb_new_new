<script setup lang="ts">
import { ref } from 'vue';
const teamMembers = ref([
  {
    name: 'John Smith',
    role: 'Editor in Chief',
    image: 'https://placehold.co/200x200'
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Reporter',
    image: 'https://placehold.co/200x200'
  }
])
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-gray-900 rounded-lg p-8">
      <h1 class="text-3xl font-bold text-white mb-6">About FootballHub</h1>
      
      <div class="prose prose-invert max-w-none mb-12">
        <p class="text-gray-300">
          FootballHub is your premier destination for comprehensive football coverage. 
          Founded in 2024, we bring you the latest news, scores, and analysis from the 
          beautiful game. Our team of dedicated journalists and football experts work 
          around the clock to deliver accurate, engaging content to football fans worldwide.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">Our Team</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <div v-for="member in teamMembers" :key="member.name" 
          class="bg-gray-800 p-6 rounded-lg flex items-center space-x-4">
          <img :src="member.image" :alt="member.name" 
            class="w-20 h-20 rounded-full object-cover">
          <div>
            <h3 class="text-xl font-bold text-white">{{ member.name }}</h3>
            <p class="text-gray-400">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>