import { defineStore } from "pinia";
import Model from "./ModelType.json";

export const useMethodStore = defineStore("MethodStore", {
  state: () => ({
    models:Object.values(Model).sort((a,b)=>(+a.key)-(+b.key))
  })
});
