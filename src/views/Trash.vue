<template>
  <LayoutMain :nav="nav">
    <div style="display:flex;flex-direction:column;align-items: center;">
    <div style="width:900px">
      <h1>Удаленные страницы</h1>
      <p>Здесь будут удаленные портфели, продукты, этапы, страницы и другая информация, которую можно будет восстановить</p>
    </div>
  </div>
  </LayoutMain>
</template>
<script setup>
import { ref } from 'vue';
const nav = ref([
  { label: '', icon: '🏠', url: '/home' },
  { label: 'Удаленные страницы', icon: '🗑️', url: '/trashcan' }
]);
</script>