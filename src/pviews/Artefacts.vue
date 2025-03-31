<template>
  <h2>Мои задачи</h2>
  <div v-for="task in tasks">
    {{ task.name }}
  </div>

</template>
<script setup>
import {ref} from 'vue';
const tasks = ref([
  {name:'Задача 1'}
]);
</script>