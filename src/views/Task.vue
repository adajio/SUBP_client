<template>
  <LayoutMain :nav="nav">
    <div style="display:flex;flex-direction:column;align-items: center;">
    <div style="width:900px">
      <h1>Задача</h1>
      <p>Здесь будут страницы, на которых будет производится работа над продуктом</p>
      <Voix api="get/task" code="1" #="data">
        {{ data?.task?.name }}
        {{ data?.actor?.name }}
        {{ data?.product?.name }}
      </Voix>
    </div>
  </div>
  </LayoutMain>
</template>
<script setup>
import { ref } from 'vue';
const nav = ref([
  { label: '', icon: '🏠', url: '/home' },
  { label: 'Страница продукта', icon: '📄', url: '/page' }
]);
</script>