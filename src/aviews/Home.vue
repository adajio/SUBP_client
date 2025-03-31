<template>
  <LayoutArahis title="Главная" icon="mdi mdi-home-outline">
    <div style="background-image: url(/img/cover/zamok.webp);
    background-position:0 50%;width:100%;padding:150px;">

      <div class="flex flex-column">

        <div style="display: flex;justify-content: space-between;align-items: center;">
          <div style="color:white;">
            <h1>Добро пожаловать, Валентин!</h1>
          </div>
          <div>
            <Button rounded label="Редактировать модель" @click="router.push('/arahis/editor')"></Button>
          </div>
        </div>

        <div class="flex justify-content-between" style="padding:10px 0 10px 0;">
          <h2 class="text-white">Шаблоны</h2>
          <div><a href="#" style="color:white">Вверх</a></div>
        </div>

        <div class="flex justify-content-between align-items-center">
          <router-link v-for="card in modelTypeCards" :to="'/arahis/editor/new/' + card.ModelType">
            <Card style="width: 15em;padding:20px;"
              :pt="{ root: { style: 'background-color: var(' + card.color + ')' } }">
              <template #header>
                <div class="flex justify-content-around">
                  <!-- <img alt="user header" src="/images/usercard.png" /> -->
                  <div :class="[card.icon, card.color]" style="font-size:100px"></div>
                </div>
              </template>
              <template #title>
                <div class="flex justify-content-around">

                  {{ card.name }}</div>
              </template>
            </Card>
          </router-link>
        </div>

        <h2 class="text-white">Избранное</h2>

        <div class="grid align-items-center justify-content-between">
          <router-link v-for="card in favorites" :to="'/arahis/editor/' + card.AreaID + '/' + card.ModelID">
            <Card style="width: 15em;height:200px;padding:20px;margin:10px"
              :pt="{ root: { style: 'background-color: var(' + card.color + ')' } }">
              <template #title>
                <div class="flex justify-content-around">
                  {{ card.Name }}</div>
              </template>
            </Card>
          </router-link>
        </div>


      </div>
    </div>
    <div class="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
      <div class="bg-gray-900">
        <div class="grid">
          <div class="col-12 md:col-3 flex flex-wrap justify-content-start md:mb-0 mb-3">
            <img src="/img/arahis/logo/logo.png" alt="footer sections" width="100" height="50" class="mr-3">
            <div class="text-gray-300 font-bold text-5xl">АРАХИС</div>
          </div>
          <div class="col-12 md:col-3">
            <div class="text-white text-lg mb-4 flex flex-wrap" style="max-width: 290px">ООО "Инфо Индастриз Груп"</div>
            <div class="text-white mb-3"><i class="pi pi-phone surface-800 border-round p-1 mr-2"></i>Москва, Пыжевский
              пер. 5 стр.1 офис 321/2</div>
            <div class="text-white mb-3"><i class="pi pi-inbox surface-800 border-round p-1 mr-2"></i>info@iig.ru</div>
          </div>
          <div class="col-12 md:col-3 text-gray-200">
            <div class="text-white font-bold line-height-3 mb-3">Компания</div>
            <a class="line-height-3 block cursor-pointer mb-2">О нас</a>
            <a class="line-height-3 block cursor-pointer mb-2">Новости</a>
            <a class="line-height-3 block cursor-pointer mb-2">Для инвесторов</a>
            <a class="line-height-3 block cursor-pointer mb-2">Карьера</a>
            <a class="line-height-3 block cursor-pointer">Медиа-кит</a>
          </div>
          <div class="col-12 md:col-3 text-gray-200">
            <div class="text-white font-bold line-height-3 mb-3">Ресурсы</div>
            <a class="line-height-3 block cursor-pointer mb-2">Начало</a>
            <a class="line-height-3 block cursor-pointer mb-2">Обучение</a>
            <a class="line-height-3 block cursor-pointer">Примеры использования</a>
          </div>
        </div>
      </div>

    </div>
  </LayoutArahis>
</template>
<script setup>
import { ref } from 'vue';
import router from '../router';
import { useStorage } from '@vueuse/core';

const modelTypeCards = ref([
  { name: 'VAD', icon: 'mdi mdi-domain', color: '--green-300', ModelType: 'MT_VAL_ADD_CHN_DGM' },
  { name: 'Процессы', icon: 'mdi mdi-domain', color: '--green-300', ModelType: 'MT_EEPC' },
  { name: 'Организация', icon: 'mdi mdi-account-group', color: '--orange-300', ModelType: 'MT_ORG_CHRT' },
  { name: 'ИТ-системы', icon: 'mdi mdi-abacus', color: '--blue-300', ModelType: 'MT_NW_TOPLG' },
  { name: 'Данные', icon: 'mdi mdi-database-outline', color: '--cyan-300', ModelType: 'MT_IEF_DATA_MDL' },
]);

//{ name: 'Примеры', icon: 'mdi mdi-airport', color: '--red-300', ModelType:'' },


const favorites = useStorage('arahis.favorites', [
  { AreaID: 1, Name: 'EEPC диаграмма', ModelID: 'Model.2c----4-----u--', ModelType: 'MT_EEPC' },
  { AreaID: 2, Name: 'Оргдиаграмма',ModelID: 'Model.2c----4-----u--', ModelType: 'MT_ORG_CHRT' },
  { AreaID: 3, Name: 'Оргдиаграмма',ModelID: 'Model.2c----4-----u--', ModelType: 'MT_ORG_CHRT' },
  { AreaID: 4, Name: 'Оргдиаграмма',ModelID: 'Model.2c----4-----u--', ModelType: 'MT_ORG_CHRT' },
  { AreaID: 5, Name: 'Оргдиаграмма',ModelID: 'Model.2c----4-----u--', ModelType: 'MT_ORG_CHRT' },
]);

</script>