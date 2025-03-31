<template>
  <div style="display:flex;flex-direction: column;height:100%;">

    <MainTopbar :nav="nav" :sidebarVisible='sidebarVisible' @showSidebar="sidebarVisible = true"
      :chatbarVisible='chatbarVisible' @toggleChatbar="toggleChatbar1" :activebarVisible='activebarVisible'
      @toggleActivebar="toggleActivebar1"></MainTopbar>

    
      <Splitter style="height:calc(100vh - 50px);" :stateKey="'mainSplitterPanel'" :glutterSize="2"
        class="transition-duration-1000">
        <SplitterPanel :size="20" v-show="sidebarVisible">
          <MainSidebar @hideSidebar="sidebarVisible = false"></MainSidebar>
          <!-- <AppSidebar @hideSidebar="sidebarVisible = false"></AppSidebar> -->
        </SplitterPanel>
        <SplitterPanel :size="60" style="height:calc(100vh - 50px);">

          <div style="overflow-y:scroll;height:calc(100vh - 50px);">
            <slot></slot>

          </div>
        </SplitterPanel>
        <SplitterPanel v-show="chatbarVisible || activebarVisible" :size="20">
          <MainChatbar v-show="chatbarVisible" @hideChatbar="chatbarVisible = false"></MainChatbar>
          <MainActivebar v-show="activebarVisible" @hideActivebar="activebarVisible = false"></MainActivebar>
        </SplitterPanel>
      </Splitter>
    
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import MainSidebar from './Main/Sidebar.vue';
import MainActivebar from './Main/Activebar.vue';
import MainChatbar from './Main/Chatbar.vue';
import MainTopbar from './Main/Topbar.vue';


defineProps(['nav']);
const sidebarVisible = useStorage('sidebarVisible', false);
const chatbarVisible = ref(false);
const activebarVisible = ref(false);

const toggleChatbar1 = (event) => {
  console.log('toggleChatbar1', chatbarVisible.value);
  chatbarVisible.value = !chatbarVisible.value;
  activebarVisible.value = false;
}

const toggleActivebar1 = (event) => {
  console.log('toggleActivebar1', activebarVisible.value);
  activebarVisible.value = !activebarVisible.value;
  chatbarVisible.value = false;
}

</script>