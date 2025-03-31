<template>
  <Toolbar :pt="{ root: { style: 'padding:0px;border-radius: 0;' } }">
    <template #start>
      <Button text rounded icon="mdi mdi-content-save-outline" v-tooltip.top="'Сохранить'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <Button text rounded icon="mdi mdi-undo" v-tooltip.top="'Отменить'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <Button text rounded icon="mdi mdi-redo" v-tooltip.top="'Вернуть'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <Button text rounded icon="mdi mdi-refresh" v-tooltip.top="'Обновить'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <Divider layout="vertical" style="margin:4px;"></Divider>

      <Button text rounded icon="mdi mdi-delete-outline" v-tooltip.top="'Удалить'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <Button text rounded icon="mdi mdi-content-cut" v-tooltip.top="'Вырезатьб'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <Button text rounded icon="mdi mdi-content-copy" v-tooltip.top="'Копировать'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <div class="p-buttonset">
        <Button text rounded icon="mdi mdi-content-paste" v-tooltip.top="'Вставить'"
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" v-tooltip.top="'Вставить как'"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <Divider layout="vertical" style="margin:4px"></Divider>


      <div class="p-buttonset" @click="shieldMenuToggle">
        <Button text rounded icon="mdi mdi-shield-check-outline" v-tooltip.top="'Проверить диаграмму'"
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" v-tooltip.top="''"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <Button text rounded icon="mdi mdi-car-shift-pattern" v-tooltip.top="'Размещение'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-arrow-split-vertical" v-tooltip.top="'Пространство по горизонтали'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-arrow-split-horizontal" v-tooltip.top="'Пространство по вертикали'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <Button text rounded icon="mdi mdi-arrow-left-right" v-tooltip.top="'Экспортировать графику'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <Button text rounded icon="mdi mdi-vector-line" v-tooltip.top="'Свойства связи'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <div class="p-buttonset" v-tooltip.top="'Область моделирования'">
        <Button text rounded icon="mdi mdi-table" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Зафиксировать/отменить фиксацию'">
        <Button text rounded icon="mdi mdi-table-large" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Цвет фона'">
        <Button text rounded icon="mdi mdi-water-outline" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Назначить шаблон'">
        <Button text rounded icon="mdi mdi-billiards-rack" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded label="Шаблон" 
          :pt="{ root: { style: 'box-shadow:none;width:94px;height:32px;margin-left:-24px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

    </template>
  </Toolbar>
  <Menu ref="shieldMenu" :model="shieldMenuItems" style="width:500px" :popup="true"></Menu>
</template>
<script setup>
import { ref } from 'vue';

const shieldMenu = ref();
const shieldMenuToggle = (event) => { shieldMenu.value.toggle(event); };
const shieldMenuItems = ref([
  { icon: 'mdi mdi-shield-check-outline', label: 'Правило главной структуры для всех типов моделей' },
  { icon: 'mdi mdi-shield-check-outline', label: 'Правила для организационных элементов' },
  { icon: 'mdi mdi-shield-check-outline', label: 'Правила для функций' },
  { icon: 'mdi mdi-shield-check-outline', label: 'Правила для элементов данных' },
  { icon: 'mdi mdi-shield-check-outline', label: 'Правила на уровне спецификаций дизайна' },
  { icon: 'mdi mdi-shield-check-outline', label: 'Проверка моделирования Robotic Process Automation' },
  { icon: 'mdi mdi-shield-check-outline', label: 'Структурные правила для иерархических моделей' },
  { icon: 'mdi mdi-shield-check-outline', label: 'Структурные правила для особых иерархических моделей' },
]);
</script>