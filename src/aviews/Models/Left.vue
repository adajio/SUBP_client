<template>
  <div style="height:100%;display:flex;flex-direction: column;overflow-y: scroll;">
    <Tree :value="historyNodes" :pt="{
      root: { style: 'border:none;box-shadow:none;padding:0;cursor:pointer;' },
      label: { style: 'width:100%' },
      content: { style: 'padding:0;' },
      nodeIcon: { style: 'font-size:20px' }
    }" @nodeSelect="onHistoryNodeSelect">
      <template #Group="d">
        <div class="flex justify-content-between align-items-center">
          {{ d.node.label }}
          <div class="mdi mdi-dots-vertical dots-menu i20" @click="groupMenuToggle"></div>
        </div>
      </template>

      <template #default="d">
        <div class="flex justify-content-between align-items-center">
          {{ d.node.label }}
          <div class="mdi mdi-dots-vertical dots-menu i20" @click="historyMenuToggle"></div>
        </div>
      </template>
    </Tree>


    <Voix api="subpis/get/area-groups/tree" #="{ areaGroupsNodes }" :key="modelsStore.areaGroupsRefreshKey">
      <Tree @nodeSelect="onAreaGroupsNodeSelect" 
        v-model:selectionKeys="areaGroupsSelection" selectionMode="single"
        v-model:expandedKeys="areaGroupsKeys"
        :value="areaGroupsNodes" :pt="{
          root: { style: 'border:none;box-shadow:none;padding:0;cursor:pointer;' },
          label: { style: 'width:100%' },
          content: { style: 'padding:0;' },
          nodeIcon: { style: 'font-size:20px' }
        }">
        <template #Area="d">
          <div class="flex justify-content-between align-items-center">
            {{ d.node.label }}
            <div class="mdi mdi-dots-vertical dots-menu i20" @click="areaMenuToggle"></div>
          </div>
        </template>

        <template #Group="d">
          <div class="flex justify-content-between align-items-center">
            {{ d.node.label }}
            <div class="mdi mdi-dots-vertical dots-menu i20" @click="groupMenuToggle"></div>
          </div>
        </template>
      </Tree>
    </Voix>
  </div>
  <Menu ref="historyMenu" :model="historyMenuItems" :popup="true" :pt="{
    root: { style: 'width:200px' },
    action: { style: 'padding:5px 10px 5px 10px' }
  }"></Menu>

  <Menu ref="areaMenu" :model="areaMenuItems" :popup="true" :pt="{
    root: { style: 'width:200px' },
    action: { style: 'padding:5px 10px 5px 10px' }
  }"></Menu>
  <Menu ref="groupMenu" :model="groupMenuItems" :popup="true" :pt="{
    root: { style: 'width:350px' },
    action: { style: 'padding:5px 10px 5px 10px' }
  }"></Menu>

<GroupRename v-model:visible="groupRenameVisible"></GroupRename>
</template>
<script setup>
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import { voix } from '#/voix';
import { useModelsStore } from './Store.js';
const modelsStore = useModelsStore();
import GroupRename from './Group/Rename.vue';
const groupRenameVisible = ref(false);


const history = useStorage('subpis.history', [
  { label: 'Модель 1', icon: 'mdi mdi-folder-outline', type: 'group' },
  { label: 'Модель 2', icon: 'mdi mdi-folder-outline', type: 'group' },
]);
const historyNodes = ref([
  {
    label: 'Последние использовавшиеся', icon: 'mdi mdi-history',
    children: history
  },
]);

const historyMenu = ref();
const historyMenuToggle = (event) => historyMenu.value.toggle(event);
const historyMenuItems = ref([
  { label: 'Создать модель', icon: 'mdi mdi-shape-plus-outline' },
  { label: 'Обновить', icon: 'mdi mdi-refresh' },
]);

const areGroupsRefresh = ref();
const areaGroupsSelection = ref();
const areaGroupsKeys = useStorage('models.areaGroupsKeys',{});

const areaMenu = ref();
const areaMenuToggle = (event) => areaMenu.value.toggle(event);
const areaMenuItems = ref([
  { label: 'Создать модель', icon: 'mdi mdi-shape-plus-outline' },
]);

const groupMenu = ref();
const groupMenuToggle = (event) => groupMenu.value.toggle(event);
const groupMenuItems = ref([
  {
    label: 'Создать группу', icon: 'mdi mdi-folder-plus-outline', command: (data) => {
      const gr = modelsStore.currentGroup;
      voix('/subpis/create/group',{AreaID:gr.AreaID, GroupID:gr.GroupID, Name:'Новая папка'})
      .then(modelsStore.areaGroupsRefresh)
    }
  },
  { label: 'Создать модель', icon: 'mdi mdi-shape-plus-outline' },
  { label: 'Создать объекты', icon: 'mdi mdi-plus-box-outline' },
  { label: 'Переместить', icon: 'mdi mdi-folder-move-outline' },
  { label: 'Копировать', icon: 'mdi mdi-content-copy' },
  { label: 'Вырезать', icon: 'mdi mdi-content-cut' },
  { label: 'Переименовать', icon: 'mdi mdi-form-textbox',command:()=>{
    groupRenameVisible.value = true;
  } },
  { label: 'Удалить', icon: 'mdi mdi-delete-outline' },
  { label: 'Обновить', icon: 'mdi mdi-refresh' },
  { label: 'Импортировать модель ARIS Express', icon: 'mdi mdi-import' },
  { label: 'Импортировать диаграммы BPMN', icon: 'mdi mdi-import' },
  { label: 'Импорт фалов Visio', icon: 'mdi mdi-import' },
  { label: 'Разблокировка администратором', icon: 'mdi mdi-lock-open-variant-outline' },
  { label: 'Техническая информация', icon: 'mdi mdi-monitor-dashboard' },
  { label: 'Создать вариант', icon: 'mdi mdi-card-multiple-outline' },
]);


const onHistoryNodeSelect = (node) => { console.log(116, node); }
const onAreaGroupsNodeSelect = (node) => {
  if (node.type == 'Group') {
    modelsStore.setCurrentGroup(node.data);
  }
}


</script>
<style>
.dots-menu {
  /* padding:5px 10px 5px 10px; */
  width: 30px;
  height: 30px;
  text-align: center;
  vertical-align: baseline;
  opacity: 0.1;
  border-radius: 50%;
}

.dots-menu:hover {
  color: var(--primary-color);
  background-color: var(--gray-50);
  opacity: 1;
}
</style>