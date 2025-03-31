<template>
  Добрый день, 
  <router-link :to="'/prodops/actor/'+(appStore.actor?.id||0)">
  {{ appStore.actor?.name }}!
</router-link>
</template>
<script setup>
import {useAppStore} from '#/pviews/App/Store';
const appStore = useAppStore();


</script>