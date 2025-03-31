<template>
  <Dialog :visible="visible" @update:visible="cancel"
    modal header="Переименовать группу" :style="{ width: '30vw' }"
    @show="groupName = modelsStore.currentGroup.Name"
  >

    <div class="flex justify-content-around p-4">
      <div class="flex align-items-center">
        <div class="p-2">Название:</div>
        <InputText v-model="groupName" id="input" type="text" placeholder="Название группы" autofocus></InputText>
      </div>
    </div>

    <div class="flex justify-content-around">
      <div class="flex">
        <Button label="ОК" icon="mdi mdi-check i20" class="m-2" @click="ok" :disabled="!groupName"></Button>
        <Button label="Отмена" icon="mdi mdi-close i20" severity="secondary" class="m-2" @click="cancel"></Button>
      </div>
    </div>

  </Dialog>
</template>
<script setup>
import { ref } from 'vue';
import { voix } from '#/voix';
import { useModelsStore } from '../Store.js';
const modelsStore = useModelsStore();

const groupName = ref();

const props = defineProps(['visible']);
const emit = defineEmits(['update:visible']);

const ok = () => {
  const gr = modelsStore.currentGroup;
  voix('subpis/rename/group', { AreaID: gr.AreaID, GroupID: gr.GroupID, Name: groupName.value })
    .then(() => {
      modelsStore.areaGroupsRefresh();
      emit('update:visible');
    });
}

const cancel = () => {
  emit('update:visible');
}



</script>