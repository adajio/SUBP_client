<template>
  <Dialog dismissableMask modal :showHeader="false" :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '60vw' }" contentClass="border-round-top p-0" appendTo="body" @hide="visible1 = false; value1 = '';">

    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex align-items-center justify-content-between mb-3">
        <div class="text-900 font-medium text-xl">Импорт файлов</div>
        <div>
          <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
            @click="$refs.menu2.toggle($event)"></Button>
          <Menu ref="menu2" :popup="true" :model="menu"></Menu>
        </div>
      </div>


      <div class="mt-5">
        <div class="card">
          <Toast />
          <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true"
            accept="image/*" :maxFileSize="1000000">
            <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
              <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                <div class="flex gap-2">
                  <Button @click="chooseCallback()" icon="pi pi-images" label="Выбрать файлы" rounded outlined></Button>
                  <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" label="Загрузить" rounded outlined
                    severity="success" :disabled="!files || files.length === 0"></Button>
                  <Button @click="clearCallback()" icon="pi pi-times" label="Отменить" rounded outlined severity="danger"
                    :disabled="!files || files.length === 0"></Button>
                </div>
                <ProgressBar :value="totalSizePercent" :showValue="false"
                  :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]">
                  <span class="white-space-nowrap">{{ totalSize }}б / 1Мб</span>
                </ProgressBar>
              </div>
            </template>

            <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
              <div v-if="files.length > 0">
                <h5>Ожидает</h5>
                <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                  <div v-for="(file, index) of files" :key="file.name + file.type + file.size"
                    class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                    <div>
                      <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50"
                        class="shadow-2" />
                    </div>
                    <span class="font-semibold">{{ file.name }}</span>
                    <div>{{ formatSize(file.size) }}</div>
                    <Badge value="Pending" severity="warning" />
                    <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined
                      rounded severity="danger" />
                  </div>
                </div>
              </div>

              <div v-if="uploadedFiles.length > 0">
                <h5>Выполнено</h5>
                <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                  <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size"
                    class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                    <div>
                      <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50"
                        class="shadow-2" />
                    </div>
                    <span class="font-semibold">{{ file.name }}</span>
                    <div>{{ formatSize(file.size) }}</div>
                    <Badge value="Completed" class="mt-3" severity="success" />
                    <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" outlined rounded
                      severity="danger" />
                  </div>
                </div>
              </div>
            </template>
            <template #empty>
              <div class="flex align-items-center justify-content-center flex-column">
                <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                <p class="mt-4 mb-0">Перенесите сюда файлы для загрузки на сервер и создания артефактов.</p>
              </div>
            </template>


          </FileUpload>
        </div>
      </div>
    </div>


  </Dialog>
</template>
<script setup>
import { ref } from 'vue';

const menu = ref([{
  label: "Варианты",
  items: [{
    label: "Обновить",
    icon: "pi pi-fw pi-refresh"
  }, {
    label: "Поиск",
    icon: "pi pi-fw pi-search"
  }]
}]);


import { useToast } from "primevue/usetoast";
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
  removeFileCallback(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear) => {
  clear();
  totalSize.value = 0;
  totalSizePercent.value = 0;
};

const onSelectedFiles = (event) => {
  files.value = event.files;
  files.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size));
  });
};

const uploadEvent = (callback) => {
  totalSizePercent.value = totalSize.value / 10;
  callback();
};

const onTemplatedUpload = () => {
  toast.add({ severity: "info", summary: "Успешно", detail: "Файлов загружено", life: 3000 });
};

const formatSize = (bytes) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

</script>