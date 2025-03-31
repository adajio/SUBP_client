<template>
  <h2>Мои страницы</h2>
  <div v-for="page in pages">
    {{ page.name }}
  </div>
</template>
<script setup>
import {ref} from 'vue';
const pages = ref([
  {name:'Страница 1'}
]);
</script>