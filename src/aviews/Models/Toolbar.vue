<template>
  <Toolbar :pt="{ root: { style: 'padding:0px;border-radius: 0;' } }">
    <template #start>
      <Button icon="mdi mdi-arrow-up" text rounded v-tooltip="'На уровень выше'"
        :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } }"></Button>
      <Divider layout="vertical" style="margin:0"></Divider>
      <div class="p-buttonset">
        <Button icon="mdi mdi-content-copy" text rounded v-tooltip="''"
          :pt=" { root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } } "></Button>
        <Button icon="mdi mdi-content-cut" text rounded v-tooltip="''"
          :pt=" { root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } } "></Button>
        <Button icon="mdi mdi-form-textbox" text rounded v-tooltip="''"
          :pt=" { root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } } "></Button>
        <Button icon="mdi mdi-delete-outline" text rounded v-tooltip="''"
          :pt=" { root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } } "></Button>
      </div>
      <Divider layout="vertical" style="margin:0"></Divider>
      <Button icon="mdi mdi-refresh" text rounded  v-tooltip="'Обновить'"
        :pt=" { root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } } "
        @click="modelsStore.areaGroupsRefresh"></Button>
      <Divider layout="vertical" style="margin:0"></Divider>
      <SplitButton icon="mdi mdi-import" label="Импорт" text rounded  v-tooltip="''"
      :model=" importMenuItems " :pt="
        {
          root: { style: 'box-shadow:none' },
          button: { icon: { style: 'font-size:20px' } },
          menu: { root: { style: 'width:300px' }, icon: { style: 'font-size:20px' } },
          menuButton: { con: { style: 'font-size:20px' } },
        }
      "></SplitButton>

      <Divider layout="vertical" style="margin:0"></Divider>
      <SplitButton icon="mdi mdi-card-multiple-outline" label="Варианты" text rounded  v-tooltip="''"
      :model=" variantsMenuItems " :pt="
        {
          root: { style: 'box-shadow:none' },
          button: { icon: { style: 'font-size:20px' } },
          menu: { root: { style: 'width:300px' }, icon: { style: 'font-size:20px' } },
          menuButton: { con: { style: 'font-size:20px' } },
        }
      "></SplitButton>

      <Divider layout="vertical" style="margin:0"></Divider>
      <Button icon="mdi mdi-folder-move-outline" text rounded  v-tooltip="''"
      label="Переместить"
        :pt=" { root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } } "></Button>

      <Divider layout="vertical" style="margin:0"></Divider>
      <Button icon="mdi mdi-card-plus-outline" text rounded  v-tooltip="''"
      label="Создать объекты"
        :pt=" { root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } } "></Button>

      <Divider layout="vertical" style="margin:0"></Divider>
      <Button icon="mdi mdi-folder-plus-outline" text rounded  v-tooltip="''"
      label="Создать группу"
        :pt=" { root: { style: 'box-shadow:none' }, icon: { style: 'font-size:20px' } } "></Button>

    </template>
    <template #end>
      <Button label="Создать модель" rounded  v-tooltip="''"
      icon="mdi mdi-plus" @click="router.push('/arahis/editor')" :pt="
        {
          root: { style: 'padding:8px 16px;margin:4px' },
          icon: { style: 'font-size:20px' }
        }
      "></Button>
    </template>
  </Toolbar>


  <ImportAE v-model:visible="importAEVisible"></ImportAE>
  <VariantGroups v-model:visible="variantGroupsVisible" @success="variantGroupsSuccess"></VariantGroups>

</template>
<script setup>
import { ref } from 'vue';
import router from '../../router';
import ImportAE from './ImportAE.vue';
import VariantGroups from './Variant/Groups.vue';

import {useModelsStore} from './Store.js';
const modelsStore = useModelsStore();


const emit = defineEmits(['refresh:areaGroups']);

const importAEVisible = ref();

const importMenuItems = ref([
  {
    label: 'Импортировать модель ARIS и ARIS Express', icon: 'mdi mdi-import', command: () => {
      importAEVisible.value = true;
    }
  },
  { label: 'Импорт диаграммы BPMN', icon: 'mdi mdi-import' },
  {
    label: 'Импортировать модель diagram.net (draw.io)', icon: 'mdi mdi-import', command: () => {
      importAEVisible.value = true;
    }
  },
  { label: 'Импорт файлов Visio', icon: 'mdi mdi-import' },
]);

const variantGroupsVisible = ref();
const importAESuccess = () => {
  importAEVisible.value=false;
  emit('refresh:areaGroups');
}

const variantsMenuItems = ref([
  { label: 'Создать вариант', icon: 'mdi mdi-card-multiple-outline',command: () => {
      variantGroupsVisible.value = true;
    } },
]);

const variantGroupsSuccess = () => {
  variantGroupsVisible.value=false;
  // emit('refresh:areaGroups');
}


</script>