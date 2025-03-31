<template>
  <Breadcrumb :home="nav.home || home" :model="nav.items || []" style="border: none;padding: 8px;"
    :pt="{ separator: { style: 'margin-right:4px;margin-left:4px;' } }">
    <template #separator>
      /
    </template>

    <template #item="{ item }">
      <router-link :to="item.route">
        <div v-ripple class="text - 600 hover: text - 900 hover: surface - 100 border - round cursor - pointer transition - colors transition - duration - 150 p - ripple">

          <span v-if="/\p{Emoji}/u.test(item.icon)" role="img" :aria-label=" item.emoji " class="topbar-emoji">{{ item.icon }}</span>
          <span v-else-if="item.icon" :class="item.icon" class="topbar-icon" style="padding-left:0px"></span>

          <span> {{ item.name }}</span>
        </div>
      </router-link>
    </template>
  </Breadcrumb>
</template>
<script setup>
import { ref } from 'vue';
defineProps(['nav']);

const home = ref({
  icon: '🏠',
  route: '/home'
});
</script>