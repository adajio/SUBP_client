<template>
  <LayoutMain :nav="nav">
    <!-- <Dialog dismissableMask modal :showHeader="false" :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '90vw' }" contentClass="border-round-top p-0" appendTo="body" @hide="visible1 = false; value1 = '';"> -->
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex align-items-center justify-content-between mb-3">
        <div class="text-900 font-medium text-xl">Методология: SWOT-анализ</div>
        <div>
          <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
            @click="$refs.menu2.toggle($event)"></Button>
          <Menu ref="menu2" :popup="true" :model="menu"></Menu>
        </div>
      </div>
    </div>

    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="p-fluid flex flex-column lg:flex-row">
        <ul
          class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">
          <component v-bind:is="currentMenu" @setMenu="setMenu" @setComponent="setComponent"></component>
        </ul>
        <component v-bind:is="currentComponent" :method="method"></component>
      </div>
    </div>
    <!-- </Dialog> -->
  </LayoutMain>
</template>
<script setup>
import { ref, watch } from 'vue';
import router from '../router';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const id = route.params.id; // read parameter id (it is reactive) 

import MethodGeneral from './Method/General.vue';
import MethodGeneralDescription from './Method/General/Description.vue';
import { API_URL } from '../constants';

const currentComponent = ref(MethodGeneralDescription);
const currentMenu = ref(MethodGeneral);

const setMenu = (menu) => { console.log(53,menu); currentMenu.value = menu; };
const setComponent = (component) => { console.log(54,component); currentComponent.value = component; };

const nav = ref({
  items: [
    {
      name: 'Магазин методологий',
      emoji: '🏦', route: '/methodshop'
    },
    {
      name: 'Стратегический анализ',
      emoji: '🏦', route: '/methodshop'
    },
    {
      name: 'Общие методы анализа',
      emoji: '🏦', route: '/methodshop'
    },
    {
      name: 'SWOT-анализ',
      emoji: '🏦', route: '/method'
    },
  ]
});
const menu2 = ref([]);

const menu = ref([{
  label: "Варианты",
  items: [{
    label: "Обновить",
    icon: "pi pi-fw pi-refresh"
  }, {
    label: "Поиск",
    icon: "pi pi-fw pi-search"
  }]
}]);

const method = ref({});
const parent = ref({});

axios.post(`${API_URL}/api/get/method`, { code: 'SWOT' })
  .then(({data}) => {
    console.log(145,data);
    method.value = data.method;
    parent.value = data.parent;

    nav.value = {
      items: [
        { name: method.value.name, 
          icon: method.value.design?.icon, 
          route: `/method/${method.value.id}` }
      ]
    };

      nav.value.items.unshift({
        name:parent.value.name,
        icon:parent.value.design?.icon,
        route:`/method/${parent.value.id}`
      })
  });


</script>