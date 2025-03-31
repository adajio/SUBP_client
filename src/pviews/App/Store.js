import { ref } from "vue";
import { defineStore } from "pinia";
import { sql,get } from "#/sql";
import {useStorage} from '@vueuse/core';

const actorId = useStorage('appStore.actorId',3);
const actor = ref({});

// get("SELECT * FROM Actor WHERE code = 'EPETROVA'").then((data) => {
// sql({get:'Actor',code:'EPETROVA'}).then((data)=>{
sql({get:'Actor',id:actorId.value}).then((data)=>{
  actor.value = data;
});

export const useAppStore = defineStore("appStore", () => {
  return { actor };
});
