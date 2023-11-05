<script setup lang="ts">
import Child from './Child.vue'

const onParentClick = (data: string) => {
  console.log('onParentClick---', data)
}
</script>
<template>
<Child @click="onParentClick" />
</template>