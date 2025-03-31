<template>
  <Dialog :visible="visible" modal header="Выберите группу для сохранения вариантов" :style="{ width: '40vw' }">
    <div class="p-4 justify-content-around">
      {{ {undefined:'Папка',Model:'Модель',ObjDef:'Объект'}[modelsStore.currentModel?.type] }}:
      {{ modelsStore.currentModel?.name }}
    </div>
    <div class="flex justify-content-between">
      <div class="flex align-items-center">
        <div class="px-2">База данных</div>
        <Voix api="subpis/get/databases" #="{ databases }" @update="onDatabasesUpdate">
          <Dropdown v-model="toArea" :options="databases" 
          optionLabel="Name" placeholder="База данных" :pt="{root:{style:'width:400px'}}">
          </Dropdown>
        </Voix>
      </div>
      <Button text rounded icon="mdi mdi-folder-plus-outline i20" v-tooltip="'Создать группу'"
      @click="createGroupVisible=true"></Button>
      <CreateGroup :AreaID="toArea.AreaID" :GroupID="toGroup.GroupID" :visible="createGroupVisible"
       @close="createGroupVisible=false"></CreateGroup>
    </div>

    <div style="height:300px;overflow-y: scroll;">
    <Voix api="subpis/get/groups/tree" :params="{AreaID:toArea.AreaID}" #="{groupsNodes}">
      <Tree 
      selectionMode="single" :value="groupsNodes"
      @nodeSelect="onGroupsSelect"
      :pt="{nodeIcon:{class:'i20'}}">
      </Tree>
    </Voix>
  </div>
    <div class="flex justify-content-around">
      <div class="flex">
        <Button label="ОК" class="m-2" @click="onOk"></Button>
        <Button label="Отмена" severity="secondary" class="m-2" @click="onCancel"></Button>
      </div>
    </div>
  </Dialog>
  
</template>
<script setup>
import { ref } from 'vue';
import {voix} from '#/voix';

import CreateGroup from '../Group/Create.vue';

const props = defineProps(['visible']);
const emit = defineEmits(['success']);

import {useModelsStore} from '../Store.js';
import { onMounted } from 'vue';
const modelsStore = useModelsStore();

const createGroupVisible = ref();
const createGroupToggle = (event) => createGroupVisible.value.toggle(event);

const toArea = ref({AreaID:1});
const toGroup = ref({GroupID:'Group.Root'});

const onDatabasesUpdate = ({databases}) => {
  toArea.value = databases[0];
}

const onGroupsSelect = (node) => {
  toGroup.value = node.data;
}

const onOk = () => {
  console.log(44,modelsStore.currentGroup,modelsStore.currentModel);

  if(!modelsStore.currentModel) {
    emit('success'); return;
  }
  if(modelsStore.currentModel.ModelID) {
    voix('subpis/create/model/variant',{
      fromAreaID:modelsStore.currentModel.AreaID,
      fromModelID:modelsStore.currentModel.ModelID,
      toAreaID:toArea.value.AreaID, 
      toGroupID:toGroup.value.GroupID})
    .then((data)=>{
      console.log(80,data);
      emit('success');
    })
  } else if(modelsStore.currentModel.ObjDefID) {
    voix('subpis/create/objdef/variant',modelsStore.toGroup).
    then(()=>{
      emit('success');
    })
  }
  
  
}

const onCancel = () => {
  emit('success');
}

// onMounted(()=>{
//   console.log(74,modelsStore.currentModel?.type);
//   if(modelsStore.currentModel?.type != 'Model' && modelsStore.currentModel?.type != 'ObjDef') {
//     emit('success');
//   }
// })
</script>