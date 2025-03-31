<template>
<div style="display:flex;">
      <div style="display:flex;flex-direction: column;width:450px;padding:16px;">

        <div>ПРОСМОТР</div>
        <router-link to="/arahis/publish">
          <div style="display: flex;align-items: center;" class="hover-gray">
            <div class="mdi mdi-book-open-outline" style="font-size: 48px;padding:16px;"></div>
            <div style="display:flex;flex-direction: column;">
              <div>Опубликованное содержимое</div>
              <div style="font-size: 14px;">Посмотреть опубликованное содержимое</div>
            </div>
          </div>
        </router-link>
        <router-link to="/arahis/cooperation">
          <div style="display: flex;align-items: center;" class="hover-gray">
            <div class="mdi mdi-forum-outline" style="font-size: 48px;padding:16px;"></div>
            <div style="display:flex;flex-direction: column;">
              <div>Сотрудничество</div>
              <div style="font-size: 14px;">Обменивайтесь информацией с коллегами</div>
            </div>
          </div>
        </router-link>

        <div>РЕДАКТИРОВАНИЕ</div>

        <router-link to="/arahis/models">
          <div style="display: flex;align-items: center;" class="hover-gray">
            <div class="mdi mdi-dresser-outline" style="font-size: 48px;padding:16px;"></div>
            <div style="display:flex;flex-direction: column;">
              <div>Модели и объекты</div>
              <div style="font-size: 14px;">Изменение или создание новых моделей</div>
            </div>
          </div>
        </router-link>

        <router-link to="/arahis/docs">
          <div style="display: flex;align-items: center;" class="hover-gray">
            <div class="mdi mdi-file-tree-outline" style="font-size: 48px;padding:16px;"></div>
            <div style="display:flex;flex-direction: column;">
              <div>Документы</div>
              <div style="font-size: 14px;">Загрузка или создание новых документов.</div>
            </div>
          </div>
        </router-link>

        <!-- <router-link to="/arahis/wiki">
          <div style="display: flex;align-items: center;" class="hover-gray">
            <div class="mdi mdi-wikipedia" style="font-size: 48px;padding:16px;"></div>
            <div style="display:flex;flex-direction: column;">
              <div>Вики</div>
              <div style="font-size: 14px;">Документирование бизнес-процессов.</div>
            </div>
          </div>
        </router-link> -->

        <div>УПРАВЛЕНИЕ</div>
        <router-link to="/arahis/admin/users/users">
          <div class="hover-gray">
            <div style="display: flex;align-items: center;;">
              <div class="mdi mdi-cogs" style="font-size: 48px;padding:16px;"></div>
              <div style="display:flex;flex-direction: column;">
                <div>Администрирование</div>
                <div style="font-size: 14px;">Настройте ваше предложение</div>
              </div>
              <div class="mdi mdi-chevron-right" style="font-size: 48px;padding:16px;"></div>
            </div>
          </div>
        </router-link>

      </div>

      <div
        style="display: flex; flex-direction: column;justify-content: space-between;padding:16px;width:250px;background-color:var(--primary-50);width:100%">
        <div style="display:flex;flex-direction: column;">
          <div>БЫСТРЫЙ ДОСТУП</div>
          <Menu :model="menuItems" style="padding:16px;border:none;width:100%;background-color:var(--primary-50);"
            :pt="{ icon: { style: 'font-size:20px;' } }"></Menu>
        </div>
        <Button label="Создать модель" style="padding:16px;width:200px;align-self: center;"
          @click="router.push('/arahis/editor/whiteboard')"></Button>
      </div>


    </div>

</template>
<script setup>
import router from '#/router';
import {ref} from 'vue';

const menuItems = ref([
  { label: 'Главное', icon: 'mdi mdi-home', to: '/arahis/home' },
  { label: 'Мое избранное', icon: 'mdi mdi-book-heart-outline', to: '/arahis/favorites' },
  { label: 'Мои задачи', icon: 'mdi mdi-format-list-checks', to: '/task' },
  { label: 'Научиться', icon: 'mdi mdi-book-education-outline', to: '/arahis/help' },
  { label: 'Задать вопрос', icon: 'mdi mdi-chat-question-outline', to: '/arahis/chat' },
  { label: 'Вики', icon: 'mdi mdi-wikipedia', to: '/arahis/wiki' },
  { label: 'Скрипты', icon: 'mdi mdi-script-outline', to: '/arahis/script' },
]);


</script>