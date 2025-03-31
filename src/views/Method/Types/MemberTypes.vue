<template>
  <div class="surface-card p-5 shadow-2 border-round flex-auto">
    <div class="text-900 font-semibold text-lg mt-3">Типы участников</div>
    <Divider></Divider>
    <div class="flex gap-5 flex-column-reverse md:flex-row">
      <div class="flex-auto p-fluid">
        <div class="mb-4">
          <label for="email" class="block font-medium text-900 mb-2">Имя, Фамилия</label>
          <InputText id="email" type="text" />
        </div>
        <div class="mb-4">
          <label for="bio" class="block font-medium text-900 mb-2">Описание</label>
          <Textarea id="bio" type="text" rows="5" :autoResize="true"></Textarea>
        </div>
        <div class="mb-4">
          <label for="website" class="block font-medium text-900 mb-2">URL</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">https://</span>
            <InputText id="website" type="text" />
          </div>
        </div>
        <div class="mb-4">
          <label for="state" class="block font-medium text-900 mb-2">Компания</label>
          <InputText id="state" type="text" />
        </div>
        <div>
          <Button label="Сохранить изменения" class="w-auto"></Button>
        </div>
      </div>
      <div class="flex flex-column align-items-center flex-or">
        <span class="font-medium text-900 mb-2">Фотография</span>
        <img src="/images/blocks/avatars/circle/avatar-f-1.png" class="h-10rem w-10rem" />
        <Button type="button" icon="pi pi-pencil" class="p-button-rounded -mt-4"></Button>
      </div>
    </div>
  </div>
</template>