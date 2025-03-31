<template>
  <LayoutLogin>

    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="/img/logo/prodops-logo.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Регистрация</div>
      </div>

      <label for="email1" class="block text-900 font-medium mb-2">Электронная почта</label>
        <InputText id="email1" type="text" placeholder="Электронная почта" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
        <InputText id="password1" type="password" placeholder="Пароль" class="w-full mb-3" />

        <label for="fisrtname1" class="block text-900 font-medium mb-2">Имя</label>
        <InputText id="fisrtname1" type="text" placeholder="Имя" class="w-full mb-3" />

        <label for="lastname1" class="block text-900 font-medium mb-2">Фамилия</label>
        <InputText id="lastname1" type="text" placeholder="Фамилия" class="w-full mb-3" />


        <label for="role1" class="block text-900 font-medium mb-2">Роль </label>
        <Dropdown id="role1" v-model="registerRole" :options="roles" optionLabel="name" placeholder="Выберите роль" class="w-full mb-3" />
  
        <div>
        <Button label="Зарегистрироваться" icon="mdi mdi-account" class="w-full"></Button>
      </div>
    </div>

  </LayoutLogin>
</template>
<script setup>
import {ref} from 'vue';
import { useSessionStorage } from '@vueuse/core'
const checked1 = ref();
const roles = ref([
    { name: 'Продакт директор', code: 'PD' },
    { name: 'Продакт менеджер', code: 'PM' },
    { name: 'Участник команды разработки', code: 'MB' },
    { name: 'Методолог', code: 'MT' },
    { name: 'Администратор', code: 'AD' },
    { name: 'Нет роли', code: 'NO' }
]);
const registerRole = useSessionStorage('registerRole',roles.value[0]);

</script>