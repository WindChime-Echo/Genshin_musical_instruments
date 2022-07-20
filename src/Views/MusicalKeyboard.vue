<script setup>
  import keyboardRow from './keyboardRow.vue'
  window.addEventListener('keydown' ,(event) => {
    console.log(event)
  })
</script>

<template>
  <keyboard-row></keyboard-row>
</template>

<style scoped>
  
</style>