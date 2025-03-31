<template>

  <h3>Редактировать домашнюю страницу</h3>
  <p>Изменить размещение</p>

  <div class="flex ">
      <div class="flex align-items-center p-2">
        <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="true" />
        <label for="ingredient1" class="ml-2">Грид</label>
      </div>
      <div class="flex align-items-center p-2">
        <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="false" />
        <label for="ingredient2" class="ml-2">Система</label>
      </div>
    </div>


  <h3>Компоненты</h3>
  <div class="flex align-items-center justify-content-between">
    <div>Задать компоненты для этой области</div>
    <Button label="Добавить" rounded></Button>
  </div>
  <DataTable :model="components">
    <Column field="name" header="Название"></Column>
  </DataTable>
  <h3>Восстановление настроек по умолчанию</h3>
  <Button label="Восстановить значения по умолчанию" rounded></Button>


</template>
<script setup>
import {ref} from 'vue';

const components = ref([
  {name:'Компонента №1'}
]);
</script>