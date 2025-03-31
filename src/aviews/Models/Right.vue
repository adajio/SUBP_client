<template>
  <div class="p-2">
    <h4>Сведения</h4>
    <h3>
      {{ modelsStore.currentModel?.name }}
    </h3>
    <Voix api="subpis/get/attrs" :params="{
      AreaID:modelsStore.currentModel?.AreaID,
      GroupID:modelsStore.currentModel?.GroupID,
      ModelID:modelsStore.currentModel?.ModelID,
      ObjDefID:modelsStore.currentModel?.ObjDefID
      }" #="{attrs}">
      <DataTable :value="attrs">
        <Column field="type" header="Атрибут">
        <template #body="d">
          {{ {undefined:'','AT_NAME':'Название','AT_DESC':'Описание'}[d.data.type] }}
        </template>
      </Column>
        <Column field="value" header="Значение"></Column>
      </DataTable>
      <!-- <div v-for="attr in attrs" class="flex">
        <div>{{ {undefined:'','AT_NAME':'Название','AT_DESC':'Описание'}[attr.type] }}</div>
        <div>{{ attr.value }}</div>
      </div> -->

    </Voix>
    <!-- {{ modelsStore.currentModel }} -->
  </div>
</template>
<script setup>
import {voix} from '#/voix';
import { useModelsStore } from './Store.js';
const modelsStore = useModelsStore();
</script>