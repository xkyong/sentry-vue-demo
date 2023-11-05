<script setup lang="ts">
// 强烈建议使用 emits 记录每个组件所触发的所有事件，
// 因为移除了 .native 修饰符。任何未在 emits 中声明的事件监听器都会被算入组件的 $attrs，
// 并将默认绑定到组件的根节点上

const emit = defineEmits(['click'])
// 如果不记录触发事件，则对于向其父组件透传原生事件的这种场景，click 事件会触发 2 次
// 一次来自 emit()，另一次来自应用在根元素上的原生事件监听器
// const emit = defineEmits([])

const onChildClick = () => {
  emit('click', 'onChildClick')
}
</script>
<template>
  <button @click="onChildClick">onChildClick</button>
</template>