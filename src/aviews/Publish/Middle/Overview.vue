<template>
  <div style="display:flex;flex-direction: row-reverse;">
    <div style="display: flex;flex-direction: column;padding:12px">
      <div>17 мая 2023 г.</div>
      <div style="font-size:12px">Последнее изменение</div>
    </div>
  </div>
  
  <div class="flex align-items-center">
    <div class="mdi mdi-information-outline text-2xl p-2"></div>
    <div class="text-2xl">Обзор</div>
  </div>
  <Divider></Divider>
  <div class="p-2">
  <p>Этот вариант бизнес-процесса является кандидатом автоматизации для проекта «Цифровизация HR». Процесс «Поиск соискателей» включает в себя все действия, которые необходимы и возможны для приема заявок на открытую вакансию.</p>
</div>


<div class="flex align-items-center">
    <div class="mdi mdi-information-outline text-2xl p-2"></div>
    <div class="text-2xl">Дорожки (пулы)</div>
  </div>
  <Divider></Divider>
  <div class="flex align-items-center">
    <div class="p-2">Кандидат</div>
    <div class="p-2">Поиск кандидата</div>
  </div>

  <div class="flex align-items-center">
    <div class="mdi mdi-information-outline text-2xl p-2"></div>
    <div class="text-2xl">Дeйствия</div>
  </div>
  <Divider></Divider>


  <DataTable :value="data">
    <Column field="name" header="Имя"></Column>
    <Column field="text" header="Описание"></Column>
    <Column field="roles" header="Роли"></Column>
    <Column field="input" header="Вход"></Column>
    <Column field="output" header="Выход"></Column>
    <Column field="systems" header="Системы ИТ"></Column>
</DataTable>
</template>
<script setup>
import { ref } from 'vue';

const data = [
  {name:'Разработать приложение на поиск кандидата',text:'',roles:'Менеджер по рекрутингу',input:'',output:'',systems:''},
  {name:'Выбрать канал для размещения объявления',text:'',roles:'Менеджер по рекрутингу',input:'',output:'',systems:''},
  {name:'Опубликовать объявление о найме',text:'',roles:'Менеджер по рекрутингу',input:'',output:'',systems:''},
  {name:'Проверить полноту объявления',text:'',roles:'Менеджер по рекрутингу',input:'',output:'',systems:'Система для рекрутинга'},
];
</script>