<template>
    <Dialog dismissableMask modal :showHeader="false"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }" contentClass="border-round-top p-0"
    appendTo="body" @hide="visible1 = false; value1 = '';">
  <div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-3">
      <div class="text-900 font-medium text-xl">Активности</div>
      <div>
        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
          @click="$refs.menu2.toggle($event)"></Button>
        <Menu ref="menu2" :popup="true" :model="menu"></Menu>
      </div>
    </div>
    <ul class="list-none p-0 m-0">

      <li v-for="item in activities"
        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
        <div class="flex align-items-start mr-0 lg:mr-5">
          <img  
              :src="item?.actor?.design?.image"
          class="mr-3 w-3rem h-3rem" />
          <div>
            <span class="text-900 font-medium block mb-2">{{ item?.actor?.name }}</span>
            <div class="text-700 mb-2">{{ item.activity.name }}</div>
            <a class="text-primary cursor-pointer" :href="item.artefact?.url">
              <i :class="item.artefact?.design?.icon" class="" style="font-size:20px;padding:4px"></i>
              <span> {{item.artefact?.name}}</span>
            </a>
          </div>
        </div>
        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">{{ item.activity?.datetime }}</span>
      </li>


      <!-- <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="/images/blocks/avatars/circle-big/avatar-m-1.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Robert Fox</span>
                    <div class="text-700">changed team size from <span class="text-900 font-medium">5</span> to <span class="text-900 font-medium">6</span>.</div>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
        </li> -->
      <!-- <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="/images/blocks/avatars/circle-big/avatar-f-2.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                    <div class="text-700 mb-2">created a Q4 presentation to an issue.</div>
                    <a class="text-primary cursor-pointer">
                        <i class="pi pi-file-pdf text-sm mr-2"></i>
                        <span>q4_presentation.pdf</span>
                    </a>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
        </li>
        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="/images/blocks/avatars/circle-big/avatar-f-3.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Annette Black</span>
                    <div class="text-700">added <span class="text-900 font-medium">Nico Greenberg</span> to <span class="text-primary">Watchlist Tier-1</span>.</div>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
        </li>
        <li class="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="/images/blocks/avatars/circle-big/avatar-m-2.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Floyd Miles</span>
                    <div class="text-700">has refunded a blue t-shirt for <span class="text-primary">$79</span>.</div>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
        </li> -->
    </ul>
  </div>
  </Dialog>
</template>
<script setup>
import { ref } from 'vue';

const activities = ref([
  {
    activity: { name: 'Закрыл issue', datetime: '11 минут минут',  },
    actor: { name: 'Сергей Семенов', design: { image: "/images/blocks/avatars/circle/avatar-m-1.png" } },
    artefact: { name: 'Issue #1453', design: { icon: 'mdi mdi-github' },url: 'https://github.com/AlaSQL/alasql/issues/1684' }
  },
  {
    activity: { name: 'Подготовлен расчет с экономическим обоснованием проекта', datetime: '2 дня назад', },
    actor: { name: 'Валентина Цекало', design: { image: "/images/blocks/avatars/circle/avatar-f-1.png" } },
    artefact: { name: 'Расчет-обоснование 2.xlsx', design: { icon: 'mdi mdi-file-excel-outline' },url: 'https://github.com/AlaSQL/alasql/issues/1684' }
  },
  {
    activity: { name: 'Проведен анализ конкурентов', datetime: '4 дня назад', },
    actor: { name: 'Петр Южанин', design: { image: "/images/blocks/avatars/circle/avatar-m-2.png" } },
    artefact: { name: 'Анализ конкурентов.docx', design: { icon: 'mdi mdi-file-word-outline' },url: 'https://github.com/AlaSQL/alasql/issues/1684' }
  },


  {
    activity: { name: 'Выпустил релиз', datetime: '6 дней назад', },
    actor: { name: 'Валентин Огорошкин', design: { image: "/images/blocks/avatars/circle/avatar-m-3.png" } },
    artefact: { name: 'Релиз 1.2.1', design: { icon: 'mdi mdi-github' },url: 'https://github.com/AlaSQL/alasql/issues/1684' }
  },
  {
    activity: { name: 'Проведен custdev', datetime: '6 дней назад', },
    actor: { name: 'Эдуард Смурный', design: { image: "/images/blocks/avatars/circle/avatar-m-4.png" } },
    artefact: { name: 'Результаты CustDev.docx', design: { icon: 'mdi mdi-file-word-outline' },url: 'https://github.com/AlaSQL/alasql/issues/1684' }
  },
  {
    activity: { name: 'Проведен предварительный анализ конкурентов', datetime: '10 дней назад', },
    actor: { name: 'Светлана Семченко', design: { image: "/images/blocks/avatars/circle/avatar-f-2.png" } },
    artefact: { name: 'Анализ конкурентов.docx', design: { icon: 'mdi mdi-file-word-outline' },url: 'https://github.com/AlaSQL/alasql/issues/1684' }
  },
  {
    activity: { name: 'Собраны идеи', datetime: '11 дней назад', },
    actor: { name: 'Захар Солнцев', design: { image: "/images/blocks/avatars/circle/avatar-m-5.png" } },
    artefact: { name: 'Как обслужить клиентов лучше?', design: { icon: 'mdi mdi-head-question-outline' },url: 'https://github.com/AlaSQL/alasql/issues/1684' }
  },
  {
    activity: { name: 'Проведен обследование', datetime: '14 дней назад', },
    actor: { name: 'Милана Верескова', design: { image: "/images/blocks/avatars/circle/avatar-m-6.png" } },
    artefact: { name: 'Отчет об обследовании.docx', design: { icon: 'mdi mdi-file-word-outline' },url: 'https://github.com/AlaSQL/alasql/issues/1684' }
  },
]);

const menu = ref([{
    label: "Варианты",
    items: [{
      label: "Обновить",
      icon: "pi pi-fw pi-refresh"
    }, {
      label: "Поиск",
      icon: "pi pi-fw pi-search"
    }]
  }]);


</script>