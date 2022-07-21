<script setup>
import doMusic from '@music/风物之诗琴/FirstLine/do.wav'

// 引入组件
import keyboardRow from './keyboardRow.vue'




// 监听window
window.addEventListener('keydown', (event) => {
  console.log(event)
})
</script>

<template>
  <keyboard-row :musicUrl="doMusic"></keyboard-row>
</template>

<style scoped>
</style>