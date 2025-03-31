<template>
  <h2>Мои продукты</h2>
  <div v-for="product in products">
    <router-link :to="'/prodops/product/' + product.id">
      {{ product.name }}
    </router-link>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useAppStore } from '#/pviews/App/Store';
import { sql } from '#/sql';
const appStore = useAppStore();

const products = ref([]);
watch(() => appStore.actor, async (actor) => {
  if (appStore.actor) {
    products.value = await sql({
      all: `
    SELECT Product.* FROM Product
    LEFT JOIN ProductType ON Product.type = ProductType.id
    WHERE ProductType.code = 'PPRODUCT' AND actor = @actorId
  `, params: { actorId: appStore.actor.id }
    });
  }
});
</script>