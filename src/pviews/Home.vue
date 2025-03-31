<template>
  <AppLayout title="Начало">
  <HomeHero></HomeHero>
  <HomeStats></HomeStats>
  <div class="flex">
    <div class="flex flex-column">
      <HomePortfolios></HomePortfolios>
      <HomeProducts></HomeProducts>
      <HomePages></HomePages>
    </div>
    <div class="flex flex-column">
      <HomeTasks></HomeTasks>
      <HomeActors></HomeActors>
      <HomeActivities :actorId="appStore.actorId"></HomeActivities>
    </div>
  </div>
</AppLayout>
</template>
<script setup>
import {useAppStore} from '#/pviews/App/Store';
const appStore = useAppStore();

import HomeHero from './Home/Hero.vue';
import HomeStats from './Home/Stats.vue';
import HomePortfolios from './Home/Portfolios.vue';
import HomeProducts from './Home/Products.vue';
import HomePages from './Home/Pages.vue';
import HomeTasks from './Home/Tasks.vue';
import HomeActivities from './Home/Activities.vue';
import HomeActors from './Home/Actors.vue';
</script>