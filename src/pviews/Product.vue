<template>
  <h2>{{ product?.name }}</h2>
  <div>Продукт</div>
  <div>
    Ответственный 
    <router-link :to="'/prodops/actor/'+(actor?.id||0)">{{ actor?.name }}</router-link>
  </div>
  <div>
    Участники
  </div>
  <CardMembers></CardMembers>
  
  <h3>Этапы</h3>
  <div v-for="stage in stages">
    {{ stage.seq }} {{ stage.name }}
  </div>
  <h3>Страницы</h3>
  <div v-for="page in pages">
    {{ page.seq }} {{ page.name }}
  </div>
  <CardArtefacts :product="productId"></CardArtefacts>
</template>
<script setup>
import { ref } from 'vue';
import { sql } from '#/sql';
const props = defineProps(['productId']);

const product = ref();
const actor = ref();
const stages = ref([]);
const pages = ref([]);

load();
async function load() {
  product.value = await sql({ get: `Product`, id: props.productId });
  actor.value = await sql({ get: `Actor`, id: product.actor });
  stages.value = await sql({
    all: `
    SELECT Page.* FROM Page
    LEFT JOIN PageType ON Page.type = PageType.id
    WHERE Page.product = @productId AND PageType.code = 'STAGE'
    ORDER BY Page.seq
    `, params: { productId: props.productId }
  });
  pages.value = await sql({
    all: `
    SELECT Page.* FROM Page
    LEFT JOIN PageType ON Page.type = PageType.id
    WHERE Page.product = @productId AND PageType.code <> 'STAGE'
    ORDER BY Page.seq
    `, params: { productId: props.productId }
  });
}
</script>