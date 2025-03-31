import { defineStore } from "pinia";
import { ref } from "vue";
export const useModelsStore = defineStore("modelsStore", () => {
  const areaGroupsRefreshKey = ref(0);
  const currentGroup = ref();
  const currentModel = ref();
  const toGroup = ref();

  const setCurrentGroup = (data) => (currentGroup.value = data);
  const areaGroupsRefresh = () => {
    areaGroupsRefreshKey.value=areaGroupsRefreshKey.value+1;
  };

  return { currentModel, currentGroup, toGroup, setCurrentGroup, areaGroupsRefresh, areaGroupsRefreshKey };
});
