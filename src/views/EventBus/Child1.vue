<script setup lang="ts">
import emitter from '@/utils/event-bus'

const sendHelloToChild2 = () => {
  emitter.emit('msg', 'hello, i am child1')
}
</script>

<template>
  <h2>这是Child1</h2>
  <button @click="sendHelloToChild2">sendHelloToChild2</button>
</template>