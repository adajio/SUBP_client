<template>
            <li>
            <a v-ripple @click="emit('setComponent',GeneralDescription)"
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-user md:mr-2"></i>
              <span class="font-medium hidden md:block">Описание</span>
            </a>
          </li>
          <li>
            <a v-ripple @click="emit('setComponent',GeneralStages)"
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Этапы</span>
            </a>
          </li>
          <li>
            <a v-ripple @click="emit('setComponent',GeneralMembers)"
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Роли участников</span>
            </a>
          </li>
          <li>
            <a v-ripple @click="emit('setComponent',GeneralKinds)"
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-cog md:mr-2"></i>
              <span class="font-medium hidden md:block">Шаблоны</span>
            </a>
          </li>
          
          <li>
            <a v-ripple @click="emit('setComponent',GeneralCollections)"
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Коллекции</span>
            </a>
          </li>

          <li>
            <a v-ripple @click="emit('setMenu',Types);emit('setComponent',ProductTypes)"
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Типы</span>
            </a>
          </li>
          
          <li>
            <a v-ripple @click="emit('setMenu',Statuses);emit('setComponent',ProductStatuses)"
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы</span>
            </a>
          </li>

</template>
<script setup>
const emit = defineEmits(['setMenu','setComponent']);
import GeneralDescription from './General/Description.vue';
import GeneralStages from './General/Stages.vue';
import GeneralKinds from './General/Kinds.vue';
import GeneralMembers from './General/Members.vue';
import GeneralCollections from './General/Collections.vue';
import Types from './Types.vue';
import ProductTypes from './Types/ProductTypes.vue';
import ProductStatuses from './Statuses/ProductStatuses.vue';
import Statuses from './Statuses.vue';
</script>