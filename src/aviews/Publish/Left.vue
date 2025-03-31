<template>
  <Tree :value="treeNodes" :pt="{
    content: { style: 'padding:0' }, nodeIcon: { style: 'font-size:20px' }
  }"></Tree>
</template>
<script setup>
import { ref } from 'vue';
const treeNodes = [
  {
    label: 'Бизнес-процессы',
    children: [
      { label: 'Ключевые процессы' },
      {
        label: 'Поддерживающие процессы', children: [
          { label: 'Управление персоналом', children:[
            {label:'Поиск кандидатов'},
            {label:'Найм сотрудников'},
            {label:'Управление персоналом'},
          ] },
          {label:'Карта бизнес-процессов'},
        ]
      },

    ]
  },
  { label: 'Данные'},
  { label: 'ИТ-системы'},
  { label: 'Организация'},
  { label: 'Примеры'},
];
</script>