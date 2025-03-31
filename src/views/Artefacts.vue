<template>
  <LayoutMain :nav="nav">
    <div style="display:flex;flex-direction:column;align-items: center;">
    <div style="width:900px">
      <h1>Артефакты</h1>
      <p>Здесь будут страницы, на которых будет производится работа над продуктом</p>
    </div>
  </div>
  </LayoutMain>
</template>
<script setup>
import { ref } from 'vue';
const nav = ref([
  { label: '', icon: '🏠', url: '/home' },
  { label: 'Активность', icon: '📄', url: '/page' }
]);
</script>