<template>
  <div class="p-4">
    <h1>Типы моделей</h1>
    <div style="height:calc(100vh - 250px)">
      <DataTable :value="method.models" v-model:filters="filters" :globalFilterFields="['key', 'name', 'apiName_guid']"
        scrollable scrollHeight="flex"
        :pt="{header:{style:'padding-top:0;padding-bottom: 0;'}}">
        <template #header>
          <div class="flex">
            <div class="p-input-icon-left">
              <i class="mdi mdi-magnify" />
              <InputText v-model="filters['global'].value" placeholder="Поиск по названию или ключевому слову..." />
            </div>
            <Button text rounded label="Восстановить оригинальный метод"></Button>
          </div>
        </template>
        <Column header="" field="name">
          <template #body>
            <div class="mdi mdi-shape-outline text-xl text-pink-600"></div>
          </template>
        </Column>
        <Column header="Номер типа" field="key"></Column>
        <Column header="Имя" field="name"></Column>
        <Column header="Имя/GUID API" field="apiName_guid"></Column>
        <Column header="Тип" field="itemKind"
          style="text-overflow:ellipsis;overflow:hidden; white-space:nowrap; max-width:150px">
          <template #body="d">

            {{ d.data.itemKind == 'Default' ? 'По умолч.' :
              (d.data.itemKind == 'Customized' ? 'Изменяемый' :
                (d.data.itemKind == 'DefaultNotConfigurable' ? 'По умолч. не изм.' : 'ПРОЧИЙ'))
            }}

          </template>
        </Column>
        <Column header="Базовый тип" field="originalType"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { useMethodStore } from '../../../stores/Method';

const method = useMethodStore();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'key': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  'name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'apiName_guid': { value: null, matchMode: FilterMatchMode.CONTAINS },
});

</script>