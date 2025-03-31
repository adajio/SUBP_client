<template>
  <LayoutSubpis title="Редактор" icon="mdi mdi-palette-outline" hidden="true">
    <div style="display:flex;justify-content: space-between;align-items: center;">
      <div style="display:flex;align-items: baseline;padding:0 20px">
        <h1>{{ title }}</h1>
        <Button text rounded icon="mdi mdi-lock-open-outline"
          :pt="{ root: { style: 'background-color:var(--gray-100)' }, icon: { style: 'font-size:20px' } }"></Button>
      </div>
      <Button text rounded label='Просмотр в разделе "Опубликованное содержимое"'></Button>
    </div>
    <div style="display:flex;justify-content: space-between;">
      <TabMenu :model="leftMenuItems" v-model:activeIndex="leftMenuIndex"
      :pt="{action:{style:'padding:16px 20px'},icon:{style:'font-size:20px'}}"></TabMenu>
      <div>
        <ToggleButton onLabel='' offLabel='' onIcon='i20 mdi mdi-magnify' offIcon='i20 mdi mdi-magnify' 
        :pt="{root:{style:'border:none'}}"
        v-tooltip.top="'Поиск'"
        v-model="searchVisible"
        ></ToggleButton>
        <ToggleButton onLabel='' offLabel='' onIcon='i20 mdi mdi-information-box-outline' offIcon='i20 mdi mdi-information-box-outline'
        :pt="{root:{style:'border:none'}}"
        v-tooltip.top="'Сведения'"
        v-model="infoVisible"
        ></ToggleButton>
        <ToggleButton onLabel='' offLabel='' onIcon='i20 mdi mdi-chart-bar' offIcon='i20 mdi mdi-chart-bar'
        :pt="{root:{style:'border:none'}}"
        v-tooltip.top="'Отчеты'"
        v-model="reportsVisible"
        ></ToggleButton>
        <ToggleButton onLabel='' offLabel='' onIcon='i20 mdi mdi-shield-check-outline' offIcon='i20 mdi mdi-shield-check-outline'
        :pt="{root:{style:'border:none'}}"
        v-tooltip.top="'Семантические проверки'"
        v-model="verificationVisible"
        ></ToggleButton>
        <ToggleButton onLabel='' offLabel='' onIcon='i20 mdi mdi-shape-plus-outline' offIcon='i20 mdi mdi-shape-plus-outline'
        :pt="{root:{style:'border:none'}}"
        v-tooltip.top="'Символы'"
        v-model="paletteVisible"
        ></ToggleButton>
        <ToggleButton onLabel='' offLabel='' onIcon='i20 mdi mdi-chat-outline' offIcon='i20 mdi mdi-chat-outline'
        :pt="{root:{style:'border:none'}}"
        v-tooltip.top="'Сотрудничество'"
        v-model="cooperationVisible"
        ></ToggleButton>
      </div>
    </div>
    <EditorStart v-if="leftMenuIndex == 0"></EditorStart>
    <EditorModel v-else-if="leftMenuIndex == 1"></EditorModel>
    <EditorFormat v-else-if="leftMenuIndex == 2"></EditorFormat>

    <Splitter :glutterSize="2" style="height:calc(100% - 242px)">
      <SplitterPanel v-if="paletteVisible" :size="20">
      <EditorPalette @hide="paletteVisible=false"></EditorPalette>
      </SplitterPanel>
      <SplitterPanel :size="60">
        <EditorBoard :id="id" :code="code" @update:title="updateTitle"></EditorBoard>
      </SplitterPanel>
      <SplitterPanel :size="20" v-if="infoVisible || reportsVisible || cooperationVisible">
        <EditorRight v-if= "infoVisible"></EditorRight>
      </SplitterPanel>
    </Splitter>

  </LayoutSubpis>
</template>
<script setup>
import { ref } from 'vue';
import {useStorage} from '@vueuse/core';

import EditorStart from './Editor/Start.vue';
import EditorModel from './Editor/Model.vue';
import EditorFormat from './Editor/Format.vue';
import EditorPalette from './Editor/Palette.vue';
import EditorBoard from './Editor/Board.vue';
import EditorRight from './Editor/Right.vue';

const props = defineProps(['id','code']);

const title=ref('Редактор диаграмм');
const updateTitle = (value) => {
  title.value = value;
}

const leftMenuIndex = ref(0);
const leftMenuItems = ref([
  { label: 'Пуск' },
  { label: 'Модель' },
  { label: 'Формат' },
]);

const searchVisible = useStorage('subpis.editor.search',false);
const infoVisible = useStorage('subpis.editor.info',false);
const reportsVisible = useStorage('subpis.editor.reports',false);
const verificationVisible = useStorage('subpis.editor.verification',false);
const paletteVisible = useStorage('subpis.editor.palette',true);
const cooperationVisible = useStorage('subpis.editor.cooperation',false);


</script>