<template>
  <Panel header="Сведения" :pt="{ header: { style: 'padding:8px 0px 8px 16px' }, content: { style: 'padding:0' } }">
    <template #icons>
      <button class="p-panel-header-icon p-link mr-2" @click="toggle">
        <span class="mdi mdi-close"></span>
      </button>
    </template>

    <TabView>
      <TabPanel header="Свойства">
        <div style="display:flex;flex-direction: column;">
          <div style="display:flex;align-items: center;justify-content: space-between;padding:4px 0;">
            <div style="display:flex;align-items: center;">
              <img style="width:32px;height:32px;padding:0 8px 0 0">
              <div>Продажи</div>
            </div>
            <div class="mdi mdi-dots-vertical" style="font-size: 20px;"></div>
          </div>
          <InputText placeholder="Фильтр свойств" style="width:100%"></InputText>
          <div style="flex-grow;overflow-y: scroll;">
            <!-- <Accordion :activeIndex="0">
              <AccordionTab header="Общее">
                <p>sdijfa ldjsf
                  asdlfj a;sdijfaasd;lkj a;sdlkjf ;alksjdf ;aksjd f;lkajsd</p>
                <p>sdijfa ldjsf
                  asdlfj a;sdijfaasd;lkj a;sdlkjf ;alksjdf ;aksjd f;lkajsd</p>
                <p>sdijfa ldjsf
                  asdlfj a;sdijfaasd;lkj a;sdlkjf ;alksjdf ;aksjd f;lkajsd</p>
                <p>sdijfa ldjsf
                  asdlfj a;sdijfaasd;lkj a;sdlkjf ;alksjdf ;aksjd f;lkajsd</p>
                <p>sdijfa ldjsf
                  asdlfj a;sdijfaasd;lkj a;sdlkjf ;alksjdf ;aksjd f;lkajsd</p>
                <p>sdijfa ldjsf
                  asdlfj a;sdijfaasd;lkj a;sdlkjf ;alksjdf ;aksjd f;lkajsd</p>
                <p>sdijfa ldjsf
                  asdlfj a;sdijfaasd;lkj a;sdlkjf ;alksjdf ;aksjd f;lkajsd</p>
                <p>sdijfa ldjsf
                  asdlfj a;sdijfaasd;lkj a;sdlkjf ;alksjdf ;aksjd f;lkajsd</p>
              </AccordionTab>
              <AccordionTab header="Информация о состоянии">sdsdsd</AccordionTab>
              <AccordionTab header="Организационные элементы">sdsdsd</AccordionTab>
              <AccordionTab header="Контакт">sdsdsd</AccordionTab>
              <AccordionTab header="Ссылки">sdsdsd</AccordionTab>
            </Accordion> -->
          </div>
          <div class="flex">
            <Button text rounded icon="mdi mdi-tag-plus-outline" label="Добавить атрибут"></Button>
            <Button text rounded icon="mdi mdi-earth-arrow-right" label="Обработать язык"></Button>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Документы"></TabPanel>
      <TabPanel header="Экземпляры"></TabPanel>
      <TabPanel header="Отношения"></TabPanel>
    </TabView>


    <!-- <TabMenu :model="infoMenuItems" :pt="{
      action: ({ props, state, context }) => ({
        style: (context.order === state.d_activeIndex ? 'background-color:var(--surface-ground);' : '') +
          'padding:10px 10px;font-weight:normal'
      })
    }"></TabMenu> -->



  </Panel>
</template>
<script setup>
import { ref } from "vue";

const infoMenuItems = ref([
  {
    label: 'Свойства',
  },
  {
    label: 'Документы',
  },
  {
    label: 'Экземпляры',
  },
  {
    label: 'Отношения',
  },
]);
</script>