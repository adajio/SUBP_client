<template>
  <LayoutArahis title="Сотрудничество" icon="mdi mdi-forum-outline">
    <Splitter style="height: calc(100% - 60px)">
      <SplitterPanel :size="20">
        <CooperationLeft></CooperationLeft>
      </SplitterPanel>
      <SplitterPanel :size="80">
        <CooperationMiddle></CooperationMiddle>
      </SplitterPanel>
    </Splitter>
  </LayoutArahis>
</template>
<script setup>
import CooperationLeft from './Cooperation/Left.vue';
import CooperationMiddle from './Cooperation/Middle.vue';
</script>