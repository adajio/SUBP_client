<template>
  <LayoutArahis title="Тест для voix()">
    <div class="flex flex-column">
      <div>{{ data }}</div>
      <Button label="Обнови" @click="press"></Button>
    </div>
  </LayoutArahis>
</template>
<script setup>
import voix from './voix';

voix.url('http://localhost:8010/api/arahis/');


const data = voix('models/tree', { AreaID: 2, ModelID: '"Model.2c----4-----u--"' });

function press() {
  data.revoix({ AreaID: 3, ModelID: '"Model.2c----4-----u--"' });
}
console.log(15,data);

</script>