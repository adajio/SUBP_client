<template>
    <div style="background-color: var(--primary-50);display:flex;flex-direction: column;height:calc(100vh - 45px);">
        <!-- ВЕРХНЯЯ ЧАСТЬ -->
        <div>
            <div style="display:flex;justify-content: space-between;padding:10px">
                <div style="display:flex;align-items: center;">
                    <Avatar image="/images/avatar/onyamalimba.png" shape="circle" style="width:20px;height:20px;">
                    </Avatar>
                    <div style="padding-left:10px">Евгений Серебрянко</div>
                </div>
                <div @click="emit('hideSidebar')" v-tooltip="'Закрыть меню'">
                    <i class="mdi mdi-chevron-double-left sidebar-icon hover"></i>
                </div>

            </div>

            <div class="sidebar-item" @click="dialogSearch = true">
                <i class="mdi mdi-magnify sidebar-icon"></i>
                <div style="padding-left:10px">Поиск</div>
            </div>

            <DialogSearch v-model:visible="dialogSearch"></DialogSearch>
            <DialogTasks v-model:visible="dialogTasks"></DialogTasks>
            <DialogActivities v-model:visible="dialogActivities"></DialogActivities>
            <DialogSetup v-model:visible="dialogSetup"></DialogSetup>
            <DialogImport v-model:visible="dialogImport"></DialogImport>

            <div class="sidebar-item" @click="dialogTasks = true">
                <i class="mdi mdi-calendar-check-outline sidebar-icon"></i>
                <div style="padding-left:10px">Задачи</div>
            </div>
            <div class="sidebar-item" @click="dialogActivities = true">
                <i class="mdi mdi-clock-outline sidebar-icon"></i>
                <div style="padding-left:10px">Лента активности</div>
            </div>

            <div class="sidebar-item" @click="dialogSetup = true">
                <i class="mdi mdi-cog-outline sidebar-icon"></i>
                <div style="padding-left:10px">Настройки</div>
            </div>
        </div>

        <!-- ИЗБРАННОЕ -->
        <div style="flex-grow: 1;overflow-y: scroll;">

            <!-- ИЗБРАННОЕ -->
            <div class="sidebar-header">
                <div style="font-weight:600;font-size:14px;">Избранное</div>
                <!-- <div>
                    <i class="mdi mdi-dots-horizontal sidebar-icon"></i>
                    <i class="mdi mdi-plus sidebar-icon"></i>
                </div> -->
            </div>

            <div class="sidebar-item">
                <i class="mdi mdi-briefcase-variant-outline sidebar-icon"></i>
                <div style="padding-left:10px">Портфель веб-продуктов</div>
            </div>

            <div class="sidebar-item">
                <i class="mdi mdi-table sidebar-icon"></i>
                <div style="padding-left:10px">SWOT-анализ</div>
            </div>

            <!-- ПОРТФЕЛИ И ПРОДУКТЫ -->
            <div class="sidebar-header">
                <div style="font-weight:600;font-size:14px;">Портфели и продукты</div>
                <div>
                    <i v-tooltip="'Операции с продуктами'" class="mdi mdi-dots-horizontal sidebar-icon"
                        @click="toggleOpMenu"></i>
                    <i v-tooltip="'Создать'" class="mdi mdi-plus sidebar-icon" @click="toggleNewMenu"></i>
                    <Menu ref="newMenu" id="newMenu" :model="newMenuItems" :popup="true"></Menu>
                    <Menu ref="opMenu" id="opMenu" :model="opMenuItems" :popup="true"></Menu>
                </div>
            </div>

            <div class="sidebar-item" v-for="product in products">
                <i :class="product.design?.icon || 'mdi mdi-briefcase-variant-outline'" style="font-size:20px"></i>
                <div style="padding-left:10px">{{ product.name }}</div>
            </div>


            <div class="sidebar-item">
                <i class="mdi mdi-briefcase-variant-outline" style="font-size:20px"></i>
                <div style="padding-left:10px">Портфель веб-продуктов</div>
            </div>

            <div class="sidebar-item">
                <i class="mdi mdi-chevron-right" style="font-size:20px"></i>
                <i class="mdi mdi-web" style="font-size:20px"></i>
                <div style="padding-left:10px">Сайт компании</div>
            </div>

            <div class="sidebar-item">
                <i class="mdi mdi-chevron-down" style="font-size:20px"></i>
                <i class="mdi mdi-web" style="font-size:20px"></i>
                <div style="padding-left:10px">Сайт проекта "Астра"</div>
            </div>
            <div class="sidebar-item">
                <div style="width:20px;height:20px;"></div>
                <div style="width:20px;height:20px;"></div>
                <i class="mdi mdi-application-outline" style="font-size:20px"></i>
                <div style="padding-left:10px">Лендинг</div>
            </div>

            <div class="sidebar-item">
                <div style="width:20px;height:20px;"></div>
                <div style="width:20px;height:20px;"></div>
                <i class="mdi mdi-application-outline" style="font-size:20px"></i>
                <div style="padding-left:10px">Регистрация</div>
            </div>

            <div class="sidebar-item">
                <div style="width:20px;height:20px;"></div>
                <div style="width:20px;height:20px;"></div>
                <i class="mdi mdi-application-outline" style="font-size:20px"></i>
                <div style="padding-left:10px">Оферта</div>
            </div>

            <div class="sidebar-item">
                <i class="mdi mdi-bank" style="font-size:20px"></i>
                <div style="padding-left:10px">Портфель банковских продуктов</div>
            </div>

            <div class="sidebar-item">
                <i class="mdi mdi-chevron-down" style="font-size:20px"></i>
                <i class="mdi mdi-account-cash-outling" style="font-size:20px"></i>
                <div style="padding-left:10px">Депозит "Восточный"</div>
            </div>

            <div class="sidebar-item">
                <div style="width:20px;height:20px;"></div>
                <div style="width:20px;height:20px;"></div>
                <i class="mdi mdi-chart-pie" style="font-size:20px"></i>
                <div style="padding-left:10px">Сегментация аудитории</div>
            </div>

            <div class="sidebar-item">
                <i class="mdi mdi-chevron-right" style="font-size:20px"></i>
                <i class="mdi mdi-account-cash-outling" style="font-size:20px"></i>
                <div style="padding-left:10px">Депозит "Западный"</div>
            </div>
            <div class="sidebar-item">
                <i class="mdi mdi-chevron-right" style="font-size:20px"></i>
                <i class="mdi mdi-account-cash-outling" style="font-size:20px"></i>
                <div style="padding-left:10px">Депозит "Северный"</div>
            </div>
            <div class="sidebar-item">
                <i class="mdi mdi-chevron-right" style="font-size:20px"></i>
                <i class="mdi mdi-account-cash-outling" style="font-size:20px"></i>
                <div style="padding-left:10px">Депозит "Южный"</div>
            </div>



            <!-- НИЖНЯЯ ЧАСТЬ -->
            <div>
                <div class="sidebar-item" style="display:flex;flex-direction: row; justify-content: space-between;">
                    <router-link to="/methodshop">
                        <div style="display:flex;flex-direction: row;align-items: center;;">
                            <i class="mdi mdi-shape-outline sidebar-icon"></i>
                            <div style="padding-left:10px">Методологии</div>
                        </div>
                    </router-link>
                    <div>
                        <i v-tooltip="'Операции с методологиями'" class="mdi mdi-dots-horizontal sidebar-icon"
                            @click="toggleOpMethodMenu"></i>
                        <i v-tooltip="'Создать методологию'" class="mdi mdi-plus sidebar-icon" @click=""></i>

                        <Menu ref="opMethodMenu" id="opMethodMenu" :model="opMethodMenuItems" :popup="true"></Menu>
                    </div>
                </div>

                <div>
                    <div class="sidebar-item" style="display:flex;flex-direction: row; justify-content: space-between;">
                        <router-link to="/integrations">
                            <div style="display:flex;flex-direction: row;align-items: center;;">
                                <i class="mdi mdi-swap-vertical-bold sidebar-icon"></i>
                                <div style="padding-left:10px">Интеграции</div>
                            </div>
                        </router-link>
                        <div>
                            <i v-tooltip="'Операции с интеграциями'" class="mdi mdi-dots-horizontal sidebar-icon"
                                @click="toggleOpIntegrationMenu"></i>
                            <i v-tooltip="'Настроить новую интеграцию'" class="mdi mdi-plus sidebar-icon" @click=""></i>

                            <Menu ref="opIntegrationMenu" id="opIntegrationMenu" :model="opIntegrationMenuItems"
                                :popup="true"></Menu>
                        </div>
                    </div>
                </div>


                <!-- <div class="sidebar-item">
                    <i class="mdi mdi-swap-vertical-bold sidebar-icon"></i>
                    <div style="padding-left:10px">Интеграции</div>
                    <Menu ref="opIntegrationMenu" id="opIntegrationMenu" :model="opIntegrationMenuItems" :popup="true"></Menu>

                </div> -->

                <div class="sidebar-item" @click="dialogImport = true">
                    <i class="mdi mdi-import sidebar-icon"></i>
                    <div style="padding-left:10px">Импорт</div>
                </div>

                <div class="sidebar-item">
                    <i class="mdi mdi-trash-can-outline sidebar-icon"></i>
                    <div style="padding-left:10px">Корзина</div>
                </div>
            </div>

        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const products = ref([]);
axios.post(`${API_URL}/api/get/products`, { product_id: null })
    .then((res) => {
        products.value = res.data?.products || [];
    });
// import SidebarNewMenu from './Sidebar/NewMenu.vue';

const emit = defineEmits(['hideSidebar']);

const newMenu = ref();
const toggleNewMenu = (event) => {
    newMenu.value.toggle(event);
};

const newMenuItems = ref([
    {
        label: 'Создать портфель',
        icon: 'mdi mdi-card-multiple-outline',
        command: () => {

        }
    },
    {
        label: 'Создать продукт',
        icon: 'mdi mdi-table',
        command: () => {

        }
    },
    {
        label: 'Создать этап',
        icon: 'mdi mdi-view-grid-outline',
        command: () => {

        }
    },
    {
        label: 'Создать страницу',
        icon: 'mdi mdi-chart-gantt',
        command: () => {

        }
    }

]);

// МЕНЮ ОПЕРАЦИЙ

const opMenu = ref();
const toggleOpMenu = (event) => {
    opMenu.value.toggle(event);
};

const opMenuItems = ref([
    {
        label: 'Дублировать',
        icon: 'mdi mdi-card-multiple-outline',
        command: () => {

        }
    },
    {
        label: 'Удалить',
        icon: 'mdi mdi-trash-can',
        command: () => {

        }
    },

]);

const opMethodMenu = ref();
const toggleOpMethodMenu = (event) => {
    opMethodMenu.value.toggle(event);
};

import router from '../../../router';

const opMethodMenuItems = ref([
    {
        label: 'Магазин методологий',
        icon: 'mdi mdi-store-outline',
        command: () => {
            router.push('/methodshop');
        }
    },
    {
        label: 'Корпоративные методологии',
        icon: 'mdi mdi-domain',
        command: () => {
            router.push('/methods');
        }
    },

]);

const opIntegrationMenu = ref();
const toggleOpIntegrationMenu = (event) => {
    opIntegrationMenu.value.toggle(event);
};

const opIntegrationMenuItems = ref([
    {
        label: 'Магазин интеграций',
        icon: 'mdi mdi-store-outline',
        command: () => {
            router.push('/integrationshop');
        }
    },
    {
        label: 'Настроенные интеграции',
        icon: 'mdi mdi-domain',
        command: () => {
            router.push('/integrations');
        }
    },

]);

import DialogSearch from './Sidebar/Dialog/Search.vue';
const dialogSearch = ref(false);

import DialogActivities from './Sidebar/Dialog/Activities.vue';
const dialogActivities = ref(false);

import DialogTasks from './Sidebar/Dialog/Tasks.vue';
const dialogTasks = ref(false);

import DialogSetup from './Sidebar/Dialog/Setup.vue';
const dialogSetup = ref(false);

import DialogImport from './Sidebar/Dialog/Import.vue';
import { API_URL } from '../../../constants';
const dialogImport = ref(false);

</script>
<style scoped>
.sidebar-item {
    display: flex;
    align-items: center;
    margin: 0px 4px 0px 4px;
    padding: 4px 6px 4px 6px;
    /* color: var(--primary-900); */
    border-radius: 3px;
}

.sidebar-item:hover {
    background-color: var(--primary-100);
}

.sidebar-icon:hover {
    background-color: var(--primary-100);
}


.sidebar-icon {
    font-size: 20px;
}

.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4px 4px 0px 4px;
    padding: 4px 6px 4px 6px;
}
</style>