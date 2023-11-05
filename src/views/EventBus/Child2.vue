<script setup lang="ts">
import { ref } from 'vue'
import emitter from '@/utils/event-bus'

const msg = ref('')

emitter.on('msg', (data: string) => {
  console.log('child2 receive msg: ', data)
  msg.value = data
})

</script>

<template>
  <h2>这是Child2</h2>
  <h3>child2 receive msg: {{ msg }}</h3>
</template>