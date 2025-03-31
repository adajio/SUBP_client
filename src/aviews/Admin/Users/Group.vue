<template>
  <h2>Сведения о группе</h2>
  <div class="flex align-items-center">
    <Avatar size="xlarge" shape="circle" label="АД" class="p-4"></Avatar>
    <div class="flex flex-column p-4">
      <div>Администраторы</div>
      <div class="mdi mdi-pencil-outline i20"></div>
    </div>
  </div>

  <Accordion :activeIndex="0">
    <AccordionTab header="УЧАСТНИКИ">

      <div class="p-input-icon-left w-full p-1">
        <i class="mdi mdi-magnify i20" />
        <InputText v-model="value1" placeholder="Найти пользователя" class="w-full" />
      </div>
      <div class="flex flex-column">
        <div class="flex align-items-center justify-content-between p-1">
          <div class="flex">
            <Avatar shape="circle" label="ВП" class="p-1"></Avatar>
            <div class="p-1"><a href="#">vpetrov@industry.ru</a></div>
          </div>
          <div class="mdi mdi-delete-outline i20 p-1"></div>
        </div>
      </div>

      <div class="flex justify-content-between">

        <Button label="Добавить пользователей" icon="mdi mdi-plus" text rounded :pt="{ icon: { class: 'i20' } }"></Button>
        <Button label="Убрать все" text rounded></Button>
      </div>

    </AccordionTab>
    <AccordionTab header="РОЛИ">
      <div class="flex flex-column">
        <div class="flex align-items-center justify-content-between p-1">
          <div class="flex">
            <div class="mdi mdi-pencil-outline i20 p-1"></div>
            <div class="p-1"><a href="#">Дизайнер</a></div>
          </div>
          <div class="mdi mdi-delete-outline i20 p-1"></div>
        </div>
      </div>

      <div class="flex justify-content-between">

        <Button label="Добавить роль" icon="mdi mdi-plus" text rounded :pt="{ icon: { class: 'i20' } }"></Button>
        <Button label="Убрать все" text rounded></Button>
      </div>
    </AccordionTab>
    <AccordionTab header="ПРАВА">
      <div class="flex align-items-baseline">
        <Checkbox v-model="checked" :binary="true" 
        :pt="{root:{class:'p-1'}}"></Checkbox>
        <div class="p-1">Администратор</div>
      </div>
    </AccordionTab>
  </Accordion>
</template>
<script setup>
import {ref} from 'vue';
const checked = ref(true);
</script>