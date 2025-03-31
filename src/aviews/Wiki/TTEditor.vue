<template>
  <editor-content :editor="editor" />
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import TTStarterKit from '@tiptap/starter-kit'
import TTDocument from '@tiptap/extension-document'
import TTGapcursor from '@tiptap/extension-gapcursor'
import TTParagraph from '@tiptap/extension-paragraph'
import TTTable from '@tiptap/extension-table'
import TTTableCell from '@tiptap/extension-table-cell'
import TTTableHeader from '@tiptap/extension-table-header'
import TTTableRow from '@tiptap/extension-table-row'
import TTText from '@tiptap/extension-text';
import TTImage from '@tiptap/extension-image'

const props = defineProps(['id','code']);

const contents = [
"ДЕМО-КОНТЕНТ",
`

  
    <h2>Бизнес-процесс "Оформление кредитной карты":</h2>
    <p>Стандарт BPMN предусматривает оформление процессов в виде диаграмм, в которых 
    используются графические элементы для обозначения этапов процесса, потоков и объектов. 
    Каждый шаг в процессе оформления кредитной карты можно представить в виде элемента 
    в BPMN-диаграмме. Посмотреть процесс можно <a href='/arahis/editor'>по ссылке</a>.

    Например:</p>
    <img src="/img/bp/bp1.png" alt="BPMN diagram for Credit Card Application Process" style="width:100px">
    <p>Такая диаграмма позволяет наглядно представить процесс, выделить ключевые этапы и исполнителей, а также оценить время на выполнение каждого шага.</p>
    <p>Ее можно описать в формате таблицы:</p>
    <table style="border:1px solid black">
        <tbody>
        <tr><th style="background:blue;color:white">Шаг<th style="background:blue;color:white">Исполнитель<th style="background:blue;color:white">Время
        <tr><td>Проверка заявки на кредитную карту<td>Банк<td>1-2 рабочих дней
        <tr><td>Передача кредитной карты клиенту<td>Курьер<td>до 5 рабочих дней
        </tbody>
    </table>
    <p>Или процесс можно описать в виде текста и обычного списка:</p>
    <ol><li><p>Запрос на оформление кредитной карты</p><p>Исполнитель: Клиент</p>
    <p>Время: не определено</p></li>
    
    <li><p>Проверка заявки на кредитную карту</p><p>Исполнитель: Банк</p><p>Время: до 3 рабочих дней</p></li>
    <li><p>Выдача кредитной карты</p><p>Исполнитель: Банк</p><p>Время: 1-2 рабочих дней</p></li>
    <li><p>Передача кредитной карты клиенту</p><p>Исполнитель: Курьер</p>
    <p>Время: до 5 рабочих дней</p></li>
    

    <li><p>Активация кредитной карты</p><p>Исполнитель: Клиент</p><p>Время: не определено</p></li>
    <li><p>Подтверждение активации кредитной карты</p><p>Исполнитель: Банк</p><p>Время: до 1 рабочего дня</p></li><li><p>Использование кредитной карты</p><p>Исполнитель: Клиент</p><p>Время: не определено</p></li></ol>
      <p>Другие описания приведены на другой странице</p>
    `,
    `Пример 2`,
    `Пример 3`,
    `Пример 4`,
    `Пример 5`,
    `Пример 6`,
    `Пример 7`,
    `Пример 8`,
    `Пример 9`,
    `Пример 10`,
];

const editor = useEditor({
  content: contents[props.id],
  extensions: [
    TTStarterKit,
    TTDocument,
    TTParagraph,
    TTText,
    TTGapcursor,
    TTTable.configure({
      resizable: true,
    }),
    TTTableRow,
    TTTableHeader,
    TTTableCell,
    TTImage
  ],
});
</script>

<style>
table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

td,
th {
  min-width: 1em;
  border: 2px solid #ced4da;
  padding: 3px 5px;
  vertical-align: top;
  box-sizing: border-box;
  position: relative;

  >* {
    margin-bottom: 0;
  }
}

th {
  font-weight: bold;
  text-align: left;
  background-color: #f1f3f5;
}

.selectedCell:after {
  z-index: 2;
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(200, 200, 255, 0.4);
  pointer-events: none;
}

.column-resize-handle {
  position: absolute;
  right: -2px;
  top: 0;
  bottom: -2px;
  width: 4px;
  background-color: #adf;
  pointer-events: none;
}

p {
  margin: 0;
}


.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>