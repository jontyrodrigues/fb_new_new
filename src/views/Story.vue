<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const story = ref({
  id: 1,
  title: 'Arsenal Takes Control of Title Race',
  content: `In a thrilling encounter at the Emirates Stadium, Arsenal demonstrated why they're considered serious title contenders this season. The Gunners dominated possession and created numerous chances, eventually breaking through with two well-worked goals.

  The victory puts Arsenal in a commanding position at the top of the Premier League table, with their closest rivals now playing catch-up. Manager Mikel Arteta praised his team's performance, highlighting their tactical discipline and mental strength.

  Key talking points:
  - Saka's brilliant performance
  - Solid defensive display
  - Tactical masterclass from Arteta
  - Title race implications`,
  image: 'https://placehold.co/1200x600',
  date: '2024-03-15',
  author: 'John Smith'
})

onMounted(() => {
  // In a real app, fetch the story based on route.params.id
  console.log('Story ID:', route.params.id)
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <article class="bg-gray-900 rounded-lg overflow-hidden">
      <img :src="story.image" :alt="story.title" class="w-full h-64 object-cover">
      <div class="p-8">
        <div class="mb-4">
          <span class="text-gray-400">{{ story.date }} • By {{ story.author }}</span>
        </div>
        <h1 class="text-3xl font-bold text-white mb-6">{{ story.title }}</h1>
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 whitespace-pre-line">{{ story.content }}</p>
        </div>
      </div>
    </article>
  </div>
</template>