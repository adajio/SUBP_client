<template>
  <h2>Портфели
    <span v-if="actor">пользователя
      <router-link :to="'/prodops/actor/' + (actor.id || 0)">
        {{ actor.name }}
      </router-link>
    </span>
  </h2>
  <div v-for="portfolio in portfolios">
    <router-link :to="'/prodops/portfolio/' + portfolio.id">
      {{ portfolio.name }}
    </router-link>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { sql, all } from '#/sql';

const props = defineProps(['actorId']);
const portfolios = ref([]);
const actor = ref();
load();

async function load() {
  if (props.actorId) {
    actor.value = await sql({ get: 'Actor', id: props.actorId });
    portfolios.value = await all(`
      SELECT Product.* FROM Product
      INNER JOIN ProductType
      WHERE ProductType.code = 'PPORTFOLIO' AND Product.actor = @actorId
      ORDER BY Product.name`,
      { actorId: props.actorId });
  }
}


</script>