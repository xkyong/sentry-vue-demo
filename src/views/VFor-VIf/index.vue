<script setup lang="ts">
import { ref } from 'vue'
/**
 * 1.Vue2 中，在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用；
 * 但在 Vue3 中，v-if 总是优先于 v-for 生效
 * 2.不过有相同点，那就是避免在同一元素上同时使用这两者
*/

const condition = ref(true)

const bookList = ref([
  { id: 1, name: '西游记', price: 23.00 },
  { id: 2, name: '水浒传', price: 21.00 },
  { id: 3, name: '三国演义', price: 20.00 }
])

</script>
<template>
  <!-- 1.Vue3 不再建议在 v-if/v-else/v-else-if 的分支中继续使用 key attribute，
    因为没有为条件分支提供 key 时，也会自动生成唯一的 key -->
  <div v-if="condition">Yes</div>
  <div v-else>No</div>

  <!-- 2.在 Vue 3.x 中，key 则应该被设置在 <template> 标签上 -->
  <template v-for="book in bookList" :key="book.id">
    <div>{{ book.id }}-{{ book.name }}-{{ book.price }}</div>
    <hr/>
  </template>
</template>