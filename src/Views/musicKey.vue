<template>
  <!-- <div class="pianoKeys">
    <div class="note">
      <img src="./favicon.ico" alt="" >
    </div>
    <div class="scale">
      {{object.name}}
    </div>
    <input type="text" @keyup="playAudio" >
    <audio @keyup="playAudio" :src="object.src"></audio>
  </div> -->
  <div class="pianoKey">
    <audio ref="audio" :src="importUrl"></audio>
    <button @click="playKey">弹琴</button>
  </div>
</template> 

<script setup>
import { onBeforeUpdate, ref } from 'vue'
import importUrl from '../assets/music/风物之诗琴/2/do.wav' 
console.log(importUrl)

const audio = ref()
function playKey() {
  audio.value.currentTime = 0
  audio.value.play();
}

</script>

<style scoped>
</style>