<template>
  <Dialog dismissableMask modal :showHeader="false" :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '50vw' }" contentClass="border-round-top p-0" appendTo="body" @hide="visible1 = false; value1 = '';">

    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex align-items-center justify-content-between mb-3">
        <div class="text-900 font-medium text-xl">Задачи</div>
        <div>
          <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
            @click="$refs.menu2.toggle($event)"></Button>
          <Menu ref="menu2" :popup="true" :model="menu"></Menu>
        </div>
      </div>


      <div class="mt-5">
        <ul class="list-none m-0 p-0">

          <li v-for="item in tasks" class="py-5 border-top-1 surface-border">
            <div class="flex align-items-center justify-content-between mb-3">
              <div class="flex align-items-center">
                <img src="/images/blocks/avatars/circle/avatar-m-1.png" style="width:32px;height:32px;"
                  class1="w-3rem h-3rem flex-shrink-0 mr-3" class="flex-shrink-0 mr-3" />
                <div class="flex flex-column">
                  <span class="text-900 font-medium mb-1">{{ item.actor?.name }}</span>
                  <span class="text-500 font-medium text-sm"> {{ item.task?.due_date }}</span>
                </div>
              </div>
              <ProgressBar style="width:300px" :value="item.task?.progress"> {{ item.task?.progress }}/100</ProgressBar>

              <div style="display:flex;align-items: center;color:var(--gray-400);width:200px">
            <a href="#">
              <div v-tooltip="'Обсудить продукт'" class="mdi mdi-comment-outline" style="font-size: 20px;"></div>
            </a>
            <a href="#">
              <div v-tooltip="'Позвонить'" class="mdi mdi-phone-outline" style="font-size: 20px;"></div>
            </a>
            <a href="#">
              <div v-tooltip="'Отправить письмо'" class="mdi mdi-email-outline" style="font-size: 20px;"></div>
            </a>
            <div style="width:20px;height:20px;padding:2px" v-tooltip="'Отправить сообщение в Телеграм'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                  d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
              </svg>
            </div>
          </div>


                <!-- <div class="flex align-items-center">
                <span class="mr-2">
                  <i class="mdi mdi-star text-yellow-500"></i>
                  <i class="mdi mdi-star text-yellow-500"></i>
                  <i class="mdi mdi-star text-yellow-500"></i>
                  <i class="mdi mdi-star-outline text-yellow-500"></i>
                  <i class="mdi mdi-star-outline text-yellow-500"></i>
                </span>
                <span class="font-medium">{{ item.task.progress }}</span>
              </div> -->
            </div>
            <p class="text-600 p-0 m-0 line-height-3" v-html="item.task.text"></p>

            <div v-for="block in item.task.content" style="padding:4px;">
              <Checkbox v-model="block.value" inputId="ingredient1" name="pizza" value="true"></Checkbox>
              <label for="ingredient1" class="ml-2" > {{ block.name }} </label>
            </div>

            <div style="display:flex; flex-direction: row;align-content: center; padding:8px;">
              <a v-for="artefact in item?.artefacts" style="display:flex; flex-direction: row;align-content: center;
                padding:8px;cursor:pointer;">

                <div :class="artefact.design?.icon" style="font-size:20px;width:20px;height:20px;"></div>
                <div>{{ artefact.name }}</div>
              </a>

            </div>
          </li>
          <!-- <li class="py-5 border-top-1 surface-border">
          <div class="flex align-items-center justify-content-between mb-3">
            <div class="flex align-items-center">
              <img src="/images/blocks/avatars/circle/avatar-f-3.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
              <div class="flex flex-column">
                <span class="text-900 font-medium mb-1">Savannah Williams</span>
                <span class="text-500 font-medium text-sm">February 4, 2022</span>
              </div>
            </div>
            <div class="flex align-items-center">
              <span class="mr-2">
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500"></i>
              </span>
              <span class="font-medium">5</span>
            </div>
          </div>
          <p class="text-600 p-0 m-0 line-height-3">Orci porta non pulvinar neque laoreet suspendisse interdum
            consectetur. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.</p>
        </li>
        <li class="py-5 border-top-1 surface-border">
          <div class="flex align-items-center justify-content-between mb-3">
            <div class="flex align-items-center">
              <img src="/images/blocks/avatars/circle/avatar-f-2.png" class="w-3rem h-3rem flex-shrink-0 mr-3" />
              <div class="flex flex-column">
                <span class="text-900 font-medium mb-1">Kathryn Murphy</span>
                <span class="text-500 font-medium text-sm">February 5, 2022</span>
              </div>
            </div>
            <div class="flex align-items-center">
              <span class="mr-2">
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500"></i>
              </span>
              <span class="font-medium">5</span>
            </div>
          </div>
          <p class="text-600 p-0 m-0 line-height-3">Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.
            Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. </p>
        </li> -->
        </ul>
      </div>
    </div>


  </Dialog>
</template>
<script setup>
import { ref } from 'vue';

const tasks = ref([
  {
    task: {
      name: 'Переработать экраны по продуктам',
      text: `<p>Обязательна доработка экранов:    
    `, due_date: '12.04.2023 15:00', progress: 50,
      content: [
        { name: 'Профиль пользователя', value: false },
        { name: 'Настройки', value: true },
      ]
    },
    actor: {
      name: 'Сергей Семенов', design: {
        image: 'images/blocks/avatars/circle/avatar-m-1.png'
      }
    },
    artefacts: [
      { name: 'Техническое задание.docx', design: { icon: 'mdi mdi-file-word-outline' } },
      { name: 'Customer journey map 2', design: { icon: 'mdi mdi-google-drive' } }
    ]
  },
  {
    task: {
      name: 'Выпустить релиз',
      // text: `<p>Обязательна доработка экранов:    
      due_date: '27.05.2023', progress: 75,
    },
    actor: {
      name: 'Василий Соломатин', design: {
        image: 'images/blocks/avatars/circle/avatar-m-2.png'
      }
    },
    artefacts: [
      { name: 'Release 1.2.1', url: 'https://github.com/mekterovic/jqOlapCube/issues/2', design: { icon: 'mdi mdi-github' } },
    ]
  },
  {
    task: {
      name: 'Провести опрос пользователей',
      // text: `<p>Обязательна доработка экранов:    
      due_date: '28.05.2023', progress: 10,
    },
    actor: {
      name: 'Ализа Селезнева', design: {
        image: 'images/blocks/avatars/circle/avatar-f-4.png'
      }
    },
    artefacts: [
      { name: 'Форма опроса пользователей', 
      url: 'https://github.com/mekterovic/jqOlapCube/issues/2', design: { icon: 'mdi mdi-table-question' } },
    ]
  },
  {
    task: {
      name: 'Подготовить форму опроса пользователей',
      // text: `<p>Обязательна доработка экранов:    
      due_date: '12.05.2023', progress: 100,
    },
    actor: {
      name: 'Ализа Селезнева', design: {
        image: 'images/blocks/avatars/circle/avatar-f-4.png'
      }
    },
    artefacts: [
      { name: 'Форма опроса пользователей', 
      url: 'https://github.com/mekterovic/jqOlapCube/issues/2', design: { icon: 'mdi mdi-table-question' } },
    ]
  }      
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