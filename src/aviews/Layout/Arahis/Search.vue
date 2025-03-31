<template>
  <Dialog dismissableMask modal :showHeader="false"
    :visible="visible"
    @update:visible="emit('update:visible')"
    @show="text=searchText"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }" contentClass="border-round-top p-0"
    appendTo="body" >
    <div class="flex w-full surface-section align-items-center justify-content-between px-1">
      <span class="p-input-icon-left w-full">
        <i class="pi pi-search text-500"></i>
        <InputText autofocus :modelValue="text" type="text" placeholder="Поиск моделей, объектов, связей и атрибутов..." 
          class="w-full border-none shadow-none outline-none" @update:modelValue="updateModelValue" />
      </span>
      <!-- <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs hidden md:block">⌘K</span> -->
    </div>
    <div class="border-y-1 surface-border px-3 py-3">
      <h2 class="font-semibold text-xs text-500 mb-2 mt-0 px-1">ПОСЛЕДНИЕ ЗАПРОСЫ</h2>
      <ul class="list-none m-0 p-0">
        <li v-for="recent in recents"
          class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">
          {{recent}}</li>

        <!-- <li
          class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">
          мобильн*</li>
        <li
          class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">
          семенов</li> -->
      </ul>
    </div>
    <div class="p-2">
      <article v-for="result in results"
        class="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
        <div class="flex align-items-center">
          <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
            <i :class="result?.icon || 'mdi mdi-text'" class="text-lg"></i>
          </span>
          <div class="ml-2">
            <p class="font-semibold text-sm mt-0 mb-1">{{ result.name }}</p>
            <p class="font-normal text-xs text-600 mt-0 mb-0">{{ result.text }}</p>
          </div>
        </div>
        <!-- <span
          class="hidden md:inline-block border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">S</span> -->
      </article>


    </div>
  </Dialog>

                    

</template>
<script setup>

import { ref } from 'vue';
import {voix} from '#/voix';
const props = defineProps(['visible','searchText']);
const emit = defineEmits(['update:visible', 'update:searchText']);

const ok = () => {
  emit('update:visible');
}
const cancel = () => {
  emit('update:searchText');
  emit('update:visible');
}

const text = ref('');
const results = ref([]);

// const results = ref([
//   {name:'Татьяна Иванова',text:'Продакт-менеджер', design:{icon:'mdi mdi-account'}},
//   {name:'Портфель проектов Ивановой Т.',text:'Портфель', design:{icon:'mdi mdi-briefcase-variant-outline'}},
//   {name:'Ивановские кружева',text:'Продукт', design:{icon:'mdi mdi-package-variant'}},
//   {name:'Диван SKALDE: Цифровой двойник ',text:'Продукт', design:{icon:'mdi mdi-package-variant'}},
//   {name:'Ивановский текстиль',text:'Продукт', design:{icon:'mdi mdi-package-variant'}},
//   {name:'Ивановская игрушка',text:'Продукт', design:{icon:'mdi mdi-package-variant'}},
//   {name:'Ивановские моторы',text:'Продукт', design:{icon:'mdi mdi-package-variant'}},
//   {name:'Иван да Марья',text:'Продукт', design:{icon:'mdi mdi-package-variant'}},
// ]);

const recents = ref([
  'орг'
]);
// const recents1 = ref([
//   'иван*',
//   'мобильн*',
//   'семенов',
// ]);

function updateModelValue(data) {
  text.value = data;
  voix('arahis/search',{text:text.value}).then((res)=>results.value = res.results);
  

  // axios.post(`${API_URL}/api/get/sidebar/search`,{text}).then(({data})=>{
  //   // console.log(115,data);
  //   results.value = data.results;
  // })
  // console.log(113,this,arguments);
}

</script>