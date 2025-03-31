# Устновка все зависимостей

```sh
# Установки Vite
npm create vite@latest
npm install

# Установка нужных пакетов
npm i -S vue-router
npm i -S primevue
npm i -S primeflex
npm i -S primeicons
npm i -S @mdi/font
npm i -S axios
npm i -S pinia
npm i -S pinia-plugin-persistedstate
npm i -S vuedraggable@next
npm i -S @vueuse/core 
npm i -S @tiptap/vue-3 @tiptap/pm @tiptap/starter-kit
npm i -S monaco-editor-vue3
npm i -S @tiptap/extension-table @tiptap/extension-table-row @tiptap/extension-table-header @tiptap/
extension-table-cell
npm i -S @tiptap/extension-image

npm i -S @faker-js/faker 
npm i -S vee-validate 

# Подготовка git и GitHub
git init
git remote add origin git@github.com:agershun/prodops-client2.git
git branch -M main

```

# Подготовка и запуск образа Docker
```sh
docker build -t prodops:client2 .
docker run -it -p 8080:8080 --rm --name client2 prodops:client2
```

С композем
```sh
docker build -t prodops:client2 .
docker compose up
```


# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Рекомендованная установка VS Code

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)(and disable Vetur) 
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
# ara-client3
