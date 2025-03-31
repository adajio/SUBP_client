<template>
  <LayoutSubpis title="Администрирование" icon="mdi mdi-wrench">
    <TabMenu :model="tabMenuItems"></TabMenu>
    <router-view></router-view>
  </LayoutSubpis>
</template>
<script setup>
import { ref } from 'vue';
const tabMenuItems = ref([
  { label: 'Пользователи', to: '/subpis/admin/users/users' },
  { label: 'Конфигурации', to: '/subpis/admin/configs' },
  { label: 'Публикация', to: '/subpis/admin/publish' },
  { label: 'Соглашения', to: '/subpis/admin/method/model-types' },
  { label: 'Базы данных', to: '/subpis/admin/databases' },
  { label: 'Процессы', to: '/subpis/admin/processes' },
  { label: 'Майнинг', to: '/subpis/admin/mining' },
  { label: 'Моделирование', to: '/subpis/admin/imitation' },
  { label: 'Интерфейс', to: '/subpis/admin/interface' },
  { label: 'Лицензии', to: '/subpis/admin/License' },
  // { label: 'Больше', to: '' },
]);
</script>