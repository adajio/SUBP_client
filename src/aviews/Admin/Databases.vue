<template>
  <div class="p-4">
    <div style="display:flex;justify-content: space-between;align-items: center;">
      <h1>Все доступные базы данных</h1>
      <div style="display:flex">
        <Button label="Создать базу данных" icon="mdi mdi-plus" rounded
          :pt="{ icon: { style: 'font-size:20px' } }"></Button>
        <Button label="Восстановить" icon="mdi mdi-database-import-outline" text rounded
          :pt="{ icon: { style: 'font-size:20px' } }"></Button>
      </div>

    </div>

    <div style="height:calc(100vh - 340px)">
      <DataTable :value="databases" v-model:filters="filters" :globalFilterFields="['name', 'email']" scrollable
        scrollHeight="flex" :pt="{ header: { style: 'padding-top:0;padding-bottom: 0;' } }">
        <template #header>
          <div class="flex">
            <div class="p-input-icon-left">
              <i class="mdi mdi-magnify" />
              <InputText v-model="filters['global'].value" placeholder="Поиск по названию или ключевому слову..." />
            </div>
            <Button label="Обновить" icon="mdi mdi-refresh" text rounded
              :pt="{ icon: { style: 'font-size:20px' } }"></Button>
          </div>
        </template>
        <!-- <Column selectionMode="single" headerStyle="width: 3rem"></Column> -->
        <Column width:50px>
          <template #body>
            <div class="mdi mdi-database i20"></div>
          </template>
        </Column>
        <Column header="Имя" field="name" sortable style="width:300px"></Column>
        <Column header="Версионность" field="with_versions">
          <template #body="d">
            <Checkbox v-model="d.data.with_versions" disabled></Checkbox>
          </template>
        </Column>
        <Column header="Фильтр" field="filter"></Column>
        <Column header="Язык" field="language"></Column>
        <Column header="Формат шрифта" field="font_format"></Column>
        <Column header="Палитра" field="palette"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);

const databases = ref([
  { name: 'Пример базы АРАХИС', with_versions: true, filter: '<Без названия>', language: 'русский', font_format: 'Стандартный', palette: 'Стандартная палитра АРАХИС' },
  { name: 'ПАО "Индустрия"', with_versions: false, filter: '<Без названия>', language: 'русский', font_format: 'Стандартный', palette: 'Стандартная палитра АРАХИС' },
  { name: 'Облачная БД АРАХИС', with_versions: true, filter: '<Без названия>', language: 'русский', font_format: 'Стандартный', palette: 'Стандартная палитра АРАХИС' },
  { name: 'Arahis Cloud Database', with_versions: true, filter: '<Без названия>', language: 'English', font_format: 'Стандартный', palette: 'Стандартная палитра АРАХИС' },
]);

import { FilterMatchMode } from 'primevue/api';

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'name': { value: null, matchMode: FilterMatchMode.CONTAINS },
});

</script>