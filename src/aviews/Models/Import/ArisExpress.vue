<template>
  <Dialog :visible="visible" 
    @update:visible="emit('update:visible',false)"
  modal header="Импорт модели ARIS (.aml, .xml) или ARIS Express (.adf)" :style="{ width: '50vw' }">


    <FileUpload mode="basic" name="file" url="http://localhost:8010/api/arahis/import/ae" accept=".adf,.xml,.aml" :maxFileSize="16000000"
      @upload="onUpload" :auto="true" chooseLabel="Выберите файл" />
  </Dialog>
</template>
<script setup>
import {useModelsStore} from './Store.js';
const modelsStore = useModelsStore();
const props = defineProps(['visible']);
const emit = defineEmits(['success']);


const onUpload = () => {
  modelsStore.areaGroupsRefresh();
  emit('success');
};
</script>