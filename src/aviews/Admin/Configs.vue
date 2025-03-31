<template>
  <div class="px-8">
  <h1>Управление конфигурацией</h1>
  <div class="flex justify-content-around">
    <Card class="w-3">
      <template #header>
        <div class="flex justify-content-around">
          <div class="mdi mdi-account-key-outline" style="font-size:100px"></div>
        </div>
      </template>
      <template #title>Единый вход</template>
      <template #content>
        <p>
          Настройка системы для обеспечения единого входа в различные службы компании
        </p>
      </template>

    </Card>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue';

</script>