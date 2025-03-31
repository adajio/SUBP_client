<template>
    <div style="display:flex;flex-direction: row;">
        <!-- <Sidebar1 @hideSidebar="emit('hideSidebar')"></Sidebar1> -->
        <Sidebar2 @hideSidebar="emit('hideSidebar')"></Sidebar2>
    </div>
</template>
<script setup>
import Sidebar1 from './Sidebar1.vue';
import Sidebar2 from './Sidebar2.vue';
const emit = defineEmits(['hideSidebar']);
</script>