<template>
  <h2>Мои портфели</h2>
  <div v-for="portfolio in portfolios">
    <router-link :to="'/prodops/portfolio/'+portfolio.id">
    {{ portfolio?.name }}
  </router-link>
  </div>
</template>
<script setup>
import { ref,watch } from 'vue';
import { useAppStore } from '#/pviews/App/Store';
import { sql } from '#/sql';
const appStore = useAppStore();

const portfolios = ref([]);
watch(() => appStore.actor, async (actor) => {
  if (appStore.actor) {
    portfolios.value = await sql({
      all: `
    SELECT Product.* FROM Product
    LEFT JOIN ProductType ON Product.type = ProductType.id
    WHERE ProductType.code = 'PPORTFOLIO' AND actor = @actorId
  `, params: { actorId: appStore.actor.id }
    });
  }
});
</script>