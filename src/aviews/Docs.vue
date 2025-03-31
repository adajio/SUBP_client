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

  <Splitter style="height:calc(100% - 177px)" :glutterSize="2">
    <SplitterPanel :size="25">
      <DocsLeft></DocsLeft>
    </SplitterPanel>
    <SplitterPanel :size="75">
      <DocsMiddle></DocsMiddle>
    </SplitterPanel>
    <!-- <SplitterPanel size="25">
      <DocsRight></DocsRight>
    </SplitterPanel> -->
  </Splitter>

</LayoutSubpis>  
</template>
<script setup>
import { ref } from 'vue';
// import {useStorage} from '@vueuse/core';
import DocsLeft from './Docs/Left.vue';
import DocsMiddle from './Docs/Middle.vue';
// import DocsRight from './Docs/Right.vue';

const leftTabIndex = ref(0);
// watch(leftTabIndex, () => console.log('19,changed', leftTabIndex.value));
const leftTabItems = ref([
  { label: 'Модели и объекты', icon: 'mdi mdi-shape-outline', to: '/subpis/models' },
  { label: 'Документы', icon: 'mdi mdi-file-outline', to: '/subpis/docs' },
]);

const rightTabItems = ref([
  { icon: 'mdi mdi-chart-bar' },
  { icon: 'mdi mdi-shield-check-outline' },
  { icon: 'mdi mdi-information-box' },
]);

</script>