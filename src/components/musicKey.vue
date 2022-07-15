<template>
  <div class="pianoKeys" @keydown="playAudio">
    <div class="note">
      <img :src="object.nodeUrl" alt="">
    </div>
    <div class="scale">
      {{object.name}}
    </div>
    <audio :src="object.src"></audio>
  </div>
</template>

<script>

export default {
  name: 'musicKey',
  props: {
    item: Object,
  },
  data() {
    return {
      object: {
        name:'do',
        src: '../../public/music/风物之诗琴/2/do.wav',
        nodeUrl:'',
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