<template>
  <h2>Моя статистика</h2>
  <div class="flex">
    <div class="flex flex-column">
      <router-link :to="'/prodops/portfolios/actor/' + (appStore.actor.id||'0')">
        <div>Портфели</div>
        <div>{{ stats.portfolios }}</div>
      </router-link>
    </div>
    <div>
      <router-link :to="'/prodops/products/actor/' + (appStore.actor.id||'0')">
        <div class="">Продукты</div>
        <div class="">{{ stats.products }}</div>
      </router-link>
    </div>
    <div>
      <router-link :to="'/prodops/pages/actor/' + (appStore.actor.id||'0')">

        <div class="">Страницы</div>
        <div class="">{{ stats.pages }}</div>
      </router-link>
    </div>
    <div>
      <router-link :to="'/prodops/tasks/actor/' + (appStore.actor.id||'0')">
        <div>Задачи</div>
        <div class="">{{ stats.tasks }}</div>
      </router-link>
    </div>
    <div>
      <router-link :to="'/prodops/activities/actor/' + (appStore.actor.id||'0')">

        <div class="">Активности</div>
        <div class="">{{ stats.activities }}</div>
      </router-link>
    </div>
    <div>
      <router-link :to="'/prodops/artefacts/actor/' + (appStore.actor.id||'0')">

        <div class="">Артефакты</div>
        <div class="">{{ stats.artefacts }}</div>
      </router-link>
    </div>
    <div>
      <router-link :to="'/prodops/methods/actor/' + (appStore.actor.id||'0')">

        <div class="">Методологии</div>
        <div class="">{{ stats.methods }}</div>
      </router-link>
    </div>
    <div>
      <router-link :to="'/prodops/integrations/actor/' + (appStore.actor.id||'0')">
        <div class="">Интеграции</div>
        <div class="">{{ stats.integrations }}</div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { get } from '#/sql';
import { useAppStore } from '#/pviews/App/Store';
const appStore = useAppStore();

const stats = ref({});

watch(() => appStore.actor, async (actor) => {
  const params = { actorId: actor.id };

  stats.value = {
    portfolios: (await get(`
      SELECT COUNT(*) AS count
      FROM Product INNER JOIN ProductType 
      ON Product.type = ProductType.id 
      WHERE Product.actor = @actorId AND ProductType.code = 'PPORTFOLIO'
      `, params)).count,
    products: (await get(`
      SELECT COUNT(*) AS count
      FROM Product INNER JOIN ProductType 
      ON Product.type = ProductType.id 
      WHERE Product.actor = @actorId AND ProductType.code = 'PPRODUCT'
      `, params)).count,
    pages: (await get(`
      SELECT COUNT(*) AS count
      FROM Page 
      WHERE Page.actor = @actorId
      `, params)).count,
    tasks: (await get(`
      SELECT COUNT(*) AS count
      FROM Task 
      WHERE Task.actor = @actorId
      `, params)).count,
    activities: (await get(`
      SELECT COUNT(*) AS count
      FROM Activity 
      WHERE Activity.actor = @actorId
      `, params)).count,
    artefacts: (await get(`
      SELECT COUNT(*) AS count
      FROM Artefact 
      WHERE Artefact.actor = @actorId
      `, params)).count,
    methods: (await get(`
      SELECT COUNT(*) AS count
      FROM Method 
      WHERE Method.actor = @actorId
      `, params)).count,
    integrations: (await get(`
      SELECT COUNT(*) AS count
      FROM Integration 
      WHERE Integration.actor = @actorId
      `, params)).count,

  };

});

</script>