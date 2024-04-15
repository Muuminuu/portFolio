<script setup>
import NavBar from './components/navbar/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  
  <NavBar />
      
    

  <main>
    <RouterView />
  </main>
  
</template>

<style scoped>
</style>
