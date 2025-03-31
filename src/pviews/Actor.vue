<template>
  <AppLayout>
    <h2>{{ actor.name }}</h2>
    <div>{{ actor.title }}</div>
    <div>Пользователь</div>

    <h3>Подчиненные</h3>
    <div v-for="a in actors">
      <router-link :to="'/prodops/actor/' + a.id">
        {{ a.name }}
      </router-link>
    </div>

    <CardActivities :actor="actorId"></CardActivities>
    <CardArtefacts :actor="actorId"></CardArtefacts>
    <CardMembers :team="actorId"></CardMembers>
  </AppLayout>
</template>
<script setup>
import { ref } from 'vue';
import { sql } from '#/sql';
import { watch } from 'vue';

const props = defineProps(["actorId"]);
const actor = ref({});
const actors = ref([]);
load();
watch(() => props.actorId, load);


async function load() {
  actor.value = await sql({ get: 'Actor', id: props.actorId });
  actors.value = await sql({ all: 'Actor', where: { parent: props.actorId } });
};

</script>