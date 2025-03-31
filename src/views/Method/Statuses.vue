<template>
  <li>
    <a v-ripple @click="emit('setMenu', General); emit('setComponent', GeneralDescription)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="mdi mdi-chevron-left md:mr-2"></i>
      <span class="font-medium hidden md:block">Назад</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ProductStatuses)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Статусы продуктов</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', PageStatuses)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Статусы страниц</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ContentStatuses)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Статусы контента</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', TaskStatuses)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Статусы задач</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ActivityStatuses)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Статусы активностей</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ArtefactStatuses)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Статусы артефактов</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ConnectionStatuses)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Статусы соединений</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', IntegrationStatuses)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Статусы интеграций</span>
    </a>
  </li>
</template>
<script setup>
import ProductStatuses from './Statuses/ProductStatuses.vue';
import PageStatuses from './Statuses/PageStatuses.vue';
import ContentStatuses from './Statuses/ContentStatuses.vue';
import TaskStatuses from './Statuses/TaskStatuses.vue';
import ActivityStatuses from './Statuses/ActivityStatuses.vue';
import ArtefactStatuses from './Statuses/ArtefactStatuses.vue';
import ConnectionStatuses from './Statuses/ConnectionStatuses.vue';
import IntegrationStatuses from './Statuses/IntegrationStatuses.vue';
import General from './General.vue';
import GeneralDescription from './General/Description.vue';

const emit = defineEmits(['setMenu', 'setComponent']);
</script>