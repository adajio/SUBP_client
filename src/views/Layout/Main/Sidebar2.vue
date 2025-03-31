<template>
  <div style="display:flex;flex-direction:column;width:100%;height:calc(100vh - 50px);">

    <Menu :model="upperMenuItems" class="w-full" style="border:none">
      <template #start>
        <div style="display:flex;justify-content: space-between;">
          <button @click="router.push(`/actor/${sidebarActor.id}`)"
            class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
            <Avatar :image="sidebarActor?.design?.image" class="mr-2" shape="circle" />
            <div class="flex flex-column align">
              <span class="font-bold">{{ sidebarActor?.name }}</span>
              <span class="text-sm">{{ sidebarActor?.title }}</span>
            </div>
          </button>
          <Button icon="mdi mdi-chevron-double-left" text rounded aria-label="Сlose"
            :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }" @click="emit('hideSidebar')"
            v-tooltip="'Закрыть меню'"></Button>
        </div>
      </template>
    </Menu>
    <div style="flex-grow: 1;overflow-y: scroll;">
      <div class="p-menu p-submenu-header w-full" style="border:0;padding:0.75rem 1.25rem;font-weight:700" role="none">
        Избранное</div>
      <Menu :model="middleMenuItems" selectionMode="single" class="w-full" style="border:none">
      </Menu>

      <div class="p-menu p-submenu-header w-full" style="border:0;padding:0.75rem 1.25rem;font-weight:700;width:100%;"
        role="none">
        <div style="display:flex;align-items: center;width:100%;justify-items: space-between;">
          <div>Продукты</div>
          <div class="conceal transition-duration-500" style="display:flex;">
            <div class="mdi mdi-dots-horizontal" style="color:var(--primary-color);font-size:20px;padding:0 2px;"></div>
            <div class="mdi mdi-plus" style="border-radius:50%;color:var(--primary-color);font-size:20px;padding:0 0px;">
            </div>


            <!-- <div class="conceal transition-duration-500" style="display:flex;">
          <Button icon="mdi mdi-dots-horizontal" text rounded aria-label="Filter" @click="toggleOpMenu"
            :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }"></Button>

          <Button icon="mdi mdi-plus" text rounded aria-label="Filter" @click="toggleNewMenu"
            :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }"></Button>
        </div> -->
          </div>
        </div>
      </div>

      <Tree :value="productTreeNodes" v-model:selectionKeys="productSelectedKey" :pt="{
        root: { style: 'padding:0;border:none;' },
        content: { style: 'padding-top:5px;padding-bottom:5px' }
      }" selectionMode="single" @nodeSelect="onProductNodeSelect"></Tree>

      <Menu :model="lowerMenuItems" selectionMode="single" class="w-full" style="border:none">
        <template #item="slotProps">
          <li class="p-menu-item">

            <div class="p-menuitem-content"
              style="display:flex;align-items:center;justify-content:space-between;width: 100%;">
              <a class="p-menuitem-link" style="width:100%">
                <div style="display:flex;">
                  <div :class="slotProps.item.icon" class="p-menuitem-icon"></div>
                  <div class="p-menuitem-text">{{ slotProps.item.label }}</div>
                </div>
              </a>
              <div  
              class="conceal transition-duration-500" style="cursor:pointer;display:flex;padding:8px">
                <div v-if="slotProps.item.commandOp" @click="slotProps.item.commandOp" v-tooltip.bottom="slotProps.item.tooltipOp" class="mdi mdi-dots-horizontal"
                  style="color:var(--primary-color);font-size:20px;padding:0 2px;">
                </div>
                <div v-if="slotProps.item.tooltipNew" v-tooltip.bottom="slotProps.item.tooltipNew" @click="slotProps.item.commandNew" class="mdi mdi-plus"
                  style="cursor:pointer;border-radius:50%;color:var(--primary-color);font-size:20px;padding:0 0px;"></div>
              </div>
              <!-- 
                <Button icon="mdi mdi-dots-horizontal" text rounded aria-label="Filter" @click="toggleOpMenu"
                  :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }"></Button>

                <Button icon="mdi mdi-plus" text rounded aria-label="Filter" @click="toggleNewMenu"
                  :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }"></Button> -->

            </div>

          </li>

        </template>
      </Menu>
    </div>
  </div>

  <Menu ref="newMenu" id="newMenu" :model="newMenuItems" :popup="true"></Menu>
  <Menu ref="opMenu" id="opMenu" :model="opMenuItems" :popup="true"></Menu>

  <DialogSearch v-model:visible="dialogSearch"></DialogSearch>
  <DialogTasks v-model:visible="dialogTasks"></DialogTasks>
  <DialogActivities v-model:visible="dialogActivities"></DialogActivities>
  <DialogSetup v-model:visible="dialogSetup"></DialogSetup>
  <DialogImport v-model:visible="dialogImport"></DialogImport>
</template>
<script setup>
import { ref, watch, watchEffect } from 'vue';
import { useStorage } from '@vueuse/core';
import axios from 'axios';
import router from '../../../router';
// import useHotkey from 'vue3-hotkey';

import DialogSearch from './Sidebar/Dialog/Search.vue';
import DialogActivities from './Sidebar/Dialog/Activities.vue';
import DialogTasks from './Sidebar/Dialog/Tasks.vue';
import DialogSetup from './Sidebar/Dialog/Setup.vue';
import DialogImport from './Sidebar/Dialog/Import.vue';

const emit = defineEmits(['hideSidebar']);

const dialogSearch = ref(false);
const dialogActivities = ref(false);
const dialogTasks = ref(false);
const dialogSetup = ref(false);
const dialogImport = ref(false);


import { useMagicKeys } from '@vueuse/core';
import { API_URL } from '../../../constants';
const { ControlLeft, KeyF, current } = useMagicKeys();

watchEffect(() => {
  if (ControlLeft.value && KeyF.value) {
    setTimeout(() => {
      dialogSearch.value = !dialogSearch.value;
    }, 0);
  }
  // console.log('Command-F have been pressed');
  // console.log(current);
})

// const commandF = useMagicKeys({
//   passive: false,
//   onEventFired(e) {
//     if (e.metaKey && e.key === 'f' && e.type === 'keydown')
//       console.log(123,e.metaKey, e.key,e.type);
//       e.preventDefault();
//       e.stopPropagation();
//       dialogSearch.value = !dialogSearch.value;
//   },
// })

// console.log(126,commandF);
// whenever(commandF, () => {
//   console.log('CommndF have been pressed');
//   dialogSearch.value = !dialogSearch.value;

// })


const newMenu = ref();
const toggleNewMenu = (event) => {
  newMenu.value.toggle(event);
};
const opMethodMenu = ref();
const toggleOpMethodMenu = (event) => {
    opMethodMenu.value.toggle(event);
};

const opIntegrationMenu = ref();
const toggleOpIntegrationMenu = (event) => {
    opIntegrationMenu.value.toggle(event);
};


const sidebarActorCode = useStorage('sidebarActorCode', 'EPETROVA');
// console.log(115,sidebarActorCode.value);
const sidebarActor = ref();
axios.post(`${API_URL}/api/get/sidebar/actor`, { code: sidebarActorCode.value }).then(({ data }) => {
  sidebarActor.value = data.actor;
  console.log(118, data)
});

const upperMenuItems = ref([
  { label: 'Поиск', icon: 'mdi mdi-magnify', command: () => dialogSearch.value = true },
  { label: 'Задачи', icon: 'mdi mdi-calendar-check-outline', command: () => dialogTasks.value = true },
  { label: 'Лента активности', icon: 'mdi mdi-clock-outline', command: () => dialogActivities.value = true },
  { label: 'Настройки', icon: 'mdi mdi-cog-outline', command: () => dialogSetup.value = true },
]);

const middleMenuItems = ref([]);

const productTreeNodes = ref([]);
const productSelectedKey = ref({});

const onProductNodeSelect = (node) => {
  if (node.data?.product_type?.code == 'PPORTFOLIO') {
    router.push(`/portfolio/${node.key}`);
  } else {
    router.push(`/product/${node.key}`);
  }
};

const lowerMenuItems = ref([
  {
    label: 'Методологии', icon: 'mdi mdi-shape-outline',
    command: () => router.push('/methods'),
    commandNew: () => router.push('/method/new'), tooltipNew: 'Создать новую методологию',
    commandOp: toggleOpMethodMenu, tooltipOp: 'Операции с методологиями',
  },

  { label: 'Интеграции', icon: 'mdi mdi-swap-vertical-bold', command: () => router.push('/integrations') },
  { label: 'Импорт', icon: 'mdi mdi-import', command: () => dialogImport.value = true },
  { label: 'Корзина', icon: 'mdi mdi-trash-can-outline', command: () => router.push('/trash') },
]);

// ИЗБРАННОЕ
const favorites = useStorage('favorites', []);
watch(favorites, () => { middleMenuItems.value = favorites.value; });
middleMenuItems.value = favorites.value;

const products = ref([]);
axios.post(`${API_URL}/api/get/sidebar/products`, {})
  .then(({ data }) => {
    // products.value = res.data?.products || [];
    console.log(97, data);
    productTreeNodes.value = data.nodes;
  });

// МЕНЮ НОВОЕ


const newMenuItems = ref([
  {
    label: 'Создать портфель',
    icon: 'mdi mdi-card-multiple-outline',
    command: () => { }
  },
  {
    label: 'Создать продукт',
    icon: 'mdi mdi-table',
    command: () => { }
  },
  {
    label: 'Создать этап',
    icon: 'mdi mdi-view-grid-outline',
    command: () => { }
  },
  {
    label: 'Создать страницу',
    icon: 'mdi mdi-chart-gantt',
    command: () => { }
  }
]);

const opMenu = ref();
const toggleOpMenu = (event) => {
  opMenu.value.toggle(event);
};

const opMenuItems = ref([
  {
    label: 'Дублировать',
    icon: 'mdi mdi-card-multiple-outline',
    command: () => { }
  },
  {
    label: 'Удалить',
    icon: 'mdi mdi-trash-can',
    command: () => { }
  },
]);




const opMethodMenuItems = ref([
    {
        label: 'Магазин методологий',
        icon: 'mdi mdi-store-outline',
        command: () => {
            router.push('/methodshop');
        }
    },
    {
        label: 'Корпоративные методологии',
        icon: 'mdi mdi-domain',
        command: () => {
            router.push('/methods');
        }
    },

]);


const opIntegrationMenuItems = ref([
    {
        label: 'Магазин интеграций',
        icon: 'mdi mdi-store-outline',
        command: () => {
            router.push('/integrationshop');
        }
    },
    {
        label: 'Настроенные интеграции',
        icon: 'mdi mdi-domain',
        command: () => {
            router.push('/integrations');
        }
    },

]);
</script>