<template>
  <LayoutMain :nav="nav">
    <div style="display:flex;flex-direction: column; ">

      <div class="surface-section h-30rem bg-no-repeat bg-cover bg-center flex align-items-center"
        style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/img/integrations/storefront.jpeg);">



        <div class="px-4 mx-4 lg:px-6 lg:mx-6">
          <span class="block text-3xl text-white mb-4">Новые тренды</span>
          <span class="block text-4xl font-medium text-white mb-4">Специальная коллекция интеграций</span>
          <a tabindex="0" v-ripple
            class="py-2 w-13rem text-center block mb-4 text-xl text-white font-medium border-2 cursor-pointer surface-border-0 border-round bg-white-alpha-30 p-ripple">
            Настройте интеграцию</a>
        </div>
      </div>
      <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 text-5xl font-medium mb-4 text-center lg:text-left">Двухсторонняя интеграция</div>
        <p class="mt-0 p-0 mb-5 text-2xl text-600 text-center lg:text-left">С самыми современными инструментами разработки
         </p>

        <div class="grid -mt-3 -ml-3 -mr-3 flex-wrap">
          <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/img/integrations/1.jpeg" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Интеграция</p>
            <a tabindex="0"
              class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">
              EPR <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
          </div>
          <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/img/methods/2.webp" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Интеграция</p>
            <a tabindex="0"
              class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">
              PDC <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
          </div>
          <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/img/methods/3.webp" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Интеграция</p>
            <a tabindex="0"
              class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">
              Репозитории <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
          </div>
          <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/img/methods/4.webp" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Интеграция</p>
            <a tabindex="0"
              class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">
              MS Office <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
          </div>
          <div class="col flex px-3 flex-column mt-4 md:mt-0">
            <img src="/img/methods/5.webp" class="w-full h-full" alt="product">
            <p class="text-600 uppercase font-medium my-3">Интеграция</p>
            <a tabindex="0"
              class="text-xl cursor-pointer text-900 flex align-items-center hover:text-primary transition-duration-150">
              RAD <i class="pi pi-fw pi-arrow-right ml-2 text-xl"></i></a>
          </div>
        </div>

      </div>

      <!-- <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 font-medium text-4xl mb-4">Популярные методологии</div>
        <p class="mt-0 p-0 mb-5 text-600 text-2xl">Среди пользователей ProdOps</p>

        <div class="grid -mt-3 -ml-3 -mr-3">
          <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div class="p-2">
              <div class="relative">
                <img src="/img/methods/6.webp" class="w-full" />
                <button type="text" v-ripple
                  class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300 p-ripple"
                  style="top: 1rem; right: 1rem">
                  <i class="pi pi-heart text-2xl text-500"></i>
                </button>
              </div>
              <div class="flex align-items-center justify-content-between mt-3 mb-2">
                <span class="text-900 font-medium text-xl">Product Name</span>
                <span class="text-900 text-xl ml-3">$14</span>
              </div>
              <span class="text-600">Black</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div class="p-2">
              <div class="relative">
                <img src="/img/methods/7.webp" class="w-full" />
                <button type="text" v-ripple
                  class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300 p-ripple"
                  style="top: 1rem; right: 1rem">
                  <i class="pi pi-heart text-2xl text-500"></i>
                </button>
              </div>
              <div class="flex align-items-center justify-content-between mt-3 mb-2">
                <span class="text-900 font-medium text-xl">Product Name</span>
                <span class="text-900 text-xl ml-3">$24</span>
              </div>
              <span class="text-600">Beige</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
            <div class="p-2">
              <div class="relative">
                <img src="/img/methods/8.webp" class="w-full" />
                <button type="text" v-ripple
                  class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300 p-ripple"
                  style="top: 1rem; right: 1rem">
                  <i class="pi pi-heart text-2xl text-500"></i>
                </button>
              </div>
              <div class="flex align-items-center justify-content-between mt-3 mb-2">
                <span class="text-900 font-medium text-xl">Product Name</span>
                <span class="text-900 text-xl ml-3">$42</span>
              </div>
              <span class="text-600">White</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="p-2">
              <div class="relative">
                <img src="/img/methods/9.webp" class="w-full" />
                <button type="text" v-ripple
                  class="p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300 p-ripple"
                  style="top: 1rem; right: 1rem">
                  <i class="pi pi-heart text-2xl text-500"></i>
                </button>
              </div>
              <div class="flex align-items-center justify-content-between mt-3 mb-2">
                <span class="text-900 font-medium text-xl">Product Name</span>
                <span class="text-900 text-xl ml-3">$20</span>
              </div>
              <span class="text-600">Black</span>
            </div>
          </div>
        </div>
      </div> -->

      <div class="surface-overlay shadow-none lg:shadow-2  w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">

        <div class="text-900 font-medium text-4xl mb-4">Интеграции по категориям</div>
        <p class="mt-0 p-0 mb-5 text-600 text-2xl">Все доступные информационные системы</p>

        <div class="grid flex-wrap">
          <div class="col-12 md:col-6 xl:col-3">

            <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
              <li class="hidden lg:block">
                <img src="/img/methods/10.webp" alt="Image" height="160" style="border-radius:12px">
              </li>
              <li class="font-bold my-5 text-xl text-900 hidden lg:block">ERP-системы
</li>
              <li class="mb-3 cursor-pointer hover:text-900">1С</li>
              <li class="mb-3 cursor-pointer hover:text-900">SAP</li>
              <li class="mb-3 cursor-pointer hover:text-900">Oracle
</li>
            </ul>
          </div>
          <div class="col-12 md:col-6 xl:col-3">
            <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
              <li class="hidden lg:block">
                <img src="/img/methods/11.webp" alt="Image" height="160" style="border-radius:12px">
              </li>
              <li class="font-bold my-5 text-xl text-900 hidden lg:block">BPM-системы</li>
              <li class="mb-3 cursor-pointer hover:text-900"> ELMA
</li>
              <li class="mb-3 cursor-pointer hover:text-900">ARIS
</li>
            </ul>
          </div>
          <div class="col-12 md:col-6 xl:col-3">

            <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700  lg:block">
              <li class="hidden lg:block">
                <img src="/img/methods/12.webp" alt="Image" height="160" style="border-radius:12px">
              </li>
              <li class="font-bold my-5 text-xl text-900 hidden lg:block">Репозитории</li>
              <li class="mb-3 cursor-pointer hover:text-900">GitHub
</li>
              <li class="mb-3 cursor-pointer hover:text-900">GitLab
</li>
              <li class="mb-3 cursor-pointer hover:text-900">Bitbucket
</li>
            </ul>
          </div>
          <div class="col-12 md:col-6 xl:col-3">
            <ul class="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
              <li class="hidden lg:block">
                <img src="/img/methods/13.jpeg" alt="Image" height="160" style="border-radius:12px">
              </li>
              <li class="font-bold my-5 text-xl text-900 hidden lg:block">Системы управления проектами
</li>
              <li class="mb-3 cursor-pointer hover:text-900">MS Project
</li>
              <li class="mb-3 cursor-pointer hover:text-900">Alpana
</li>
              <li class="mb-3 cursor-pointer hover:text-900">Spider
</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  </LayoutMain>
</template>
<script setup>
import { ref } from 'vue';
const nav = ref({
  items: [
    {
      name: 'Магазин интеграций',
      emoji: '🏦', route: '/integrationshop'
    }
  ]
});

</script>