<template>
<div style="display:flex;">
  <div style="width:250px">
    <Menu :model="menuItems" :pt="{ root: { style: 'width:100%;shadow-box:none;border:none' } }"
      @click=""
    ></Menu>
  </div>
  <div style="display: flex;flex-direction: column;width:100%">
    <!-- <MethodModelType></MethodModelType> -->
    <router-view></router-view>
  </div>
</div>
  <!-- </SplitterPanel>
    <SplitterPanel>123</SplitterPanel>
  </Splitter> -->
</template>
<script setup>
import { ref } from 'vue';
// import MethodModelType from './Method/ModelType.vue';
const header = ref('Типы моделей');

const menuItems = ref([
  {
    label: 'Метод', items: [
      { label: 'Типы моделей',to:'/subpis/admin/method/model-types'},
      { label: 'Типы объектов' },
      { label: 'Символы объектов' },
      { label: 'Типы связей' },
      { label: 'Типы атрибутов' },
      { label: 'Группы типов атрибутов' },
      { label: 'Символы атрибутов' },
      { label: 'Фильтры' },
    ]
  },
  {
    label: 'Шаблоны', items: [
      { label: 'Используемые шаблоны' },
      { label: 'Доступные шаблоны' },
      { label: 'Форматы шрифтов' },
    ]
  },
  {
    label: 'Конфигурация', items: [
      { label: 'Типы содержимого' },
    ]
  },
  {
    label: 'Локализация', items: [
      { label: 'Языки' },
    ]
  }
]);
</script>