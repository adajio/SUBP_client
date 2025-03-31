<template>
  <div class="surface-card p-5 shadow-2 border-round flex-auto">
    <div class="text-900 font-semibold text-lg mt-3">Роли участников</div>
    <Divider></Divider>
    <DataTable :value="member_types" editMode="cell" showGridlines stripedRows tableStyle="min-width: 50rem">
      <Column field="member_type.seq" header="№"></Column>
      <Column field="member_type.name" header="Роль"></Column>
      <Column field="member_type.text" header="Описание"></Column>
      <Column field="member_type.min" header="Мин."></Column>
      <Column field="member_type.max" header="Макс."></Column>
  </DataTable>


  </div>
</template>
<script setup>
import {ref} from 'vue';
import axios from 'axios';
import { API_URL } from '../../../constants';
const props = defineProps(['method']);
const member_types = ref([]);

axios.post(`${API_URL}/api/get/method/member_types`, { id: props.method.id })
  .then(({data}) => {
    console.log(145,data);
    member_types.value = data.member_types;
  });

</script>