<template>
  <div class="flex flex-column">
    <div class="flex align-items-center p-2">
      <img src="/images/blocks/avatars/circle/avatar-m-1.png" class="p-2">
      <div class="p-2">Сергей Семенов</div>
    </div>

    <Menu :model="menuItems" :pt="{ root: { style: 'border:none;shadow-box:none;width:100%' }, icon: { style: 'font-size:20px' } }">
    </Menu>

  </div>
</template>
<script setup>
import { ref } from 'vue';

const menuItems = ref([
  {
    label: 'Каналы', items: [
      { label: 'Мой канал', icon: 'mdi mdi-forum-outline', },
      { label: 'Канал предприятия', icon: 'mdi mdi-forum-outline', },
      { label: 'Мои каналы портала', icon: 'mdi mdi-star-outline', },
    ]
  },
  {
    label: 'Группы', items: [
      { label: 'Найти группу', icon: 'mdi mdi-magnify', },
      { label: 'Создать группу', icon: 'mdi mdi-plus', },
    ]
  },
  {
    label: 'Фильтры', items: [
      { label: 'Мои закладки', icon: 'mdi mdi-bookmark-outline', },
      { label: 'Мне нравится', icon: 'mdi mdi-thumb-up-outline', },
      { label: 'Создать фильтр', icon: 'mdi mdi-plus', },
    ]
  },
  {
    label: 'Администрирование', items: [
      { label: 'Проверить действие', icon: 'mdi mdi-checkbox-marked-outline', },
      { label: 'Управление каналами', icon: 'mdi mdi-view-list', },
      { label: 'Управление объявлениями', icon: 'mdi mdi-microphone-outline', },
      { label: 'Настроить пользователей', icon: 'mdi mdi-content-save-outline', },
      { label: 'Настроить пользователя', icon: 'mdi mdi-database-outline', },
      { label: 'Панели управления', icon: 'mdi mdi-view-dashboard-outline', },
      { label: 'Очистить и экспортировать', icon: 'mdi mdi-arrow-up', },
      { label: 'Настроить уведомления', icon: 'mdi mdi-email-outline', },
    ]
  },
]);
</script>