<template>
  <LayoutMain :nav="nav">


    <div class="min-h-screen flex relative lg:static surface-ground">

      <div class="min-h-screen flex flex-column relative flex-auto">

        <div class="flex flex-column flex-auto">
          <div class="surface-section p-5">
            <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
              <div class="flex align-items-start flex-column md:flex-row">
                <img :src="actor.design?.image" class="mr-5 mb-3 lg:mb-0" style="width:90px;height:90px" />
                <div>
                  <div style="display:flex">
                    <div class="text-900 font-medium text-3xl">{{ actor.name }}</div>
                  </div>
                  <div style="color:var(--gray-400)">{{ actor.title }}</div>
                  <div class="flex align-items-center flex-wrap text-sm">
                    <router-link :to="'/portfolio'">
                      <div class="mr-5 mt-3">
                        <span class="font-medium text-500">ПОРТФЕЛЕЙ</span>
                        <div class="text-700 mt-2">{{ stats.portfolios }}</div>
                      </div>
                    </router-link>

                    <router-link :to="'/product'">
                      <div class="mr-5 mt-3">
                        <span class="font-medium text-500">ПРОДУКТОВ</span>
                        <div class="text-700 mt-2"> {{ stats.products }}</div>
                      </div>
                    </router-link>
                    <router-link :to="'/page'">
                      <div class="mr-5 mt-3">
                        <span class="font-medium text-500">СТРАНИЦ</span>
                        <div class="text-700 mt-2"> {{ stats.pages }}</div>
                      </div>
                    </router-link>
                    <router-link :to="'/artefact'">
                      <div class="mr-5 mt-3">
                        <span class="font-medium text-500">АРТЕФАКТОВ</span>
                        <div class="text-700 mt-2"> {{ stats.artefacts }}</div>
                      </div>
                    </router-link>
                    <router-link :to="'/task'">
                      <div class="mr-5 mt-3">
                        <span class="font-medium text-500">ЗАДАЧ</span>
                        <div class="text-700 mt-2"> {{ stats.tasks }}</div>
                      </div>
                    </router-link>
                    <router-link :to="'/activity'">
                      <div class="mr-5 mt-3">
                        <span class="font-medium text-500">АКТИВНОСТЕЙ</span>
                        <div class="text-700 mt-2">{{ stats.activities }}</div>
                      </div>
                    </router-link>
                    <router-link :to="'/method'">
                      <div class="mr-5 mt-3">
                        <span class="font-medium text-500">МЕТОДОЛОГИЙ</span>
                        <div class="text-700 mt-2"> {{ stats.methods }}</div>
                      </div>
                    </router-link>
                    <router-link :to="'/integration'">
                      <div class="mr-5 mt-3">
                        <span class="font-medium text-500">ИНТЕГРАЦИЙ</span>
                        <div class="text-700 mt-2"> {{ stats.integrations }}</div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="mt-3 lg:mt-0">
                <Rating v-model="actor.rating" :cancel="false" readonly style="padding-left:20px"></Rating>

                <!-- <Button icon="pi pi-bookmark" class="p-button-rounded mr-2"></Button>
                <Button icon="pi pi-heart" class="p-button-rounded p-button-success mr-2"></Button>
                <Button icon="pi pi-list" class="p-button-rounded p-button-help"></Button> -->
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="grid">
              <div class="col-12 lg:col-6 xl:col-3">
                <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                  <div class="flex justify-content-between mb-3">
                    <div>
                      <span class="block text-500 font-medium mb-3">Задачи</span>
                      <div class="text-900 font-medium text-xl">3</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
                      style="width:2.5rem;height:2.5rem">
                      <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                  </div>
                  <span class="text-green-500 font-medium">1 новая </span>
                  <span class="text-500">с последнего посещения</span>
                </div>
              </div>
              <div class="col-12 lg:col-6 xl:col-3">
                <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                  <div class="flex justify-content-between mb-3">
                    <div>
                      <span class="block text-500 font-medium mb-3">Участие в продуктах</span>
                      <div class="text-900 font-medium text-xl">2</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round"
                      style="width:2.5rem;height:2.5rem">
                      <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                  </div>
                  <span class="text-green-500 font-medium">1 новый </span>
                  <span class="text-500">в течение недели</span>
                </div>
              </div>
              <div class="col-12 lg:col-6 xl:col-3">
                <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                  <div class="flex justify-content-between mb-3">
                    <div>
                      <span class="block text-500 font-medium mb-3">Активностей</span>
                      <div class="text-900 font-medium text-xl">386</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round"
                      style="width:2.5rem;height:2.5rem">
                      <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                  </div>
                  <span class="text-green-500 font-medium">52 </span>
                  <span class="text-500">новых</span>
                </div>
              </div>
              <div class="col-12 lg:col-6 xl:col-3">
                <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                  <div class="flex justify-content-between mb-3">
                    <div>
                      <span class="block text-500 font-medium mb-3">Комментарии</span>
                      <div class="text-900 font-medium text-xl">152 не прочтено</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round"
                      style="width:2.5rem;height:2.5rem">
                      <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                  </div>
                  <span class="text-green-500 font-medium">85 </span>
                  <span class="text-500">отвечено</span>
                </div>
              </div>

              <div class="col-12 xl:col-6">
                <div class="surface-card shadow-2 border-round p-4" style="height:500px;">
                  <div class="text-xl text-900 font-medium mb-5">Лента новостей</div>
                  <ul class="list-none p-0 m-0">

                    <li v-for="item in activities" class="pb-3 border-bottom-1 surface-border">
                      <router-link :to="'/activity'">
                        <div class="font-medium text-900 mb-2">{{ item.activity.name }}</div>
                        <div class="line-height-3 text-600" style="max-width: 30rem">{{ item.activity.text }}</div>
                      </router-link>
                    </li>
                  </ul>
                  <!-- <div class="flex justify-content-between pt-3">
                    <Button label="Clear All" class="p-button-outlined p-button-secondary w-6 mr-2"></Button>
                    <Button label="New Entry" class="p-button-outlined w-6 ml-2"></Button>
                  </div> -->
                </div>
              </div>
              <div class="col-12 xl:col-6">
                <div class="surface-card shadow-2 border-round p-4" style="height:500px;">
                  <div class="flex justify-content-between align-items-center mb-5">
                    <span class="text-xl text-900 font-medium">Команда</span>
                    <div>
                      <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                        @click="$refs.cag.toggle($event)"></Button>
                      <Menu ref="cag" :popup="true" :model="items" appendTo="body"></Menu>
                    </div>
                  </div>
                  <ul class="list-none p-0 m-0">

                    <li v-for="item in actors"
                      class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                      <router-link :to="'/actor'">
                        <div class="flex">
                          <img :src="item.actor.design?.image" class="mr-3" style="width: 45px; height: 45px" />
                          <div>
                            <span class="block text-900 font-medium mb-1">{{ item.actor.name }}</span>
                            <div class="text-600">{{ item.actor.title }}</div>
                          </div>
                        </div>
                      </router-link>
                      <div class="mt-2 md:mt-0 flex flex-nowrap">
                        <Rating v-model="item.actor.rating" :cancel="false" readonly></Rating>
                        <!-- <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button> -->
                      </div>
                    </li>

                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>


  </LayoutMain>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { API_URL } from '../constants';

const nav = ref([{label:'Начало', icon:'🏠', url:'/home'}]);
const actor = ref({});
const actor_type = ref({});
const stats = ref({});
const actors = ref([]);
const activities = ref([]);

axios.post(`${API_URL}/api/get/home/actor`, { code: 'EPETROVA' })
  .then(({ data }) => {
    actor.value = data?.actor;
    actor_type.value = data?.actor_type;
    stats.value = data?.stats;
    actors.value = data?.actors;
    activities.value = data?.activities;

    console.log(287, data);
  });




</script>