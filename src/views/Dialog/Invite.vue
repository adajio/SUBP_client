<template>
  <Dialog :visible="dialogVisible" :modal="true" :closable="false" :showHeader="false"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '40vw', height: '450px' }">
    <section class="flex flex-column w-full mt-4">
      <div class="flex w-full justify-content-between mb-4">
        <span class="w-4rem h-4rem border-circle flex justify-content-center align-items-center bg-blue-100"><i
            class="pi pi-users text-blue-700 text-4xl"></i></span>
        <Button type="button" icon="pi pi-times"
          class="p-button-rounded p-button-secondary p-button-text align-self-start" @click="visible5 = false"></Button>
      </div>
      <p class="font-semibold text-xl mt-0 mb-2 text-900">Пригласить участника команды</p>
      <p class="font-normal text-base mt-0 mb-3 text-600">Пригласите коллегу присоединиться к проекту в заданной роли.</p>
      <div>
        <label for="member1" class="block text-900 font-medium mb-2">Cотрудник</label>
      <Dropdown id="member1" :options="members" v-model="selectedMember" optionLabel="name" appendTo="body"
        styleClass="w-full border-round-lg">
        <template #value>
          <div class="flex align-items-center">
            <img :src="'images/blocks/avatars/circle/' + selectedMember.avatar + '.png'" class="mr-3"
              style="height: 1.50rem; width: 1.50rem;" />
            <p class="mt-0 mb-0 font-normal text-base text-600">{{ selectedMember.name }}</p>
          </div>
        </template>
        <template #option="{ option }">
          <div class="flex align-items-center">
            <img :src="'images/blocks/avatars/circle/' + option.avatar + '.png'" class="mr-3"
              style="height: 1.50rem; width: 1.50rem;" />
            <p class="mt-0 mb-0 font-normal text-base text-600">{{ option.name }}</p>
          </div>
        </template>
      </Dropdown>
    </div>

      <div>
      <label for="role1" class="block text-900 font-medium mb-2">Роль (для демо)</label>
        <!-- <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-3" /> -->
        <Dropdown id="role1" v-model="selectedRole" :options="roles" optionLabel="name" placeholder="Выберите роль"
          class="w-full mb-3" />
        </div>          

    </section>


    <template #footer>
      <div class="pt-3 flex">
        <Button @click="dialogVisible = false" label="Отменить" class="p-button-text flex-grow-1"></Button>
        <Button @click="dialogVisible = false" label="Пригласить" class="flex-grow-1"></Button>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
defineProps(['dialogVisible']);

const visible5 = ref();

const members = ref([
  { name: 'Петр Петров', avatar: 'avatar-m-1' },
  { name: 'Елена Петрова', avatar: 'avatar-f-1' },
  { name: 'Максим Сыркевич', avatar: 'avatar-m-3' },
  { name: 'Александр Горинов', avatar: 'avatar-m-4' },
  { name: 'Валентина Смоктунова', avatar: 'avatar-f-2' },
]);
const selectedMember = ref(members.value[0]);

const roles = ref([
  { name: 'Продакт директор', code: 'PD' },
  { name: 'Продакт менеджер', code: 'PM' },
  { name: 'Участник команды разработки', code: 'MB' },
  { name: 'Методолог', code: 'MT' },
  { name: 'Администратор', code: 'AD' },
  { name: 'Нет роли', code: 'NO' }
]);
const selectedRole = ref(roles.value[0]);


</script>