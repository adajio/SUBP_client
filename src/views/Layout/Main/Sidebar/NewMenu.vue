<template>
  <Menu ref="newMenu" id="newMenu" :model="newMenuItems" :popup="true"></Menu>
</template>
<script setup>
import {ref} from 'vue';
const newMenu = ref();
const toggleNewMenu = (event) => {
  newMenu.value.toggle(event);
};

const newMenuItems = ref([
  {
    label: 'Создать портфель',
    icon: 'mdi mdi-card-multiple-outline',
    command: () => {

    }
  },
  {
    label: 'Создать продукт',
    icon: 'mdi mdi-table',
    command: () => {

    }
  },
  {
    label: 'Создать этап',
    icon: 'mdi mdi-view-grid-outline',
    command: () => {

    }
  },
  {
    label: 'Создать страницу',
    icon: 'mdi mdi-chart-gantt',
    command: () => {

    }
  }  

]);
</script>