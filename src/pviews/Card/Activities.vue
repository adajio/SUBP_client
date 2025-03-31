<template>
  <h3>Последние действия</h3>
  <div v-for="activity in activities">
    <router-link :to="'/prodops/activity/'+activity.id">
    {{ activity.name }}
  </router-link>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { sql } from '#/sql';
import { watch } from 'vue';

const props = defineProps(['actor', 'method', 'integration', 'product', 'page', 'task', 'parent']);
const activities = ref([]);
(async () => {
    if(Object.values(props).some(d=>d)){
      activities.value = await sql({ all: 'Activity', where: props })
    };
})();
</script>