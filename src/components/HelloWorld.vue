<template>
  <v-app :dark="isDark">
    <v-main>
      <v-container>
        <h1>Now is: {{ now }}</h1>
        <p>
          Has published books:
        </p>
        <span>
          {{ publishedBookMessage }}
        </span>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { reactive, computed } from 'vue';
const author = reactive({
  name:  'John',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
});

const now = computed(() => {
  const timestamp = Math.floor(Date.now())
  const date = new Date(timestamp * 1000)

  return date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
})

const publishedBookMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<style>
/* Add your styles here */
</style>
