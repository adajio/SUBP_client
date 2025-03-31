<template>
  <slot v-bind="data"></slot>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { faker } from '@faker-js/faker';

const props = defineProps(["size"]);
const data = ref([]);
// const emit = defineEmits(["update"]);


class FakeItem {

}

onMounted(() => {
  data.value = [];
  for(let i=0;i<props.size;i++) {
    data.value.push(new FakeItem);
  }

  watch(
    () => props.size,
    fetchData
  );
});



</script>