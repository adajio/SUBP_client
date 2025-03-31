<template>
  <div style="display:flex;justify-content: space-between; align-items: center;width:100%;">
    <div>
      <Breadcrumb :home="home" :model="breadcrumbs" :pt="{ root: { style: 'border:0' } }"></Breadcrumb>
    </div>
    <div>
      <Paginator :totalRecords="12" :first="0" :rows="10"
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first}-{last} из {totalRecords}"></Paginator>
    </div>
  </div>


  <DataTable :value="data">
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

    <Column field="name" header="Имя">

      <template #body="slotProps">
        <div style="display:flex;align-items: center;">
          <div class="mdi mdi-file-outline" style="font-size:20px; color:var(--primary-color);padding:8px;"></div>
          <div style="display:flex;flex-direction: column;">
            <div style="">{{ slotProps.data.name }} </div>
            <div style="font-size:12px;">Изменено: {{ slotProps.data.change_date }}</div>
          </div>
        </div>
      </template>

    </Column>

    <Column field="type" header="Тип файла"></Column>
    <Column field="status" header="Состояние"></Column>
    <Column  header="">
      <template #body="slotProps">
        <div style="display:flex;justify-content: flex-end;">
        <Button text rounded icon="mdi mdi-tray-arrow-up" :pt="{icon:{style:'font-size:20px'}}"></Button>
        <Button text rounded icon="mdi mdi-tray-arrow-down" :pt="{icon:{style:'font-size:20px'}}"></Button>
        <Button text rounded icon="mdi mdi-information-box-outline" :pt="{icon:{style:'font-size:20px'}}"></Button>
        <Button text rounded icon="mdi mdi-folder-move-outline" :pt="{icon:{style:'font-size:20px'}}"></Button>
        <Button text rounded icon="mdi mdi-delete-outline" :pt="{icon:{style:'font-size:20px'}}"></Button>
      </div>
      </template>
    </Column>
  </DataTable>
</template>
<script setup>
import { ref } from 'vue';

const home = ref(
  { label: 'Хранилище документов' }
);

const breadcrumbs = ref([
  { label: 'Общая папка группы' },
  { label: 'Экспорт данных' },
]);

const data = [
  { name: 'Организационная структура', type: 'Excel', status: 'Новое', change_date: '24.05.2023 12:34' },
  { name: 'Штатное расписание', type: 'Word', status: 'Новое', change_date: '24.05.2023 12:54' },

];

</script>