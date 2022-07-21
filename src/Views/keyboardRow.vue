<script setup>
  import musicKey from './musicKey.vue';

  const prop = defineProps({
    musicUrl: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <music-key :musicUrl="musicUrl"></music-key>
</template>

<style scoped>
  
</style>