<template>
  <LayoutLogin>


    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="/img/logo/prodops-logo.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Добро пожаловать</div>
        <span class="text-600 font-medium line-height-3">Нет аккаунта?</span>
        <router-link to="/register" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Создайте
          сейчас!</router-link>
      </div>

      <div>
        <label for="area1" class="block text-900 font-medium mb-2">Область (для демо)</label>
        <Dropdown id="area1" v-model="loginArea" :options="areas" optionLabel="name" placeholder="Выберите область"
          class="w-full mb-3" />

        <label for="role1" class="block text-900 font-medium mb-2">Роль (для демо)</label>
        <Dropdown id="role1" v-model="loginRole" :options="roles" optionLabel="name" placeholder="Выберите роль"
          class="w-full mb-3" />


        <label for="email1" class="block text-900 font-medium mb-2">Электронная почта</label>
        <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
        <InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></Checkbox>
            <label for="rememberme1">Запомнить меня</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Забыли пароль?</a>
        </div>
        <router-link :to="loginArea.code=='AR'?'/arahis/home':
            loginArea.code=='P3'?'/prodops/home':'/home'">
          <Button label="Вход" icon="mdi mdi-account" class="w-full"></Button>
        </router-link>
      </div>
    </div>

  </LayoutLogin>
</template>
<script setup>
import { ref } from 'vue';
import { useSessionStorage } from '@vueuse/core'
const checked1 = ref();
const roles = ref([
  { name: 'Продакт директор', code: 'PD' },
  { name: 'Продакт менеджер', code: 'PM' },
  { name: 'Участник команды разработки', code: 'MB' },
  { name: 'Методолог', code: 'MT' },
  { name: 'Бизнес-аналитик', code: 'BA' },
  { name: 'Администратор', code: 'AD' },
  { name: 'Нет роли', code: 'NO' },
]);
const loginRole = useSessionStorage('role', roles.value[0]);

const areas = ref([
  { name: 'Разработка продуктов версия 2 (ProdOps-2)', code: 'P2' },
  { name: 'Разработка продуктов версия 3 (ProdOps-3)', code: 'P3' },
  { name: 'Моделирование процессов (АРАХИС)', code: 'AR' },
]);
const loginArea = useSessionStorage('area', areas.value[0]);


</script>