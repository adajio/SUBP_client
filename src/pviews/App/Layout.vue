<template>
  <LayoutTopbar :title="title"></LayoutTopbar>
  <div class="p-5 w-full">
    <slot></slot>
  </div>
</template>
<script setup>
import LayoutTopbar from './Layout/Topbar.vue';
const props = defineProps(['title']);
</script>