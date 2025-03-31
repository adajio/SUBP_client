<template>
  <LayoutSubpis title="Репозиторий" icon="mdi mdi-file-cabinet">
    <div style="display:flex;justify-content: space-between;">
      <TabMenu :model="leftTabItems" v-model:activeIndex="leftTabIndex"
        :pt="{ icon: { style: 'font-size:20px' }, action: { style: 'padding:13px' } }" />
      <div>
        <TabMenu v-if="leftTabIndex == 0" :model="rightTabItems"
          :pt="{ icon: { style: 'font-size:20px' }, action: { style: 'padding:13px' } }" />
        <div v-else-if="leftTabIndex == 1" style="display:flex;">
          <Button text rounded label="Выгрузить" icon="mdi mdi-upload"
            :pt="{ icon: { style: 'font-size:20px' } }"></Button>
          <Button text rounded label="Обновить" icon="mdi mdi-refresh"
            :pt="{ icon: { style: 'font-size:20px' } }"></Button>
        </div>
      </div>
    </div>

    <ModelsToolbar></ModelsToolbar>


    <Splitter style="height:calc(100% - 177px)" :glutterSize="2">
      <SplitterPanel :size="20">
        <ModelsLeft></ModelsLeft>
      </SplitterPanel>
      <SplitterPanel :size="60">
        <ModelsMiddle></ModelsMiddle>
      </SplitterPanel>
      <SplitterPanel :size="20">
        <ModelsRight></ModelsRight>
      </SplitterPanel>
    </Splitter>

  </LayoutSubpis>
</template>
<script setup>
import { ref } from 'vue';
import ModelsLeft from './Models/Left.vue';
import ModelsMiddle from './Models/Middle.vue';
import ModelsRight from './Models/Right.vue';
import ModelsToolbar from './Models/Toolbar.vue';
import { watch } from 'vue';
import {useModelsStore} from './Models/Store.js';
const modelsStore = useModelsStore();

const areaGroupsRefresh = ref();

const leftTabIndex = ref(0);
// watch(leftTabIndex, () => console.log('19,changed', leftTabIndex.value));
const leftTabItems = ref([
  { label: 'Модели и объекты', icon: 'mdi mdi-shape-outline', to: '/subpis/models' },
  { label: 'Документы', icon: 'mdi mdi-file-outline', to: '/subpis/docs' },
]);

const rightTabItems = ref([
  { icon: 'mdi mdi-chart-bar', tooltip: 'Отчеты' },
  { icon: 'mdi mdi-shield-check-outline', tooltip: 'Семантические проверки' },
  { icon: 'mdi mdi-information-box', tooltip: 'Сведения' },
]);

</script>