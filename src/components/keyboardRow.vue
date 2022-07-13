<template>
  <music-key :item="object"></music-key>
</template>

<script>
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
      object: {key:'value'}
    }
  }
}
</script>