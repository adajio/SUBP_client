<template>
  <!-- <div>inside {{ currentGroup }} </div> -->
  <div style="height:100%;display:flex;flex-direction: column;overflow-y: scroll;">
  <Voix api="arahis/get/group-model-objects" 
    :params="modelsStore.currentGroup" 
    #="{ groupModelObjects }">
    
    <div style="display:flex;justify-content: space-between;">
      <TabMenu :model="middleTabItems" :pt="{ icon: { style: 'font-size:20px' } }" />
      <Paginator :totalRecords="12" :first="0" :rows="10"
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first}-{last} из {totalRecords}"></Paginator>
    </div>

    <DataTable :value="groupModelObjects" selectionMode="single" 
    v-model:selection="modelsStore.currentModel" scrollable scrollHeight="flex">
      <!-- <Column selectionMode="single" headerStyle="width: 3rem" ></Column> -->
      <Column field="name" header="Имя" :pt="{bodyCell:{style:'padding:0'}}">
        <template #body="d">
          <div style="display:flex;align-items: center;">
            <div v-if="d.data.type=='Group'" class="mdi mdi-folder-outline" style="font-size:20px; color:var(--yellow-600);padding:8px;"></div>
            <div v-else-if="d.data.type=='Model'" class="mdi mdi-shape-outline" style="font-size:20px; color:var(--primary-color);padding:8px;"></div>
            <div v-else-if="d.data.type=='ObjDef'" class="mdi mdi-card-text-outline" style="font-size:20px; color:var(--blue-600);padding:8px;"></div>
            <div style="display:flex;flex-direction: column;">
              <div style="cursor: pointer;">
                <a v-if="d.data.type=='Model'" target="_blank" :href="'/arahis/editor/id/'+d.data.id">
                  {{ d.data.name }} {{ d.data.Variant?'('+d.data.Variant+')':'' }}
                </a>
                <a v-else-if="d.data.type=='ObjDef'">
                  {{ d.data.name }} {{ d.data.Variant?'('+d.data.Variant+')':'' }}
                </a>
                <div v-else>
                  {{ d.data.name }}
                </div>
                 
              </div>
              <div style="font-size:12px;">{{ d.data.type_name }}</div>
            </div>
          </div>
        </template>
      </Column>
      <Column field="change_date" header="Изменено">
        <template #body="d">
          <div style="display:flex;flex-direction: column;">
            <div style="">{{ d.data.change_date }} </div>
            <div style="font-size:12px;">из {{ d.data.change_user }}</div>
          </div>
        </template>
      </Column>
    </DataTable>
  </Voix>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps(['currentGroup']);
const emit = defineEmits(['update:currentGroup']);

import {useModelsStore} from './Store.js';
const modelsStore = useModelsStore();

const middleTabItems = [
  { label: 'Модели' },
  { label: 'Объекты' },
  { label: 'Показать все' }
];

const data = [
  { name: 'Организационная структура', type: 'Организационная схема', change_date: '01.04.2023 10:22', change_name: 'system' },
  { name: 'HR-Менеджер', type: 'Организационная схема', change_date: '12.04.2023 10:22', change_name: 'infoig221@gmail.com' },

];



</script>