<template>
  <div v-for="artefact in artefacts">
    {{ artefact.name }}
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { sql } from '#/sql';
import { watch } from 'vue';

const props = defineProps(['actor', 'method', 'integration', 'product', 'page', 'task', 'activity', 'parent']);
const artefacts = ref([]);
(async () => {
    if(Object.values(props).some(d=>d)){
      artefacts.value = await sql({ all: 'Artefact', where: props })
    };
})();
</script>