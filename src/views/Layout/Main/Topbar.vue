<template>
  <Toolbar style="padding:0px;border-radius: 0;">
    <template #start>
      <Button icon="mdi mdi-menu" text rounded aria-label="Filter"
        :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }" v-if="!sidebarVisible"
        @click="emit('showSidebar')"></Button>

      <span>
        <div style="display:flex;">
        <div v-for="(item,i) in nav" style="display:flex;align-items: center;">
          <div v-if="i>0">/</div>
          <Button :label="item.label" :icon="item.icon" @click="router.push(item.url)" text size="small"
            :pt="{ root: { style: 'box-shadow:none;padding:8px' }, icon: { style: 'font-size: 20px;' } }" />
        </div>
      </div>

        <!-- <Button label="Начало" text icon="mdi mdi-home-outline"  size="small"
          :pt="{ root: { style: 'box-shadow:none' },icon: { style: 'font-size: 20px;' } }" />
        <Button label="Елена Петрова" text icon="mdi mdi-account-outline"  size="small"
          :pt="{ root: { style: 'box-shadow:none' },icon: { style: 'font-size: 20px;' } }" /> -->
      </span>


    </template>
    <template #end>
      <Button icon="mdi mdi-share-variant-outline" text rounded aria-label="Filter" @click="invite = true"
        :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }" 
        v-tooltip.bottom="'Поделиться страницей или пригласить участника'"/>
     
        <Button icon="mdi mdi-comment-outline" text rounded aria-label="Filter" @click="toggleChatbar1"
        :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }" 
        v-tooltip.bottom="'Обсуждение'" />
     
        <Button icon="mdi mdi-clock-outline" text rounded aria-label="Filter" @click="toggleActivebar1"
        :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }"
        v-tooltip.bottom="'Лента активности'" />
     
        <Button ripple :icon="watchIndex >= 0 ? 'mdi mdi-eye' : 'mdi mdi-eye-outline'" text rounded aria-label="Filter"
        :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }" @click="toggleWatch"
        v-tooltip="watchIndex >= 0 ?'Остановить отслеживание':'Следить за страницей'" />
     
        <Button ripple :icon="favoriteIndex >= 0 ? 'mdi mdi-star' : 'mdi mdi-star-outline'" text rounded aria-label="Filter"
        :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }" @click="toggleFavorite" 
        v-tooltip.bottom="favoriteIndex >= 0 ?'Исключить из избранного':'Добавить в избранное'" />
     
        <Button icon="mdi mdi-dots-horizontal" text rounded aria-label="Filter" @click="toggleOverbar"
        :pt="{ root: { style: 'box-shadow:none' }, icon: { style: 'font-size: 20px;' } }" 
        v-tooltip.bottom="'Меню страницы'"/>
    </template>
  </Toolbar>
  <!--
  <div style="height:42px;display:flex;align-items: center;justify-content: space-between; ">
    <div style="display:flex; align-items: center;">

      <div v-tooltip="'Открыть меню'" v-if="!sidebarVisible" class="mdi mdi-menu topbar-icon"
        @click="emit('showSidebar')"></div>

      <div style="height:45px;width:30px;display:flex;align-items: center;justify-content:center" v-if="hamburgerVisible">
        <div class="mdi mdi-menu" style="font-size: 20px;line-height:20px;" @click="this.$emit('showSidebar')"></div>
      </div>
      <TopbarBreadcrumb :nav="nav"></TopbarBreadcrumb>
    </div>

    <div style="display:flex; align-items: center;">
      <a v-ripple
        class="text-600 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
        <div v-tooltip="'Пригласить участника'" class="mdi mdi-share-variant-outline topbar-icon" @click="invite = true">
        </div>
      </a>

      <a v-ripple
        class="text-600 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
        <div v-tooltip="'Обсуждение'" class="mdi mdi-message-text-outline topbar-icon" @click="toggleChatbar1"></div>
      </a>

      <a v-ripple
        class="text-600 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
        <div v-tooltip="'Лента активности'" class="mdi mdi-clock-outline topbar-icon" @click="toggleActivebar1"></div>
      </a>

      <a v-ripple
        class="text-600 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
        <div v-if="!favorite" v-tooltip.left="'Добавить в избранное'" class="mdi mdi-star-outline topbar-icon"
          @click="favorite = true"></div>
        <div v-if="favorite" v-tooltip="'Исключить из избранного'" class="mdi mdi-star topbar-icon"
          @click="favorite = false"></div>
      </a>

      <a v-ripple
        class="text-600 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
        <div v-tooltip="'Открыть контекстное меню'" class="mdi mdi-dots-horizontal topbar-icon" @click="toggleOverbar">
        </div>
      </a>
    </div>

  </div>
  -->
  <OverlayPanel ref="overbar" style="right:0;width:300px;
      height:calc(100% - 68px);overflow-y:scroll;padding:0;">
    <Overbar></Overbar>
  </OverlayPanel>

  <DialogInvite :dialogVisible="invite"></DialogInvite>
</template>
<script setup>
import TopbarBreadcrumb from './Topbar/Breadcrumb.vue';
import Overbar from './Overbar.vue';
import DialogInvite from '../../Dialog/Invite.vue';
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import router from '../../../router';
// import { useRoute } from 'vue-router';


const props = defineProps(['nav', 'sidebarVisible', 'ChatbarVisible']);
const emit = defineEmits(['showSidebar', 'toggleChatbar', 'toggleActivebar']);
const overbar = ref();

// const route = useRoute();

const favorites = useStorage('favorites', []);
const watches = useStorage('watches', []);
const lnav = props.nav[props.nav.length - 1];
const route = {
  url: lnav?.url || router.currentRoute.value.path,
  label: lnav?.label || router.currentRoute.value.path,
  icon: lnav?.icon || 'mdi mdi-document-outline'
};
const favoriteIndex = ref(favorites.value.findIndex(d => d.url == route.url));
const watchIndex = ref(watches.value.findIndex(d => d.url == route.url));

function toggleWatch() {
  if (watchIndex.value >= 0) {
    watches.value.splice(watchIndex.value, 1);
  } else {
    watches.value.push(route);
  }
  watchIndex.value = watches.value.findIndex(d => d.url == route.url);
  console.log(112, watchIndex, watches.value);
}


function toggleFavorite() {
  if (favoriteIndex.value >= 0) {
    favorites.value.splice(favoriteIndex.value, 1);
  } else {
    favorites.value.push(route);
  }
  favoriteIndex.value = favorites.value.findIndex(d => d.url == route.url);
  console.log(112, favoriteIndex, favorites.value);
}

const invite = ref();
const favorite = ref(false);

const toggleOverbar = (event) => {
  overbar.value.toggle(event);
};

const toggleChatbar1 = (event) => {
  console.log('toggleChatbar1');
  emit('toggleChatbar');
}

const toggleActivebar1 = (event) => {
  console.log('toggleActivebar1');
  emit('toggleActivebar');
}

</script>
<style >
.p-overlaypanel .p-overlaypanel-content {
  padding: 8px;
}
</style>