<template>
  <!-- <div style="display:flex;flex-direction: column;"> -->
    <Menu :model="items" class="w-full" style="border:none"></Menu>


    <!-- ИЗБРАННОЕ -->
    <!-- <div class="sidebar-header">
      <div style="font-weight:600;font-size:14px;">Редактирование страницы</div>
    </div>

    <div class="sidebar-item">
      <i class="mdi mdi-briefcase-variant-outline sidebar-icon"></i>
      <div style="padding-left:10px">Дублировать</div>
    </div>

    <div class="sidebar-item">
      <i class="mdi mdi-table sidebar-icon"></i>
      <div style="padding-left:10px">Удалить</div>
    </div>


    <div class="sidebar-item">
      <i class="mdi mdi-undo sidebar-icon"></i>
      <div style="padding-left:10px">Отменить</div>
    </div> -->

  <!-- </div> -->
</template>
<script setup>
import { ref } from 'vue';
defineProps(["visible"]);
// console.log(10,visible.value);
const items = ref(
  [{
    label: 'Редактирование страницы',
    items: [

      {
        label: 'Дублировать',
        icon: 'mdi mdi-content-duplicate',
      },
      {
        label: 'Копировать',
        icon: 'mdi mdi-content-copy',

      },
      { label: 'Удалить', icon: 'mdi mdi-trash-can-outline', },
      { label: 'Отменить', icon: 'mdi mdi-undo', },
      { label: 'Повторить', icon: 'mdi mdi-redo', }
    ]
  }]

);

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
  ;
}

.sidebar-icon {
  font-size: 20px;
}

.sidebar-icon:hover {
  background-color: var(--primary-100);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 4px 0px 4px;
  padding: 4px 6px 4px 6px;
}
</style>