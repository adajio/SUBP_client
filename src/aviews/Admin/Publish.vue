<template>
  <div class="p-4">
    <h1>Публикации</h1>
    <div class="flex align-items-center justify-content-between">
      <span class="p-input-icon-left flex align-items-center">
        <i class="mdi mdi-magnify" />
        <InputText v-model="value1" placeholder="Поиск..." />
      </span>
      <Button text rounded label="Импортировать базу данных" icon="mdi mdi-arrow-up i20"></Button>
    </div>
  </div>

  <div class="flex justify-content-around">
    <Card class="w-3">
      <!-- <template #header>
        <div class="flex justify-content-around">
          <div class="mdi mdi-account-key-outline" style="font-size:100px"></div>
        </div>
      </template> -->
      <template #title>
        <div style="text-align:center">ПАО "Индустрия"</div>
      </template>
      <template #content>
        <div class="flex flex-column">
          <div class="flex align-items-center justify-content-around p-2">
            <Dropdown v-model="language" :options="languages" optionLabel="name" placeholder="Выберите язык" class="w-14rem" />
            </div>
          <div class="flex align-items-center p-2">
            <InputSwitch v-model="checked1" />
            <label for="ingredient1" class="p-2"> Активация </label>
          </div>
          <div class="flex align-items-center p-2">
            <InputSwitch v-model="checked2" />
            <label for="ingredient1" class="p-2"> Автопубликация</label>
          </div>
          <div class="flex align-items-center p-2">
            <InputSwitch v-model="checked3" />
            <label for="ingredient1" class="p-2"> Утверждение</label>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);

const languages = ref([
  {name:'Русский',code:'RU'},
  {name:'Английский',code:'EN'},
  ]);
  const language = ref(languages[0]);

</script>