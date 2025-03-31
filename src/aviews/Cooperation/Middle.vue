<template>
  <div class="flex flex-column p-4">
    <div class="p-4">
      <Textarea :model="text" placeholder="Опубликуйте что-нибудь в вашем канале. Используйте символ @,
   чтобы создать ссылки на пользователей." class="w-full h-6rem"></Textarea>
    </div>
    <div class="flex justify-content-between align-items-center px-4">
      <TabMenu :model="tabMenuItems"></TabMenu>
      <InputText placeholder="Ввести условие поиска" class="border-round-3xl h-2rem"></InputText>
    </div>
    <div class="flex flex-column p-4">
    <div class="bubble">
        <div class="flex flex-column">
          <a href="#">Александр Киселев</a>
          <p>Обновил карту целей в диаграмме</p>
        </div>
      </div>
    <div class="bubble">Привет!</div>
    <div class="bubble">Привет!</div>
  </div>

  </div>
</template>
<script setup>
import { ref } from 'vue';

const text = ref('');
const tabMenuItems = ref([
  { label: 'Новые' },
  { label: 'Популярные' },
  { label: 'Активные' },
]);


</script>
<style scoped>
.bubble {
  position: relative;
  background: var(--surface-ground);
  color: var(--primary-text-color);
  /* font-family: Arial;
  font-size: 20px; */
  /* line-height: 120px;
  text-align: center; */
  width: 100%;
  height: 120px;
  border-radius: 10px;
  padding: 10px;
  margin:10px;
}

.bubble:after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  z-index: 1;
  border-style: solid;
  border-color: transparent var(--surface-ground);
  border-width: 15px 41px 15px 0;
  top: 31%;
  left: -41px;
  margin-top: -15px;
}
</style>