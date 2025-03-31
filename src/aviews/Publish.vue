<template>
  <LayoutArahis title="Опубликованное содержимое" icon="mdi mdi-file-cabinet">
    <div style="display:flex;justify-content: space-between;">
      <TabMenu :model="tabGroupItems"></TabMenu>
      <Button text rounded label="Основная база данных" icon="mdi mdi-file-cabinet"
      :pt="{icon:{style:'font-size:20px'}}"></Button>
    </div>

    <Splitter style="height:calc(100% - 120px)" :glutterSize="2">
      <SplitterPanel :size="20">
        <PublishLeft></PublishLeft>
      </SplitterPanel>
      <SplitterPanel :size="80">
        <PublishMiddle></PublishMiddle>
      </SplitterPanel>
      <!-- <SplitterPanel size="25">
        <PublishRight></PublishRight>
      </SplitterPanel> -->
    </Splitter>
  </LayoutArahis>
</template>
<script setup>
import { ref } from 'vue';
import PublishLeft from './Publish/Left.vue';
import PublishMiddle from './Publish/Middle.vue';
import PublishRight from './Publish/Right.vue';


const tabGroupItems = ref([
  { label: 'Группы' }
]);
</script>