<template>
  <li>
    <a v-ripple @click="emit('setMenu', General); emit('setComponent', GeneralDescription)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="mdi mdi-chevron-left md:mr-2"></i>
      <span class="font-medium hidden md:block">Назад</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ProductTypes)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Типы продуктов</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', PageTypes)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Типы страниц</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ContentTypes)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Типы контента</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', TaskTypes)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Типы задач</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ActivityTypes)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Типы активностей</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ArtefactTypes)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Типы артефактов</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', ConnectionTypes)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Типы соединений</span>
    </a>
  </li>

  <li>
    <a v-ripple @click="emit('setComponent', IntegrationTypes)"
      class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-user md:mr-2"></i>
      <span class="font-medium hidden md:block">Типы интеграций</span>
    </a>
  </li>
</template>
<script setup>
import ProductTypes from './Types/ProductTypes.vue';
import PageTypes from './Types/PageTypes.vue';
import ContentTypes from './Types/ContentTypes.vue';
import TaskTypes from './Types/TaskTypes.vue';
import ActivityTypes from './Types/ActivityTypes.vue';
import ArtefactTypes from './Types/ArtefactTypes.vue';
import ConnectionTypes from './Types/ConnectionTypes.vue';
import IntegrationTypes from './Types/IntegrationTypes.vue';
import General from './General.vue';
import GeneralDescription from './General/Description.vue';


const emit = defineEmits(['setMenu', 'setComponent']);
</script>