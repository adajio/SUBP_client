<template>
  <LayoutMain :nav="nav">
    <div style="display:flex;flex-direction: column; ">
      <div>
        <img :src="method.design?.image" style="
      width:100%;height:20vh;object-position: center 90%;object-fit: cover;">
      </div>
      <div style="display:flex;flex-direction: column;align-items: center;">
        <div style="width:1200px;display:flex;flex-direction: column;">
          <div>
            <div v-if="/\p{Emoji}/u.test(method?.design?.icon)" role="img" :aria-label="method.design.icon" style="
              font-family: &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, NotoColorEmoji, &quot;Noto Color Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Android Emoji&quot;, EmojiSymbols; 
              font-size:78px;
              line-height: 78px; 
              margin-top:-42px;
              width:78px;
              height:78px;
              position: relative;
              white-space: nowrap;">{{ method?.design?.icon }}
            </div>
            <div v-else-if="method?.design?.icon" role="img" :aria-label="method?.icon" :class="method.design?.icon"
              style="
              font-size:78px;
              line-height: 78px; 
              margin-top:-42px;
              width:78px;
              height:78px;
              position: relative;
              white-space: nowrap;">
            </div>
            <div v-else></div>
          </div>

          <div style="margin-top: 12px;margin-bottom: 4px;height:24px;color:rgba(55, 53, 47, 0.5);display:flex">

            <div>
              <a href="#"><i class="mdi mdi-plus-circle-outline"></i>
                Новая интеграция
              </a>
            </div>
            <!-- <div style="padding-left:10px">
              <a href="#"><i class="mdi mdi-folder-plus-outline"></i>
                Новая папка
              </a>
            </div> -->
            <div style="padding-left:10px">
              <a href="#">
                <i class="mdi mdi-comment-outline"></i>
                Обсуждение
              </a>
            </div>
          </div>

          <div style="display:flex; justify-content: space-between;align-items: center;">
            <div class="" style="font-size:40px;font-weight:700">
              {{ method?.name }} 
            </div>
            <div v-tooltip="'Изменить представление'"
              class="text-600 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
              style="padding:8px" @click="toggleIntegrationsViewMenu">
              <Menu ref="integrationsViewMenu" id="integrationsViewMenu" :model="integrationsViewMenuItems" :popup="true"></Menu>
              <i v-ripple class="mdi mdi-format-list-bulleted"></i>
              <i v-ripple class="mdi mdi-unfold-more-horizontal"></i>
            </div>
          </div>


          <div class="grid">

            <div v-for="item in integrations" class="col-12 lg:col-4 p-3">
              <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div class="p-4">
                  <div class="flex align-items-center">
                    <span class="inline-flex border-circle align-items-center justify-content-center  mr-3"
                      style="width: 38px; height: 38px" :style="{backgroundColor:item.design.backgroundColor}">
                      <i :class="item.design?.icon" class="pi pi-briefcase text-xl " :style="{сolor:item.design.color}"></i>
                    </span>

                    <span class="text-900 font-medium text-2xl">{{ item.name }}</span>
                  </div>
                  <div class="text-900 my-3 text-xl font-medium">Методология</div>
                  <p  class="mt-0 mb-3 text-700 line-height-3">{{ item.text }}</p>
                </div>
                <div class="px-4 py-3 surface-100 text-right">
                  <Button icon="pi pi-arrow-right" iconPos="right" label="Создать продукт"
                    class="p-button-rounded p-button-success"></Button>
                </div>
              </div>
            </div>
            <!-- <div class="col-12 lg:col-4 p-3">
              <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div class="p-4">
                  <div class="flex align-items-center">
                    <span class="inline-flex border-circle align-items-center justify-content-center bg-yellow-100 mr-3"
                      style="width: 38px; height: 38px">
                      <i class="pi pi-globe text-xl text-yellow-600"></i>
                    </span>

                    <span class="text-900 font-medium text-2xl">Card Title</span>
                  </div>
                  <div class="text-900 my-3 text-xl font-medium">Proin libero nunci</div>
                  <p class="mt-0 mb-3 text-700 line-height-3">Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper.
                    Vulputate odio ut enim blandit volutpat maecenas. Convallis tellus id interdum velit.</p>
                </div>
                <div class="px-4 py-3 surface-100 text-right">
                  <Button icon="pi pi-download" iconPos="right" label="Load"
                    class="p-button-rounded p-button-warning"></Button>
                </div>
              </div>
            </div>
            <div class="col-12 lg:col-4 p-3">
              <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div class="p-4">
                  <div class="flex align-items-center">
                    <span class="inline-flex border-circle align-items-center justify-content-center bg-purple-100 mr-3"
                      style="width: 38px; height: 38px">
                      <i class="pi pi-image text-xl text-purple-600"></i>
                    </span>

                    <span class="text-900 font-medium text-2xl">Card Title</span>
                  </div>
                  <div class="text-900 my-3 text-xl font-medium">At obcaecati quos ipsam laboriosam.</div>
                  <p class="mt-0 mb-3 text-700 line-height-3">Rhoncus urna neque viverra justo nec ultrices dui sapien
                    eget.
                    Id
                    neque aliquam vestibulum morbi blandit cursus risus at ipsum.</p>
                </div>
                <div class="px-4 py-3 surface-100 text-right">
                  <Button icon="pi pi-bookmark" iconPos="right" label="Save"
                    class="p-button-rounded p-button-help"></Button>
                </div>
              </div>
            </div> -->

          </div>
        </div>

      </div>
    </div>


  </LayoutMain>
</template>
<script setup>
import { ref } from 'vue';

const method = ref({
  name:'Настроенные интеграции',
  design:{
    // icon:'mdi mdi-puzzle',
    icon:'ℹ️',
    image:'/img/integrations/storefront.jpeg'
  },
  
});

const integrations = ref([
  {name:'Scrum',text:`Сфокусирован на эффективности работы кросс-функциональных команд и обеспечении постоянного повышения гибкости процессов и результатов.`,design:{
    icon:'mdi mdi-glass-fragile',color:'var(--green-600)',backgroundColor:'var(--green-100)'
  }},
  {name:'Kanban',text:`Ориентирован на сглаживание рабочего потока, устранение бутылочных горлышек и непрерывное улучшение процессов разработки.`,design:{
    icon:'mdi mdi-view-sequential',color:'var(--yellow-600)',backgroundColor:'var(--yellow-100)'
  }},
  {name:'Extreme Programming (XP)',text:`Методология разработки, приоритизирующая качество кода и ориентирована на быстрое внедрение изменений благодаря инкрементальным улучшениям и взаимодействию команды.`,design:{
    icon:'mdi mdi-code-braces',color:'var(--purple-600)',backgroundColor:'var(--purple-100)'
  }},
  {name:'Lean Software Development',text:`Основывается на принципах «бережливого производства», направлен более на основные принципы максимизации ценности и устранения потерь, чем на конкретные методологии и инструменты.`,design:{
    icon:'mdi mdi-chart-timeline-variant',color:'var(--blue-600)',backgroundColor:'var(--blue-100)'
  }},
  {name:'Feature-Driven Development',text:`Разработка продукта на основе инкрементальной внедрения функций, что позволяет сформировать продукт, делая упор на основном его функционале и важных элементах.`,design:{
    icon:'mdi mdi-feature-search-outline',color:'var(--red-600)',backgroundColor:'var(--red-100)'
  }},
]);

const nav = ref({
  items: [
  {
      name: 'Настроенные интеграции',
      emoji:'ℹ️',
      route: '/integrations'
    },
  ]
});

const integrationsViewMenu = ref();
const toggleIntegrationsViewMenu = (event) => {
  integrationsViewMenu.value.toggle(event);
};

const integrationsViewMenuItems = ref([
  {
    label: 'Карточки',
    icon: 'mdi mdi-card-multiple-outline',
    command: () => {

    }
  },
  {
    label: 'Таблица',
    icon: 'mdi mdi-table',
    command: () => {

    }
  },
  {
    label: 'Канбан',
    icon: 'mdi mdi-view-grid-outline',
    command: () => {

    }
  },
  {
    label: 'Диаграмма Гантта',
    icon: 'mdi mdi-chart-gantt',
    command: () => {

    }
  }

]);

</script>
