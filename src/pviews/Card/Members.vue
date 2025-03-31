<template>
  <div v-for="member in members">
    {{ member.member_role }}
    {{ member.name }}
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { sql } from '#/sql';

const props = defineProps(['product', 'team','task']);
const members = ref([]);
(async () => {
    if(Object.values(props).some(d=>d)){
      members.value = await sql({ all: `
      SELECT 
        Member.role AS member_role,
        Actor.*
      FROM Member
      INNER JOIN Actor ON Member.member = Actor.id
      `, where: props })
    };
})();
</script>