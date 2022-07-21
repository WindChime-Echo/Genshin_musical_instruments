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
    <audio ref="audio" :src="musicUrl"></audio>
    <button @click="playKey">弹琴</button>
  </div>
</template> 

<script setup>
import { ref } from 'vue'

// prop
const props = defineProps({
  musicUrl: {
    type: String,
    default: ''
  }
})


const audio = ref()
function playKey() {
  audio.value.currentTime = 0
  audio.value.play();
}

</script>

<style scoped>
</style>