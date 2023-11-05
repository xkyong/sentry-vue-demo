<script setup lang="ts">
// 带有动画的 modal 组件例子：https://cn.vuejs.org/examples/#modal
import { ref } from 'vue'

defineProps({
  msg: String,
  disabled: Boolean
})

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body" :disabled="disabled">
    <div v-if="open" class="modal">
      <p>{{ msg }}</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: beige;
  border: 1px solid;
}
</style>