<template>
  <h3>Последние действия</h3>
  <div v-for="activity in activities">
    <router-link :to="'/prodops/activity/'+activity.id">
    {{ activity.name }}
  </router-link>
  </div>
</template>
<script setup>
import { ref,watch } from 'vue';
import { sql } from '#/sql';
const props = defineProps(['actorId']);

const activities = ref([]);
watch(()=>props.actor,load);
load();
async function load(){
  if(props.actorId) {
    activities.value = await sql({ all: 'Activity', where: {actor:props.actorId} });
  }
};
</script>