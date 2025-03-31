<template>
  <h2>Задачи
    <span v-if="actor">пользователя
      <router-link :to="'/prodops/actor/' + (actor.id || 0)">
        {{ actor.name }}
      </router-link>
    </span>
  </h2>
  <div v-for="task in tasks">
    <router-link :to="'/prodops/task/' + task.id">
      {{ task.name }}
    </router-link>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { sql  } from '#/sql';

const props = defineProps(['actorId']);
const tasks = ref([]);
const actor = ref();


(async function () {
  if (props.actorId) {
    actor.value = await sql({ get: 'Actor', id: props.actorId });
    tasks.value = await sql({all:'Task',where:{actor:props.actorId }});
  }
})();


</script>