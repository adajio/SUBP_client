<template>
  <slot v-bind="data"></slot>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from "axios";

const SQL_URL = "http://127.0.0.1:8011/api/sql";

const props = defineProps(["all", "get", "id", "code", "where", "like", "params"]);
const data = ref({});
const emit = defineEmits(["update"]);

onMounted(() => {
  fetchData();
  watch(() => Object.values(props), fetchData);
});

function fetchData() {
  axios
    .post(SQL_URL, props)
    .then((response) => {
      data.value = response?.data?.data;
      emit('update', data.value);
    })
    .catch((error) => {
      console.error(error);
      data.value = {};
    });

}

</script>