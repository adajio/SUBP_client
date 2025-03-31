<template>
  <h2>Действия
    <span v-if="actor">пользователя
      <router-link :to="'/prodops/actor/' + (actor.id || 0)">
        {{ actor.name }}
      </router-link>
    </span>
  </h2>
  <div v-for="activity in activities">
    <router-link :to="'/prodops/activity/' + activity.id">
      {{ activity.name }}
    </router-link>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { sql, all } from '#/sql';

const props = defineProps(['actorId']);
const activities = ref([]);
const actor = ref();
load();

async function load() {
  if (props.actorId) {
    actor.value = await sql({ get: 'Actor', id: props.actorId });
    products.value = await sql({all:'Activity', where:{actor:props.actorId}});
  }
}


</script>