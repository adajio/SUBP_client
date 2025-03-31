<template>
  <div class="flex justify-content-around">
  <div>
  <div class="flex" style="padding:8px;">
    <div v-for="(color, i) in wbcolors" :style="{ 'background-color': color, border: i == 9 ? '1px solid black' : 'none' }"
      class="color-box"></div>
  </div>

  <div style="padding:8px;display:grid;grid-template-columns: 24px 24px 24px 24px 24px 24px 24px 24px 24px 24px;">
    <div v-for="color in colors" :style="{ 'background-color': color }"
      class="color-box"></div>
  </div>
</div>
</div>

<Menu :model="menuItems" style="width:100%"></Menu>

</template>
<script setup>
import { ref } from 'vue';
const props = defineProps(['visible']);
const op = ref();

const wbcolors = ref([
  "#2e2e2e",
  "#383838",
  "#444444",
  "#525252",
  "#636363",
  "#787878",
  "#919191",
  "#afafaf",
  "#d3d3d3",
  "#ffffff",
]);

const colors = ref([
"#ff3b3b",
"#ff6262",
"#ffe500",
"#ffff00",
"#bcff19",
"#a5f81f",
"#13adff",
"#00ebff",
"#ff26ab",
"#cf42ff",
"#ff3131",
"#ff5252",
"#ffbe00",
"#fff100",
"#9cef15",
"#89ce1a",
"#1090e5",
"#00c3f8",
"#dc208e",
"#ac37e6",
"#d52929",
"#ff4444",
"#ff9e00",
"#f5c800",
"#82c712",
"#72ab16",
"#0e78be",
"#00a2ce",
"#b71b76",
"#8f2ebf",
"#b02121",
"#d33838",
"#d38300",
"#cba500",
"#6ba50e",
"#5e8d12",
"#0b639d",
"#0086aa",
"#971661",
"#76269e",
"#911b1b",
"#ae2e2e",
"#ae6c00",
"#a88800",
"#58880b",
"#4d740e",
"#095282",
"#006f8c",
"#7d1250",
"#611f83",
"#781616",
"#902626",
"#905900",
"#8b7000",
"#487009",
"#3f600b",
"#07436b",
"#005c74",
"#670e42",
"#50196c",
"#631212",
"#771f1f",
"#774900",
"#735c00",
"#3b5c07",
"#344f09",
"#053758",
"#004c60",
"#550b36",
"#421459",
]);

const menuItems = ref([
  {label:'Выбрать собственный цвет',icon:'mdi mdi-tune i20',command:()=>{}},
  {label:'Сбросить',icon:'mdi mdi-eraser i20',command:()=>{}},
  {label:'Без цвета заливки',icon:'mdi mdi-close-box-outline i20',command:()=>{}}
]);

</script>
<style scoped>
.color-box {
  width: 20px;
  height: 20px;
  padding: 2px;
  margin:2px;
}
</style>