<template>
  <div style="height:calc(100% - 200px)">
    <div class="flex flex-column">
      <div class="flex justify-content-between align-items-center">
        <h4 class="px-4">Символы</h4>
        <Button icon="mdi mdi-close i20" text rounded @click="emit('hide')"></Button>
      </div>

      <div class="p-input-icon-left w-full">
        <i class="pi pi-search" />
        <InputText v-model="searchValue" placeholder="Выбрать и вставить символ" class="w-full" />
      </div>

      <div class="flex align-items-center">
        <Button icon="mdi mdi-transit-connection-variant i20" text rounded></Button>
        <div>Создать связь</div>
      </div>

      <ScrollPanel>
      <div class="flex flex-column">
        <div v-for="symbol in symbols" class="flex align-items-center justify-content-around px-2 w-full"
          style="height:36px">
          <div class="flex align-items-center w-full" :style="{ 'background-color': symbol.color }">
            <Button :image="symbol.image" text></Button>
            <div style="width:100%">{{ symbol.label }}</div>
          </div>
        </div>
      </div>
    </ScrollPanel>

      <div class="flex justify-content-center">
        <Button v-tooltip.top="'Круг/эллипс'"
        class="mdi mdi-circle-outline i20" text rounded style="padding:5px;"></Button>
        <Button v-tooltip.top="'Квадрат/прямоугольник'"
        class="mdi mdi-square-outline i20" text rounded style="padding:5px;"></Button>
        <Button v-tooltip.top="'Полигон/линия'" 
        class="mdi mdi-pentagon-outline i20" text rounded style="padding:5px;"></Button>
        <Button v-tooltip.top="'Текст'" 
        class="mdi mdi-text-box-outline i20" text rounded style="padding:5px;"></Button>
        <Button v-tooltip.top="'Изображение'" 
        class="mdi mdi-image-outline i20" text rounded style="padding:5px;"></Button>
      </div>
    </div>
    <div class="flex justify-content-around">
      <Button icon="mdi mdi-cog-outline i20" label="Добавить/удалить символы" text rounded></Button>
    </div>

  </div>
</template>
<script setup>
import { ref } from 'vue';
const emit = defineEmits(['hide']);

const symbols = ref([
  { label: '1111', color: '#A3D678', image: '' },
  { label: '111asfksj ;ak1', color: '#13D678', image: '' },
  { label: '1asdfasd111', color: '#A31678', image: '' },
  { label: '11asdfa11', color: '#A3D618', image: '' },
]);

const searchValue = ref('');
</script>