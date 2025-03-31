<template>
  <LayoutSubpis title="Репозиторий" icon="mdi mdi-file-cabinet">
    <div style="display:flex;justify-content: space-between;">
      <TabMenu :model="leftTabItems" v-model:activeIndex="leftTabIndex" 
      :pt="{ icon: { style: 'font-size:20px' }, action:{style:'padding:13px'}}" />
      <div>
        <TabMenu v-if="leftTabIndex==0" :model="rightTabItems" 
        :pt="{ icon: { style: 'font-size:20px' },action:{style:'padding:13px'} }" />
        <div v-else-if="leftTabIndex==1" style="display:flex;">
          <Button text rounded label="Выгрузить" icon="mdi mdi-upload"
          :pt="{icon:{style:'font-size:20px'}}"></Button>
          <Button text rounded label="Обновить" icon="mdi mdi-refresh"
          :pt="{icon:{style:'font-size:20px'}}"></Button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </LayoutSubpis>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RouterView } from 'vue-router';

const leftTabIndex = ref(0);
// watch(leftTabIndex, () => console.log('19,changed', leftTabIndex.value));
const leftTabItems = ref([
  { label: 'Модели и объекты', icon: 'mdi mdi-shape-outline', to: '/subpis/repo/models' },
  { label: 'Документы', icon: 'mdi mdi-file-outline', to: '/subpis/repo/docs' },
]);

const rightTabItems = ref([
  { icon: 'mdi mdi-chart-bar' },
  { icon: 'mdi mdi-shield-check-outline' },
  { icon: 'mdi mdi-information-box' },
]);

</script>