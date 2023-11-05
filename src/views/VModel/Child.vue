<script setup lang="ts">
defineProps({
  // modelValue: String
  title: String
})

const emit = defineEmits(['update:title'])

const changeTitle = () => {
  emit('update:title', `child-pageTitle-${Math.random().toString().replace('0.', '')}`)
}
</script>
<template>
  <button @click="changeTitle">changeTitle</button>
  <!-- <h2>Child拿到的值：{{ modelValue }}</h2> -->
  <h2>Child拿到的值：{{ title }}</h2>
</template>