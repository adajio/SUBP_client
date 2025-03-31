<template>
  <div>Страница</div>
  <h2>{{ page.name }}</h2>
  <CardArtefacts :page="pageId"></CardArtefacts>
</template>
<script setup>
import {ref} from 'vue';
import {sql} from '#/sql';
const props = defineProps(['pageId']);
const page = ref();
(async () => {
  page.value = await sql({get:'Page', id:props.pageId});
})();
</script>