<template>
  <div class="p-4">
    <div style="display:flex;justify-content: space-between;align-items: center;">
      <h1>Процессы</h1>
      <div style="display:flex">
        <Button icon="mdi mdi-filter-outline" text rounded :pt="{ icon: { style: 'font-size:20px' } }"></Button>
        <Button icon="mdi mdi-export" text rounded :pt="{ icon: { style: 'font-size:20px' } }"></Button>
        <Button icon="mdi mdi-refresh" text rounded :pt="{ icon: { style: 'font-size:20px' } }"></Button>
      </div>

    </div>

    <div style="height:calc(100vh - 340px)">
      <DataTable 
        :class="`p-datatable-sm`"
        :value="processes" showGridlines scrollable scrollHeight="flex"
        :pt="{ header: { style: 'padding-top:0;padding-bottom: 0;' } }" paginator :rows="5"
        :rowsPerPageOptions="[50, 100]" tableStyle="min-width: 50rem"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="с {first} по {last} из {totalRecords}">

        <!-- <template #paginatorstart>
          <Button type="button" icon="mdi mdi-refresh i20" text />
        </template>
        <template #paginatorend>
          <Button type="button" icon="mdi mdi-download i20" text />
        </template> -->
        <template #header>
        </template>

        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="context" header="Контекст"></Column>
        <Column field="status" header="Состояние"></Column>
        <Column field="business_status" header="Бизнес-статус"></Column>
        <Column field="start_date" header="Время начала"></Column>
        <Column field="finish_date" header="Время окончания"></Column>
        <Column field="user_name" header="Имя пользователя"></Column>
        <Column field="process_name" header="Имя процесса"></Column>
        <Column field="process_id" header="ID экземпляра процесса"></Column>

      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const processes = [
  { context: 'Запуск модели', status: 'Выполнено', business_status: '', start_date: '2023-03-21 17:37:51', finish_date: '2023-03-21 17:37:52', user_name: 'infoig2833@gmail.com', process_name: 'Процесс подачи документов', process_id: 'а84еас43-aece-4677-6663-311' },
  { context: 'ИТ-ландшафт', status: 'Выполнено', business_status: 'Отменено', start_date: '2023-03-20 07:19:35', finish_date: '2023-03-20 07:19:38', user_name: 'infoig2833@gmail.com', process_name: 'Запрос на изменение', process_id: 'ff1b2d8a-fe41-4435-b9ed-b54.' },
];

</script>