<template>
  <Toolbar style="height:var(--toolbar-height);padding:0px;border-radius: 0;background-color: var(--primary-color);"
    :style="{ '--toolbar-height': toolbarHeight + 'px' }" @mouseover="setToolbarHeight(60)"
    @mouseleave="setToolbarHeight(60)">
    <template #start>
      <Button icon="mdi mdi-dots-grid" text rounded
        :pt="{ root: { style: 'box-shadow:none;color:white' }, icon: { style: 'font-size:20px' } }"
        @click="toggle"></Button>
      <!-- <img src="/img/subpis/logo/logo.png" style="height:24px;"> -->
      <h3 style="color:white">СУБПИС</h3>
      <Divider layout="vertical"></Divider>
      <i :class="icon" rounded style="font-size:20px;color:white;padding:8px"></i>
      <h3 style="color:white">{{ title }}</h3>
    </template>
    <template #center>
      <span class="p-input-icon-left">
        <i class="mdi mdi-magnify" />
        <InputText type="text" placeholder="Поиск..." :modelValue="searchText"
          style="height:28px;width:30rem;background-color:var(--primary-100)" 
          @update:modelValue="searchText='';searchShow()" />
      </span>
      <Button icon="mdi mdi-filter-outline" text rounded
        :pt="{ root: { style: 'box-shadow:none;color:white' }, icon: { style: 'font-size:20px' } }"></Button>


    </template>
    <template #end>
      <Avatar :label="'ВП'" class="mr-2" style="background-color:var(--primary-900); color: #ffffff" shape="circle"
        @click="userMenuToggle" />

      <Menu ref="userMenu" :model="userMenuItems" :popup="true"></Menu>
      <!-- <Button label="АГ" text rounded
        :pt="{ root: { style: 'box-shadow:none;color:white' }, icon: { style: 'font-size:20px' } }"></Button> -->

    </template>
  </Toolbar>

  <OverlayPanel ref="op" :pt="{ root: { style: 'padding:0px' } }">
    <SubpisPanel></SubpisPanel>
  </OverlayPanel>
  <SubpisSearch v-model:visible="searchVisible" v-model:searchText="searchText"></SubpisSearch>
  <slot></slot>
</template>
<script setup>
import { ref } from 'vue';
import { useTitle } from '@vueuse/core';
import SubpisPanel from './Subpis/Panel.vue';
import SubpisSearch from './Subpis/Search.vue';
import SubpisSidebar from './SubpisSidebar.vue';

const searchVisible = ref(false);
const searchShow = (data) => {
  console.log(data);
  searchText.value = '';
  searchVisible.value = true;
}

const toolbarHeight = ref(60);
const setToolbarHeight = (height) => { toolbarHeight.value = height };

const props = defineProps(['title', 'icon', 'hidden']);
useTitle(props.title + ' - [Субпис]');
const searchText = ref('');
const sidebarVisible = ref();
const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
}

const userMenu = ref();
const userMenuToggle = (event) => { userMenu.value.toggle(event) };
const userMenuItems = ref([
  { label: 'Настройки', icon: 'mdi mdi-cogs', to: '/subpis/admin' },
  { label: 'Язык', icon: 'mdi mdi-earth', to: '/subpis/admin' },
  { separator: true },
  { label: 'Выход', icon: 'mdi mdi-logout', to: '/logout' },
  { separator: true },
  { label: 'Помощь', icon: 'mdi mdi-help', to: '/subpis/help' },
  { label: 'О программе', icon: 'mdi mdi-about', to: '/subpis/about' }
]);
</script>
<style scoped>
.hover-gray:hover {
  cursor: pointer;
}

.hover-gray:hover {
  background-color: var(--gray-200);
}
</style> 