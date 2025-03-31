<template>
  <div>Действие</div>
  <h2>{{ activity.name }}</h2>
  <div>
    <router-link :to="'/prodops/actor/' + (actor.id || 0)">{{ actor.name }}</router-link>
  </div>
  <div>{{ activity.text }}
  </div>
  <CardArtefacts :activity="activityId"></CardArtefacts>
</template>
<script setup>
import { ref } from 'vue';
import { sql } from '#/sql';

const props = defineProps(['activityId']);
const activity = ref({});
const actor = ref({});

(async function () {
  activity.value = await sql({ get: 'Activity', id: props.activityId });
  actor.value = await sql({ get: 'Actor', id: activity.value.actor });

})();
</script>