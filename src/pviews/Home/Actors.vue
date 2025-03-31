<template>
  <h2>Моя команда</h2>
  <div v-for="actor in actors">
    {{ actor.name }}
  </div>
  
</template>
<script setup>
import {ref} from 'vue';
const actors = ref([
  {name:'Сотрудник 1'}
]);
</script>