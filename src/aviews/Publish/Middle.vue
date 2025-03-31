<template>
  <div style="display:flex;justify-content: space-between;align-items: center;">
    <div style="display:flex;">
      <h2>
        <i class="mdi mdi-arrow-up"></i>
        <i class="mdi mdi-chevron-left"></i>
        <i class="mdi mdi-chevron-right"></i>
        Поиск кандидата
        <i class="mdi mdi-star-outline"></i>
      </h2>
    </div>
    <Button label="Обработать модель" icon="mdi mdi-shape-outline" text rounded></Button>
  </div>

  <div style="display:flex;justify-content: space-between;">
    <TabMenu :model="middleTabItems" :pt="{ icon: { style: 'font-size:20px' } }" />
    <TabMenu :model="rightTabItems" :pt="{ icon: { style: 'font-size:20px' } }" />
  </div>

  <MiddleOverview></MiddleOverview>



</template>
<script setup>
import { ref } from 'vue';
import MiddleOverview from './Middle/Overview.vue';

const middleTabItems = [
  { label: 'Обзор' },
  { label: 'Шаги' },
  { label: 'Таблица' },
  { label: 'RACI' },
  { label: 'Диаграмма' },
  { label: 'Документы' },
];

const rightTabItems = [
  { icon: 'mdi mdi-share-variant' },
  { icon: 'mdi mdi-lightbulb-variant' },
  { icon: 'mdi mdi-printer-outline' },
  { icon: 'mdi mdi-forum-outline' },
];


</script>