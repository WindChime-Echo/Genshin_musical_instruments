<template>
  <music-key></music-key>
</template>

<script>
window.addEventListener("keydown")
import musicKey from './musicKey.vue'
export default {
  name: 'keyboardRow',
  props: {

  },
  components: {
    musicKey
  },
  data() {
    return {
      object: {key:'value'},
      musicalInstrumentBag: {
        id: '0001',
        address: '../../public/music/风物之诗琴',


      }
    }
  }
}
</script>