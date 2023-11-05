<script setup lang="ts">
import MyModal from './Modal.vue'
</script>
<template>
  <div class="outer">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <MyModal msg="Hello from the modal!" :disabled="false"/>
    </div>
  </div>
</template>