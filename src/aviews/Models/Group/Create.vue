<template>
  <Dialog :visible="visible" modal header="Создать группу" :style="{ width: '30vw' }">
    <div class="flex justify-content-around p-4">
      <div class="flex align-items-center">
        <div class="p-2">Имя:</div>
        <InputText v-model="groupName" placeholder="Название группы"></InputText>
      </div>
    </div>

    <div class="flex justify-content-around">
      <div class="flex">
        <Button label="ОК" class="m-2" @click="onOk" :disabled="!groupName"></Button>
        <Button label="Отмена" severity="secondary" class="m-2" @click="emit('close')"></Button>
      </div>
    </div>

  </Dialog>
</template>
<script setup>
import { ref } from 'vue';
import { voix } from '#/voix';
import { useModelsStore } from '../Store.js';
const modelsStore = useModelsStore();
const props = defineProps(['visible','AreaID','GroupID']);
const emit = defineEmits(['close']);
const groupName = ref()

const onOk = () => {
  console.log(27,{AreaID:props.AreaID, GroupID:props.GroupID,Name:groupName.value});
  voix('arahis/create/group',{AreaID:props.AreaID,GroupID:props.GroupID, Name:groupName.value}).then(
    (res)=>{
      console.log(30,res);
      modelsStore.areaGroupsRefresh();
      emit('close');
    });
  
}

</script>
