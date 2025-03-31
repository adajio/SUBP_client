<template>
  <LayoutMain :nav="nav">
  <!-- <Dialog dismissableMask modal :showHeader="false" :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '90vw' }" contentClass="border-round-top p-0" appendTo="body" @hide="visible1 = false; value1 = '';"> -->
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex align-items-center justify-content-between mb-3">
        <div class="text-900 font-medium text-xl">Актор</div>
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
          <li @click="setComponent(ActorDescription)">
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-user md:mr-2"></i>
              <span class="font-medium hidden md:block">Описание</span>
            </a>
          </li>
          <li @click="setComponent(ActorMember)">
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Участник</span>
            </a>
          </li>
          <li @click="setComponent(ActorMembers)">
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Участники команды</span>
            </a>
          </li>
          <li @click="setComponent(ActorActivities)">
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Активности</span>
            </a>
          </li>

        </ul>
        <component v-bind:is="currentComponent"></component>
        
      </div>
    </div>
  <!-- </Dialog> -->
</LayoutMain>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ActorDescription from './Actor/Description.vue';
import ActorMember from './Actor/Member.vue';
import ActorMembers from './Actor/Members.vue';
import ActorActivities from './Actor/Activities.vue';
import { API_URL } from '../constants';


const currentComponent = ref(ActorDescription);
const setComponent = (component) => { currentComponent.value = component; };

const nav = ref([]);

// const nav = ref({
//   items: [
//     {
//       name: 'Акторы',
//       icon:'mdi mdi-accounts',
//       // emoji: '🏦', 
//       route: '/actors'
//     },
//     {
//       name: 'Елена Иванова',
//       icon:'mdi mdi-account',
//       // emoji: '🏦', 
//       route: '/actor'
//     },
//   ]
// });

// const nav = ref([{ label: '', icon: '🏠', url: '/home' },
// {
//   label: 'Петрова Елена',
//   icon: '👧',
//   url: '/actor'
// }]);

const sidebarActor = ref();
axios.post(`${API_URL}/api/get/sidebar/actor`,{code:'EPETROVA'}).then(({data})=>{
  nav.value = data.nav;
  // console.log(96,data)
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
</script>