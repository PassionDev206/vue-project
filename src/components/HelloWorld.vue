<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg"/>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('Hello world')
</script>

<style>
/* Add your styles here */
</style>
