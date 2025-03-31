<template>
  <div class="surface-card p-5 shadow-2 border-round flex-auto">
    <div class="text-900 font-semibold text-lg mt-3">Этапы</div>
    <Divider></Divider>
    <DataTable :value="stages" editMode="cell" showGridlines stripedRows tableStyle="min-width: 50rem">
      <Column field="kind.seq" header="№"></Column>
      <Column field="kind.code" header="Код"></Column>
      <Column field="kind.name" header="Этап"></Column>
      <Column field="kind.text" header="Описание"></Column>
  </DataTable>



  </div>
</template>
<script setup>
import {ref} from 'vue';
import axios from 'axios';
import { API_URL } from '../../../constants';
const props = defineProps(['method']);
const stages = ref([]);

axios.post(`${API_URL}/api/get/method/stages`, { id: props.method.id })
  .then(({data}) => {
    console.log(145,data);
    stages.value = data.stages;
  });

</script>