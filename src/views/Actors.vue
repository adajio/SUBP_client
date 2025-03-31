<template>
  <LayoutMain :nav="nav">
<ul>
  <li>Компании</li>
  <li>Подразделения</li>
  <li>Подрядчики</li>
  <li>Сотрудники</li>
  <li>Фрилансеры</li>
</ul>

  </LayoutMain>
</template>
<script setup>
import {ref} from 'vue';
const nav = ref({
  items: [
    {
      name: 'Акторы',
      icon:'mdi mdi-accounts',
      // emoji: '🏦', 
      route: '/actors'
    },
  ]
});
</script>