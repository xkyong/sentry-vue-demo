<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const pageTitle = ref('pageTitle111')

const changePageTitle = () => {
  pageTitle.value = `parent-pageTitle-${Math.random().toString().replace('0.', '')}`
}

</script>
<template>
  <button @click="changePageTitle">changePageTitle</button>
  <!-- 1.默认写法 -->
  <!-- <Child v-model="pageTitle" /> -->
  <!-- 等价于 -->
  <!-- <Child :modelValue="pageTitle" @update:modelValue="pageTitle = $event" /> -->
  <!-- 即等价于 -->
  <!-- <Child :modelValue.sync="pageTitle"/> -->

  <!-- 2.修改model名称，为 v-model 传递一个参数 -->
  <Child v-model:title="pageTitle" />
  <!-- 等价于 -->
  <!-- <Child :title="pageTitle" @update:title="pageTitle = $event" /> -->
  <!-- 即等价于 -->
  <!-- <Child :title.sync="pageTitle"/> -->
</template>