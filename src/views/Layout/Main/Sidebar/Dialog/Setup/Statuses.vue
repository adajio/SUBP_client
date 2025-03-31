<template>
  <Dialog dismissableMask modal :showHeader="false" :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '90vw' }" contentClass="border-round-top p-0" appendTo="body" @hide="visible1 = false; value1 = '';">
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex align-items-center justify-content-between mb-3">
        <div class="text-900 font-medium text-xl">Статусы</div>
        <div>
          <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
            @click="$refs.menu2.toggle($event)"></Button>
          <Menu ref="menu2" :popup="true" :model="menu"></Menu>
        </div>
      </div>
    </div>

    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="p-fluid flex flex-column lg:flex-row">
        <ul
          class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">

          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы продуктов</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы страниц</span>
            </a>
          </li>

          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-palette md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы методологий</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-sun md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы шаблонов</span>
            </a>
          </li>

          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы задач</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы активностей</span>
            </a>
          </li>
          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы артефактов</span>
            </a>
          </li>

          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы акторов</span>
            </a>
          </li>

          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы участников</span>
            </a>
          </li>

          <li>
            <a v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
              <i class="pi pi-bell md:mr-2"></i>
              <span class="font-medium hidden md:block">Статусы интеграций</span>
            </a>
          </li>

        </ul>


        <div class="surface-card p-5 shadow-2 border-round flex-auto">
          <div class="text-900 font-semibold text-lg mt-3">Типы продуктов</div>
          <Divider></Divider>
          <div class="flex gap-5 flex-column-reverse md:flex-row">
            <div class="flex-auto p-fluid">
              <div class="mb-4">
                <label for="email" class="block font-medium text-900 mb-2">Имя, Фамилия</label>
                <InputText id="email" type="text" />
              </div>
              <div class="mb-4">
                <label for="bio" class="block font-medium text-900 mb-2">Описание</label>
                <Textarea id="bio" type="text" rows="5" :autoResize="true"></Textarea>
              </div>
              <div class="mb-4">
                <label for="website" class="block font-medium text-900 mb-2">URL</label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon">https://</span>
                  <InputText id="website" type="text" />
                </div>
              </div>
              <div class="mb-4">
                <label for="state" class="block font-medium text-900 mb-2">Компания</label>
                <InputText id="state" type="text" />
              </div>
              <div>
                <Button label="Сохранить изменения" class="w-auto"></Button>
              </div>
            </div>
            <div class="flex flex-column align-items-center flex-or">
              <span class="font-medium text-900 mb-2">Фотография</span>
              <img src="/images/blocks/avatars/circle/avatar-f-1.png" class="h-10rem w-10rem" />
              <Button type="button" icon="pi pi-pencil" class="p-button-rounded -mt-4"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>
<script setup>
import { ref } from 'vue';

const menu2 = ref([]);

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