<template>
  <div>Задача</div>
  <h2>{{ task.name }}</h2>
  <div>
    <router-link :to="'/prodops/actor/' + (actor.id || 0)">{{ actor.name }}</router-link>
  </div>
  <div>{{ task.text }}
  </div>
  <CardArtefacts :task="taskId"></CardArtefacts>
  <CardMembers :task="taskId"></CardMembers>
</template>
<script setup>
import { ref } from 'vue';
import { sql } from '#/sql';

const props = defineProps(['taskId']);
const task = ref({});
const actor = ref({});

(async function () {
  task.value = await sql({ get: 'Task', id: props.taskId });
  actor.value = await sql({ get: 'Actor', id: task.value.actor });

})();
</script>