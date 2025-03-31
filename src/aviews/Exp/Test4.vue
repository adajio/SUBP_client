<template>
   <h1>Пример №4 - демонстрация работы с базой данных</h1>


   <Voix api="get/home/actor" :id="actor_id" #="{ actor, actors }">
      <div class="flex flex-column">
         {{ actors }}
         <Button rounded icon="mdi mdi-arrow-up" @click="actor_id = actor.parent"></Button>
         <h2>{{ actor?.name }}</h2>

         <DataTable :value="actors" 
            v-model:filters="filters" filterDisplay="row"
            :globalFilterFields="['actor.name', 'actor.title']">
            <template #header>
               <div class="flex justify-content-end">
                  <span class="p-input-icon-left">
                     <i class="pi pi-search" />
                     <InputText v-model="filters['global'].value" placeholder="Поиск слов..." />
                  </span>
               </div>
            </template>
            <Column field="actor.id" header="№"></Column>
            <Column field="actor.code" header="Код"></Column>
            <Column field="actor.name" header="Имя">
               <template #body="d">
                  <div @click="actor_id = d.data.actor.id">
                     {{ d.data.actor.name }}
                  </div>
               </template>
               <template #filter="{ filterModel, filterCallback }">
                  <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"
                     placeholder="Поиск по имени" />
               </template>
            </Column>
            <Column field="actor.title" header="Должность">
               <template #filter="{ filterModel, filterCallback }">
                  <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"
                     placeholder="Поиск по имени" />
               </template>
            </Column>
            <Column header="Иконка">
               <template #body="d">
                  <Avatar :icon="d.data.actor?.design?.icon" shape="circle" size="large"></Avatar>
               </template>
            </Column>
            <Column header="Фото">
               <template #body="d">
                  <Avatar :image="d.data.actor?.design?.image"></Avatar>
               </template>
            </Column>
         </DataTable>
      </div>

      <!-- <ul>
            <li v-for="item in actors">
               <span @click="actor_id = item.actor.id">{{ item.actor.name }}
               </span>
            </li>
         </ul> -->
   </Voix>
</template>

<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const filters = ref({
   global: { value: null, matchMode: FilterMatchMode.CONTAINS },
   'actor.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
   'actor.title': { value: null, matchMode: FilterMatchMode.CONTAINS },
   //  'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
   //  representative: { value: null, matchMode: FilterMatchMode.IN },
   //  status: { value: null, matchMode: FilterMatchMode.EQUALS },
   //  verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});

const actor_id = ref(1);
</script>