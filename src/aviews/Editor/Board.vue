<template>
  <iframe :src="iframeUrl" style="height: 100%; width: 100%; padding: 0; margin: 0; border: 0; display: block;">
  </iframe>
</template>
<script setup>
import { onMounted } from 'vue';
import { EDITOR_URL } from '../../constants';

const props = defineProps(['id', 'code', 'AreaID', 'ModelID', 'ModelType']);
const emit = defineEmits(['update:title']);

const iframeUrl = `${EDITOR_URL}?dev=1&embed=1&createindex=1&proto=json&lang=ru&saveAndExit=0&noSaveBtn=1&noExitBtn=1&splash=0&sync=1&ui=sketch`

// createEditorMx(4,"Model.8-----5-----u--");

const self = this;

const createEditorMx = async ({ AreaID, ModelID, id, code, ModelType }) => {
  const res = await (
    await fetch("http://localhost:8010/api/arahis/models/create/mx", {
      method: "POST",
      // mode:'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ AreaID, ModelID, id, code, ModelType }),
    })
  ).json();
  return res;
  // arahisEdit(res.data, res.modelName);
}


onMounted(async function () {
  // let starterDiagram = await createEditorMx(4,"Model.8-----5-----u--");
  // let starterDiagram = '';
  // if (props.id) {

  // } else if(props.code) {

  // } else if (props.AreaID, props.ModelID) {
  let starterDiagram = { title: '', data: "<mxGraphModel><root><mxCell id='0'/><mxCell id='1' parent='0'/></root></mxGraphModel>" };

  if (props.AreaID || props.id || props.code || props.ModelType) {
    starterDiagram = await createEditorMx({ AreaID: props.AreaID, ModelID: props.ModelID, id: props.id, code: props.code, ModelType: props.ModelType });
  }
  emit('update:title', starterDiagram.title + (starterDiagram.Variant?' ('+starterDiagram.Variant+')':''));
  // }

  // await createEditorMx(8, "Model.2c----4-----u--");

  // let starterDiagram = await (await fetch('/samples/server-blocks.drawio')).text();
  // console.log(12, starterDiagram.title,starterDiagram.body);
  let first = true;

  window.addEventListener('message', event => {
    if (event.source === window.frames[0]) {
      const edata = JSON.parse(event.data);
      // console.log("frame -> vscode", edata);

      if (edata.event == "init") {
        if (first) {
          first = false;

          window.frames[0].postMessage(JSON.stringify({
            action: 'load', xml: starterDiagram.data
          }), "*");

        } else {

        }
      }
    } else {

    }
  });
});




</script>