<script setup lang="ts">
// $on，$off 和 $once 实例方法已被移除，组件实例不再实现事件触发接口。
// 如果还想要使用 事件总线，则需要借助第三方插件
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
</script>

<template>
  <h2>这是Parent</h2>
  <Child1 />
  <Child2 />
</template>