<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const stories = ref([
  {
    id: 1,
    title: 'Arsenal Takes Control of Title Race',
    excerpt: 'A commanding performance puts the Gunners in pole position...',
    image: 'https://placehold.co/600x400',
    date: '2024-03-15',
    content: 'Full article content here...'
  },
  {
    id: 2,
    title: 'Champions League Draw Revealed',
    excerpt: 'Exciting quarter-final matchups announced...',
    image: 'https://placehold.co/600x400',
    date: '2024-03-14',
    content: 'Full article content here...'
  }
])

const navigateToStory = (id: number) => {
  router.push(`/story/${id}`)
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-white mb-8">Latest Football News</h1>
    <div class="grid gap-8 md:grid-cols-2">
      <article 
        v-for="story in stories" 
        :key="story.id" 
        class="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition"
        @click="navigateToStory(story.id)"
      >
        <img :src="story.image" :alt="story.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <div class="text-gray-400 text-sm mb-2">{{ story.date }}</div>
          <h2 class="text-xl font-bold text-white mb-2">{{ story.title }}</h2>
          <p class="text-gray-300">{{ story.excerpt }}</p>
        </div>
      </article>
    </div>
  </div>
</template>