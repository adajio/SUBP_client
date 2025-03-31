<template>
  <h2>Мои задачи</h2>
  <div v-for="task in tasks">
    <router-link :to="'/prodops/task/' + task.id">
      {{ task.name }}
    </router-link>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useAppStore } from '#/pviews/App/Store';
import { sql } from '#/sql';
const appStore = useAppStore();

const tasks = ref([]);
watch(() => appStore.actor, async (actor) => {
  if (appStore.actor) {
    tasks.value = await sql({
      all: 'Task', where: { actor: appStore.actor.id }
    });
  }
});
</script>