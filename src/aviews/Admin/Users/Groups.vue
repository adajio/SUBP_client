<template>
    <!-- <Breadcrumb :model="breadcrumbs" :pt="{
    root: { style: 'padding:0;border:none;box-shadow:none' },
    icon: { style: 'font-size:20px' }
  }"></Breadcrumb> -->
  <div style="display:flex;justify-content: space-between;align-items: center;">
    <h1>Группы</h1>
    <div style="display:flex">
      <Button label="Добавить группу" icon="mdi mdi-plus" rounded :pt="{ icon: { style: 'font-size:20px' } }"></Button>
      <Button icon="mdi mdi-dots-vertical" text rounded :pt="{ icon: { style: 'font-size:20px' } }"></Button>
    </div>
    
  </div>

  <div style="height:calc(100vh - 340px)">
    <DataTable :value="userStore.groups" v-model:filters="filters" :globalFilterFields="['name', 'email']" scrollable
      scrollHeight="flex"
      :pt="{header:{style:'padding-top:0;padding-bottom: 0;'}}">
      <template #header>
        <div class="flex">
          <div class="p-input-icon-left">
            <i class="mdi mdi-magnify" />
            <InputText v-model="filters['global'].value" placeholder="Поиск по названию или ключевому слову..." />
          </div>
          <Button label="Обновить" icon="mdi mdi-refresh" text rounded
            :pt="{ icon: { style: 'font-size:20px' } }"></Button>
        </div>
      </template>
      <Column selectionMode="single" headerStyle="width: 3rem"></Column>
      <Column header="Имя" field="name" sortable style="width:600px">
        <template #body="slotProps">
          <div style="display:flex;align-items: center;" @click="groupSidebarVisible=true">
            <Avatar :label="slotProps.data.nick" class="mr-3" style="background-color:var(--primary-700); color: #ffffff"
              shape="circle" />
            <div style="display:flex;flex-direction: column;">
              <div>{{ slotProps.data.name }}</div>
            </div>
          </div>
        </template>
      </Column>
      <Column header="Описание" field="text">
      </Column>
    </DataTable>
  </div>

  <Sidebar v-model:visible="groupSidebarVisible" style="width:500px" position="right">
    <GroupsGroup></GroupsGroup>
  </Sidebar>

</template>
<script setup>
import {ref} from 'vue';
import GroupsGroup from './Group.vue';
// const breadcrumbs = ref([
//   { icon: 'mdi mdi-home-outline', label: 'Домашняя страница' },
//   { label: 'Управление пользователями' },
//   { label: 'Пользователи' },
// ]);

import { FilterMatchMode } from 'primevue/api';
import { useUserStore } from '../../../stores/User';

const userStore = useUserStore();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'text': { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const groupSidebarVisible = ref();



</script>