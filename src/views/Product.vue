<template>
  <LayoutMain :nav="nav">
  <!-- <Dialog dismissableMask modal :showHeader="false" :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '90vw' }" contentClass="border-round-top p-0" appendTo="body" @hide="visible1 = false; value1 = '';"> -->
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex align-items-center justify-content-between mb-3">
        <div class="text-900 font-medium text-xl">Продукт: SWOT-анализ</div>
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
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-user md:mr-2"></i>
              <span class="font-medium hidden md:block">Описание</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Этапы разработки</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Участники</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Страницы</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Задачи</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Активности</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Артефакты</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Интеграции</span>
            </a>
          </li>

          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Дочерние продукты</span>
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
import ProductDescription from './Product/Description.vue';
import ProductStages from './Product/Stages.vue';
import ProductMembers from './Product/Members.vue';
import ProductPages from './Product/Pages.vue';
import ProductTasks from './Product/Tasks.vue';
import ProductActivities from './Product/Activities.vue';
import ProductArtefacts from './Product/Artefacts.vue';
import ProductConnections from './Product/Connections.vue';
import ProductIntegrations from './Product/Integrations.vue';

const nav = ref([{ label: '', icon: '🏠', url: '/home' },
{
  label: 'SWOT-анализ',
  icon: '📦',
  url: '/product'
}]);

// const nav = ref({
//   items: [
//     {
//       name: 'Корпоративная стратегия',
//       emoji: '🏦', route: '/portfolio'
//     },
//     {
//       name: 'SWOT-анализ',
//       emoji: '🏦', route: '/product'
//     },
//   ]
// });
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