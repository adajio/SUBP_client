<template>
<LayoutSubpis title="Вики" icon="mdi mdi-wikipedia">
  <Splitter>
    <SplitterPanel :size="20">
      <WikiLeft></WikiLeft>
    </SplitterPanel>
    <SplitterPanel :size="80">
      <div class="p-2" style="height:500px">
      <WikiTTEditor :id="id" :code="code"></WikiTTEditor>
    </div>
    </SplitterPanel>
  </Splitter>
    
  
  </LayoutSubpis>
  </template>

<script setup>
import WikiLeft from './Wiki/Left.vue';
import WikiTTEditor from './Wiki/TTEditor.vue';
const props = defineProps(['id','code']);
if(props.id || props.code) {
  console.log('Редактироваие вики:',props.id,props.code);
}
</script>
