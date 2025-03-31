<template>
  <h2>Продукты
    <span v-if="actor">пользователя
      <router-link :to="'/prodops/actor/' + (actor.id || 0)">
        {{ actor.name }}
      </router-link>
    </span>
  </h2>
  <div v-for="product in products">
    <router-link :to="'/prodops/product/' + product.id">
      {{ product.name }}
    </router-link>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { sql, all } from '#/sql';

const props = defineProps(['actorId']);
const products = ref([]);
const actor = ref();
load();

async function load() {
  if (props.actorId) {
    actor.value = await sql({ get: 'Actor', id: props.actorId });
    products.value = await all(`
      SELECT Product.* FROM Product
      INNER JOIN ProductType
      ON Product.type = ProductType.id
      WHERE ProductType.code = 'PPRODUCT' AND Product.actor = @actorId
      ORDER BY Product.name`,
      { actorId: props.actorId });
  }
}


</script>