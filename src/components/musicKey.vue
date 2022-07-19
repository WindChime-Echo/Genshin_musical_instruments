<template>
  <div class="pianoKeys">
    <div class="note">
      <img src="./favicon.ico" alt="" >
    </div>
    <div class="scale">
      {{object.name}}
    </div>
    <input type="text" @keyup="playAudio" >
    <audio @keyup="playAudio" :src="object.src"></audio>
  </div>
</template>

<script>
import doMusic from '../../public/music/风物之诗琴/2/do.wav'
export default {
  name: 'musicKey',
  props: {
    item: Object,
  },
  data() {
    return {
      object: {
        name:'do',
        src: doMusic,
        nodeUrl:'../../public/favicon.ico',
        keyDown:'q'

      }
    }
  },
  methods: {
    playAudio(event) {
      const keyCode = event.keyCode
      console.log(keyCode)
      const audio = document.querySelector('audio')
      audio.currentTime = 0;
      audio.play();
    }
  }


}
</script>

<style scoped>
</style>