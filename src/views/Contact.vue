<script setup lang="ts">
import { ref } from 'vue';
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value)
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-gray-900 rounded-lg p-8">
      <h1 class="text-3xl font-bold text-white mb-6">Contact Us</h1>
      
      <div class="prose prose-invert max-w-none mb-8">
        <p class="text-gray-300">
          Have a question or feedback? We'd love to hear from you. Fill out the form 
          below and our team will get back to you as soon as possible.
        </p>
      </div>

      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="mt-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          >
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="mt-3 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          >
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium text-gray-300">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          >
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>