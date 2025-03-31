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
          @click="pasteMenuToggle"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <Divider layout="vertical" style="margin:4px"></Divider>


      <Button text rounded icon="mdi mdi-format-paint" v-tooltip.top="'Формат по образцу'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
      <div class="flex p-buttonset" v-tooltip.top="'Цвет заливки'">
        <div class="flex">
        <Button text rounded icon="mdi mdi-format-color-fill" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
          <div class="mdi mdi-color-helper" style="margin-left:-24px;margin-right:8px;margin-top:8px;color:red"></div>
        </div>
        <Button text rounded icon="mdi mdi-chevron-down" 
          @click="colorPickerBackgroundToggle"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <div class="flex p-buttonset" v-tooltip.top="'Цвет линии'">
        <div class="flex">
        <Button text rounded icon="mdi mdi-border-color" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
          <div class="mdi mdi-color-helper" style="margin-left:-24px;margin-right:8px;margin-top:8px;color:red"></div>
        </div>
          <Button text rounded icon="mdi mdi-chevron-down" 
          @click="colorPickerLineToggle"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Стиль линии'">
        <Button text rounded icon="mdi mdi-format-line-style" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Толщина линии'">
        <Button text rounded icon="mdi mdi-format-line-weight" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Стрелки источника'">
        <Button text rounded icon="mdi mdi-ray-start-arrow" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Стрелки цели'">
        <Button text rounded icon="mdi mdi-ray-end-arrow" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>


      <div class="p-buttonset" v-tooltip.top="'Представление'">
        <Button text rounded icon="mdi mdi-picture-in-picture-bottom-right" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Заменить символ'">
        <Button text rounded icon="mdi mdi-file-replace-outline" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Детализации'">
        <Button text rounded icon="mdi mdi-link-variant" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <div class="p-buttonset" v-tooltip.top="'Упорядочить'">
        <Button text rounded icon="mdi mdi-arrange-bring-to-front" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" v-tooltip.top="''"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset" v-tooltip.top="'Группировать/разгруппировать'">
        <Button text rounded icon="mdi mdi-group" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <!-- <div class="p-buttonset" v-tooltip.top="''">
        <Button text rounded icon="mdi mdi-link-variant" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" 
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div> -->

      <div class="p-buttonset" v-tooltip.top="'Выровнять'">
        <Button text rounded icon="mdi mdi-align-horizontal-left" 
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" v-tooltip.top="''"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <div class="p-buttonset">
        <Button text rounded icon="mdi mdi-arrow-left-right" v-tooltip.top="'Синхронизировать размер'"
          :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>
        <Button text rounded icon="mdi mdi-chevron-down" v-tooltip.top="''"
          :pt="{ root: { style: 'box-shadow:none;width:20px;height:32px;margin-left:-8px' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>

      <Button text rounded icon="mdi mdi-dresser-outline" v-tooltip.top="'Показать в дереве групп'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

      <Divider layout="vertical" style="margin:4px"></Divider>

      <Button text rounded icon="mdi mdi-plus-box-outline" v-tooltip.top="'Создать объекты'"
        :pt="{ root: { style: 'box-shadow:none;width:32px;height:32px' }, icon: { style: 'font-size:20px' } }"></Button>

    </template>
  </Toolbar>
  <Menu ref="pasteMenu" :model="pasteMenuItems" popup style="width:300px"></Menu>
  <OverlayPanel ref="colorPickerBackground">
    <StartColorPicker></StartColorPicker>
  </OverlayPanel>
  <OverlayPanel ref="colorPickerLine">
    <StartColorPicker></StartColorPicker>
  </OverlayPanel>
</template>
<script setup>
import {ref} from 'vue';
import StartColorPicker from './ColorPicker.vue';

const colorPickerBackground = ref();
const colorPickerBackgroundToggle = (event) => colorPickerBackground.value.toggle(event);

const colorPickerLine = ref();
const colorPickerLineToggle = (event) => colorPickerLine.value.toggle(event);


const pasteMenu = ref();
const pasteMenuToggle = (event) => pasteMenu.value.toggle(event);
const pasteMenuItems = ref([
  {label:'Копия экземпляра',icon:'mdi mdi-content-paste i20'},
  {label:'Копия определения',icon:'mdi mdi-content-paste i20'},
]);
</script>