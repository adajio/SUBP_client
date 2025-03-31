<template>
  <div class="p-8">
    <h1>Интерфейс пользователя</h1>

    <div class="flex flex-column">
      <div class="flex align-items-center p-2">
        <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="true" />
        <label for="ingredient1" class="ml-2">Стандартные параметры и настройки</label>
      </div>
      <div class="flex align-items-center p-2">
        <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="false" />
        <label for="ingredient2" class="ml-2">Пользовательские параметры и настройки</label>
      </div>
    </div>

    <TabView>
      <TabPanel header="Главная">
        <InterfaceHome></InterfaceHome>
      </TabPanel>
      <TabPanel header="Корректировка шрифта и цвета">
        <InterfaceFont></InterfaceFont>
      </TabPanel>
      <TabPanel header="Выбрать язык">
        <InterfaceLanguage></InterfaceLanguage>
      </TabPanel>
      <TabPanel header="Вставить логотип">
        <InterfaceLogotype></InterfaceLogotype>
      </TabPanel>
      <TabPanel header="Вставить фон">
        <InterfaceBackground></InterfaceBackground>
      </TabPanel>
    </TabView>


  </div>
</template>
<script setup>
import { ref } from 'vue';
import InterfaceHome from './Interface/Home.vue';
import InterfaceBackground from './Interface/Background.vue';
import InterfaceFont from './Interface/Font.vue';
import InterfaceLanguage from './Interface/Language.vue';
import InterfaceLogotype from './Interface/Logotype.vue';

</script>