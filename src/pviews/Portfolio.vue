<template>
  <h2>{{ portfolio.name }}</h2>
  <div>Портфель</div>
  <div v-for="product in products">
    <router-link :to="'/prodops/product/' + product.id">
      {{ product.name }}
    </router-link>
  </div>
  <CardArtefacts :product="portfolioId"></CardArtefacts>
</template>
<script setup>
import { ref } from 'vue';
import { sql, all } from '#/sql';

const props = defineProps(["portfolioId"]);
const portfolio = ref({});
const products = ref([]);
load();
async function load() {
  portfolio.value = await sql({ get: 'Product', id: props.portfolioId });
  products.value = await sql({ all: 'Product', where: { parent: props.portfolioId } });
}

</script>