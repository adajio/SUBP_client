<template>
  <slot v-bind="data"></slot>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from "axios";

const BACKEND_URL = "http://127.0.0.1:8010/api/";

const props = defineProps(["api", "params", "id", "code", "key"]);
const data = ref({});
const emit = defineEmits(["update"]);

onMounted(() => {
  fetchData();
  watch(
    () => props.id,
    fetchData
  );
  watch(
    () => props.code,
    fetchData
  );
  watch(
    () => props.params,
    fetchData
  );
  // watch(
  //   () => props.refreshKey,
  //   (data)=>{console.log(30,'refresh voix',data);fetchData();}
  // );
});

function fetchData() {
  let params = props.params;
  if (!params && props.id) {
    params = { id: props.id };
  } else if (!params && props.code) {
    params = { code: props.code };
  } else if (!params) {
    params = {};
  }

  let api = props.api;
  if(api[0]=='/' && BACKEND_URL[BACKEND_URL.length-1] == '/') {
    api = api.substr(1);
  }

  axios
    .post(BACKEND_URL + api, params)
    .then((response) => {
      data.value = response.data;
      emit('update',data.value);
    })
    .catch((error) => {
      console.error(error);
      data.value = {};
    });
}

</script>