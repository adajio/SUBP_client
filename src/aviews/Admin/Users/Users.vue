<template>

<!-- <Breadcrumb :model="breadcrumbs" :pt="{
    root: { style: 'padding:0;border:none;box-shadow:none' },
    icon: { style: 'font-size:20px' }
  }"></Breadcrumb> -->
  <div style="display:flex;justify-content: space-between;align-items: center;">
    <h1>Пользователи</h1>
    <div style="display:flex">
      <Button label="Пригласить пользователей" icon="mdi mdi-plus" rounded :pt="{ icon: { style: 'font-size:20px' } }"></Button>
      <Button icon="mdi mdi-dots-vertical" text rounded :pt="{ icon: { style: 'font-size:20px' } }"></Button>
    </div>
    
  </div>

  <div style="height:calc(100vh - 340px)">
    <DataTable :value="userStore.users" v-model:filters="filters" :globalFilterFields="['name', 'email']" scrollable
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

      <Column header="Имя" field="name" sortable style="width:600px">
        <template #body="slotProps">
          <div style="display:flex;align-items: center;">
            <Avatar :label="slotProps.data.nick" class="mr-3" style="background-color:var(--primary-700); color: #ffffff"
              shape="circle" />
            <div style="display:flex;flex-direction: column;">
              <div>{{ slotProps.data.name }}</div>
              <div style="font-size:12px;">{{ slotProps.data.email }}</div>
            </div>
          </div>
        </template>
      </Column>
      <Column header="Роли и права">
        <template #body="slotProps">
          <div style="display:flex; flex-wrap:wrap">
            <div v-for="right in slotProps.data.rights" style="display: flex;align-items: center;padding:8px;">
              <div :class="right.icon" style="font-size:20px;padding:4px;"></div>
              {{ right.name }}
            </div>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { useUserStore } from '../../../stores/User';

const userStore = useUserStore();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'email': { value: null, matchMode: FilterMatchMode.CONTAINS },
});


</script>