import { defineStore } from "pinia";
import { ref } from "vue";
export const usePublishStore = defineStore("publishStore", () => {
  
  const areas = ref([]);
  const areas = ref([]);

  const currentArea = ref({});
  const currentGroup = ref({});
  const currentModel = ref({});

  const setCurrentArea = (data) => (currentArea.value = data);
  const setCurrentGroup = (data) => (currentGroup.value = data);
  const setCurrentModel = (data) => (currentModel.value = data);

  return { currentArea, currentGroup, currentModel, 
    setCurrentArea, setCurrentGroup, setCurrentModel};
});
