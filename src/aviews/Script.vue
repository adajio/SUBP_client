<template>
  <LayoutSubpis title="Редактор скриптов" icon="mdi mdi-script-outline">
    <div class="p-4 flex flex-column" style="height:calc(100% - 100px)">
      <h1>Редактор скриптов</h1>
      <Splitter style="flex-grow:1">
        <SplitterPanel :size="15">
          Список доступных скриптов
          <Menu :model="scripts" style="width:100%"></Menu>
        </SplitterPanel>
        <SplitterPanel :size="45">

          <MonacoEditor theme="vs-dark" :options="options" language="javascript" v-model:value="code" width="900">
          </MonacoEditor>
        </SplitterPanel>
        <SplitterPanel :size="35">
          <div class="flex align-items-center justify-content-between">
            <h2 class="px-4">Результаты расчета</h2>
            <Button icon="mdi mdi-play i20" label="Запуск" rounded @click="run"></Button>
          </div>
          <div style="white-space: pre-line">
          {{ output }}
        </div>

        </SplitterPanel>
      </Splitter>
    </div>
  </LayoutSubpis>
</template>
<script setup>
import { ref } from 'vue';
import MonacoEditor from 'monaco-editor-vue3';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    // if (label === 'json') {
    //   return new jsonWorker();
    // }
    // if (label === 'css' || label === 'scss' || label === 'less') {
    //   return new cssWorker();
    // }
    // if (label === 'html' || label === 'handlebars' || label === 'razor') {
    //   return new htmlWorker();
    // }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

const options = ref({
  colorDecorators: true,
  lineHeight: 24,
  tabSize: 2,
  fontSize: "14px"
});

const code = ref(
  `///////////////////////////////////////////////////////////////////////////
//
// Встроенный язык скриптов по мере возможности сохраняет синтаксис и структуру
// для совместимости с ARIS и возможности переноса отчетов
//
///////////////////////////////////////////////////////////////////////////
// Вывести список всех атрибутов из объектов
///////////////////////////////////////////////////////////////////////////
var nLocale=Context.getSelectedLanguage();

// Основная функция
function main(){
    // Создать объект для вывода
    var oOutput = Context.createOutputObject();
    // Определить стиль отчета
    defineStyles(oOutput);
    // Вывести выбранные объекты
    var objoccs = ArisData.getSelectedObjOccs();
    
    // Как минимум один из объектов должен быть выбран
    if (objoccs.length > 0) {

       // Цикл по всем объектам в списке
       for (o=0;o<objoccs.length;o++) {
        // Получить вхождение всех объектов
        var currObj = objoccs[o];
        
        // Получить значения из объектов
        var objName = currObj.ObjDef().Name(nLocale);
        var modelName = currObj.Model().Name(nLocale);
        var modelGroup = currObj.Model().Group().Name(nLocale);
        var modelGroupPath = currObj.Model().Group().Path(nLocale);

        // Получить значения из базы данных
        var modelDatabase = currObj.Model().Database();
        var nameOfDatabase = modelDatabase.Name(nLocale);
        var currFilter = modelDatabase.ActiveFilter();
        var currFilterName = modelDatabase.ActiveFilter().Name(nLocale);
        
        // Получить тип объекта
        var typeNumber = currObj.ObjDef().KindNum();
        
        // print database details
        oOutput.OutputLnF("==================================================","TEXT");
        oOutput.OutputLnF("Database    = " + nameOfDatabase,"TEXT");
        oOutput.OutputLnF("Language Id    = " + nLocale,"TEXT");
        oOutput.OutputLnF("Curr Filter Name = " + currFilterName,"TEXT");
        oOutput.OutputLnF("==================================================","TEXT");
        // print model details
        oOutput.OutputLnF("Model Name = " + modelName,"TEXT");
        oOutput.OutputLnF("Model Group = " + modelGroup,"TEXT");
        oOutput.OutputLnF("Model Group Path = " + modelGroupPath,"TEXT");
        oOutput.OutputLnF("==================================================","TEXT");
        // print object and symbol details
        oOutput.OutputLnF("Object Name = " + objName,"TEXT");
        oOutput.OutputLnF("Object Type = " + currObj.ObjDef().Attribute(Constants.AT_TYPE_6, nLocale).getValue(),"TEXT");
        oOutput.OutputLnF("Symbol Number = " + currObj.getSymbol(),"TEXT");
        oOutput.OutputLnF("Symbol Name = " + currObj.SymbolName(),"TEXT");        
        oOutput.OutputLnF("Symbol API Name = " + currFilter.getAPIName(Constants.CID_OBJOCC, currObj.getSymbol()), "TEXT");
        oOutput.OutputLnF(" ","TEXT");
        
        oOutput.OutputLnF("==================================================","TEXT");
        oOutput.OutputLnF("Part 1: Maintained Attributes","TEXT");
        oOutput.OutputLnF("==================================================","TEXT");
    
        var attrs=currFilter.AttrTypes(typeNumber);
        
        var counter=0;
        for(var i=0;i<attrs.length;i++){
          if(isAttrMaintained(currObj.ObjDef(), attrs[i], nLocale)){
                oOutput.OutputLnF(currFilter.getOriginalAttrTypeName(attrs[i]) + " (Id = " + attrs[i] + ")" + " > '"+ currObj.ObjDef().Attribute(attrs[i], nLocale).getValue() + "'","TEXT");
                counter=counter+1;
            }
        }
    
        oOutput.OutputLnF(" ","TEXT");
        oOutput.OutputLnF("==================================================","TEXT");
        oOutput.OutputLnF("Part 2: Not-maintained Attributes","TEXT");
        oOutput.OutputLnF("==================================================","TEXT");
        
        var attrs=currFilter.AttrTypes(typeNumber);
        var counter_nm=0;
        for(var i=0;i<attrs.length;i++){
          if(!isAttrMaintained(currObj.ObjDef(), attrs[i], nLocale)){
                oOutput.OutputLnF(currFilter.getOriginalAttrTypeName(attrs[i]),"TEXT");
                counter_nm=counter_nm+1;
            }
        }
        oOutput.OutputLnF("==================================================","TEXT");
        oOutput.OutputLnF("Number of Attributes = " + attrs.length,"TEXT");
        oOutput.OutputLnF("Number of maintained Attributes = " + counter,"TEXT");
        oOutput.OutputLnF("Number of not maintained Attributes = " + counter_nm,"TEXT");
        oOutput.OutputLnF("==================================================","TEXT");
      }    
    } else {
       oOutput.OutputLnF("Please select a valid object occurence!","TEXT"); 
    }    
    
    oOutput.WriteReport();
}

// checks, if the current attribute is maintained
function isAttrMaintained(item, attrNum, nLocale) {
    var attr = item.Attribute(attrNum, nLocale);
    return ((attr.getValue() != null) && (attr.getValue().trim().length > 0));
}

// defines the out style - here Arial 9
function defineStyles(oOutput) {
    oOutput.DefineF("TEXT", "Arial", 9, Constants.C_DARK_BLUE, Constants.C_TRANSPARENT, Constants.FMT_LEFT, 0, 0, 0, 0, 0, 0);
}

// call the main function
main()

`
);

const scripts = [
  { id: 1, icon: 'mdi mdi-language-javascript', label: 'Вывод атрибутов из объектов' }
];

const output = ref();
import {voix} from '../voix';
const run = () => {
  voix('subpis/run/script', { code: code.value }).then(({ result }) => {
    output.value = result;
  }

  );
}

</script>
