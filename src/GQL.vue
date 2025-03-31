<template><slot v-bind="data"></slot></template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from "axios";

const GQL_URL = "http://127.0.0.1:4000/graphql/";

const props = defineProps(["query","params"]);
const data = ref({});
const emit = defineEmits(["update"]);

onMounted(() => {
  fetchData();
  watch(() => [props.query,props.params],fetchData);
});

function fetchData() {
  axios
    .post(GQL_URL, {query:props.query,variables:props.params})
    .then((response) => {
      data.value = response?.data?.data;
      emit('update',data.value);
    })
    .catch((error) => {
      console.error(error);
      data.value = {};
    });

}

</script>