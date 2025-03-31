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
      <Button text rounded icon="mdi mdi-content-cut" v-tooltip.top="'Вырезать'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <Button text rounded icon="mdi mdi-content-copy" v-tooltip.top="'Скопировать'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <div class="p-buttonset">
        <Button text rounded icon="mdi mdi-content-paste" v-tooltip.top="'Вставить'"
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" v-tooltip.top="'Вставить как...'"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <Button text rounded icon="mdi mdi-format-paint" v-tooltip.top="'Формат по образцу'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <!-- СЮДА ВСТАИВТЬ Формат шрифта-->

      <Button text rounded icon="mdi mdi-format-bold" v-tooltip.top="'Полужирный'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-format-italic" v-tooltip.top="'Курсив'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-format-underline" v-tooltip.top="'Подчеркнутый'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-format-strikethrough-variant" v-tooltip.top="'Зачеркнутый'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <div class="p-buttonset flex" v-tooltip.top="'Цвет шрифта'">
        <div class="flex">
          <Button text rounded icon="mdi mdi-format-color-text"
            :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
          <div class="mdi mdi-color-helper" style="margin-left:-24px;margin-right:8px;margin-top:8px;color:red"></div>
        </div>
        <Button text rounded icon="mdi mdi-chevron-down"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>
      <div class="p-buttonset flex" v-tooltip.top="'Шрифт'">
        <Button text rounded icon="mdi mdi-format-font"
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset flex" v-tooltip.top="'Размер шрифта'">
        <Button text rounded icon="mdi mdi-format-size" v-tooltip.top="''"
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <Button text rounded icon="mdi mdi-format-clear" v-tooltip.top="'Сбросить формат шрифта'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <Button text rounded icon="mdi mdi-format-indent-increase" v-tooltip.top="'Увеличить отступ'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-format-indent-decrease" v-tooltip.top="'Уменьшить отступ'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-format-list-bulleted-square" v-tooltip.top="'Маркеры'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-format-list-numbered" v-tooltip.top="'Нумерация'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <Button text rounded icon="mdi mdi-format-align-left" v-tooltip.top="'По левому краю'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-format-align-center" v-tooltip.top="'По центру'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Button text rounded icon="mdi mdi-format-align-right" v-tooltip.top="'По правому краю'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>




    </template>
  </Toolbar>
  <Menu ref="shieldMenu" :model="shieldMenuItems" style="width:500px" :popup="true"></Menu>

  <OverlayPanel ref="colorPickerFont">
    <StartColorPicker></StartColorPicker>
  </OverlayPanel>
</template>
<script setup>
import { ref } from 'vue';
import StartColorPicker from './ColorPicker.vue';

const colorPickerFont = ref();
const colorPickerFontToggle = (event) => colorPickerFont.value.toggle(event);

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