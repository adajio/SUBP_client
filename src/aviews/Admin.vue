<template>
  <LayoutArahis title="Администрирование" icon="mdi mdi-wrench">
    <TabMenu :model="tabMenuItems"></TabMenu>
    <router-view></router-view>
  </LayoutArahis>
</template>
<script setup>
import { ref } from 'vue';
const tabMenuItems = ref([
  { label: 'Пользователи', to: '/arahis/admin/users/users' },
  { label: 'Конфигурации', to: '/arahis/admin/configs' },
  { label: 'Публикация', to: '/arahis/admin/publish' },
  { label: 'Соглашения', to: '/arahis/admin/method/model-types' },
  { label: 'Базы данных', to: '/arahis/admin/databases' },
  { label: 'Процессы', to: '/arahis/admin/processes' },
  { label: 'Майнинг', to: '/arahis/admin/mining' },
  { label: 'Моделирование', to: '/arahis/admin/imitation' },
  { label: 'Интерфейс', to: '/arahis/admin/interface' },
  { label: 'Лицензии', to: '/arahis/admin/License' },
  // { label: 'Больше', to: '' },
]);
</script>