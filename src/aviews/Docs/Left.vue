<template>
  <Tree :value="treeNodes" :pt="{
    content: { style: 'padding:0' }, nodeIcon: { style: 'font-size:20px' },
    root:{style:'border:none'}
  }"></Tree>
</template>
<script setup>
import { ref } from 'vue';
const treeNodes = [
  {
    label: 'Хранилище документов', icon: 'mdi mdi-file-cabinet',
    children: [
      { label: 'Общая папка группы', icon: 'mdi mdi-folder-account-outline', children:[
        { label: 'Экспорт данных', icon: 'mdi mdi-folder-account-outline' },
      ] },
      
    ]
  },
];
</script>