<template>
  <LayoutMain :nav="nav">
    <div style="display:flex;flex-direction: column; ">
      <div v-if="product.design?.image">
        <img :src="product.design?.image" style="
      width:100%;height:20vh;object-position: center 90%;object-fit: cover;">
      </div>
      <div style="display:flex;flex-direction: column;align-items: center;">
        <div style="width:1200px;display:flex;flex-direction: column;">
          <div>
            <div v-if="/\p{Emoji}/u.test(product.design?.icon)" role="img" :aria-label="product.icon" style="
              font-family: &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, NotoColorEmoji, &quot;Noto Color Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Android Emoji&quot;, EmojiSymbols; 
              font-size:78px;
              line-height: 78px; 
              margin-top:-42px;
              width:78px;
              height:78px;
              position: relative;
              white-space: nowrap;">{{ product.design?.icon }}
            </div>
            <div v-else-if="product.design?.icon" role="img" :aria-label="product.icon" :class="product.design?.icon"
              style="
              font-size:78px;
              line-height: 78px; 
              margin-top:-42px;
              width:78px;
              height:78px;
              position: relative;
              white-space: nowrap;">
            </div>
            <div v-else></div>
          </div>

          <div style="margin-top: 12px;margin-bottom: 4px;height:24px;color:rgba(55, 53, 47, 0.5);display:flex">

            <div>
              <a href="#"><i class="mdi mdi-briefcase-plus-outline"></i>
                Новый портфель
              </a>
            </div>
            <div style="padding-left:8px">
              <a href="#"><i class="mdi mdi-plus-circle-outline"></i>
                Новый продукт
              </a>
            </div>
            <div style="padding-left:8px">
              <a href="#">
                <i class="mdi mdi-comment-outline"></i>
                Обсуждение
              </a>
            </div>
          </div>

          <div style="display:flex; justify-content: space-between;align-items: center;">
            <div class="" style="font-size:40px;font-weight:700">
              {{ header }}
              <!-- <span style="font-size:24px;
              font-weight:normal,
              color:var(--primary-800)">{{ actor?.name }}</span> -->
            </div>
            <div v-tooltip="'Изменить представление'"
              class="text-600 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
              style="padding:8px" @click="togglePortfolioViewMenu">
              <Menu ref="portfolioViewMenu" id="portfolioViewMenu" :model="portfolioViewMenuItems" :popup="true"></Menu>
              <i v-ripple class="mdi mdi-format-list-bulleted"></i>
              <i v-ripple class="mdi mdi-unfold-more-horizontal"></i>
            </div>
          </div>

          <div style="">
            <div class="grid">
              <PortfolioProductCard v-for="item in products" :item="item"></PortfolioProductCard>
            </div>
          </div>

        </div>

      </div>
    </div>

  </LayoutMain>
</template>
<script setup>
import { ref, watch } from 'vue';
import router from '../router';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const id = route.params.id; // read parameter id (it is reactive) 

// console.log(91,product_id);
watch(route, () => router.go());

import PortfolioProductCard from './Portfolio/ProductCard.vue';
import { API_URL } from '../constants';
// import PortfolioKanban from './Portfolio/Kanban.vue';



const defaultActorType = {
  code: 'ACOMPANY',
  name: '',
  design: {
    icon: '',
  }
};
const defaultProductType = {
  code: 'PPORTFOLIO',
  name: '',
  design: {
    icon: '',
  }
};

const defaultProduct = {
  name: 'Портфель продуктов',
  design: {
    icon: '💼',
    image: '/img/cover/rijksmuseum_jan_lievens_1627.jpg'
  }
};

const defaultActor = {
  name: '',
  design: {
    icon: '',
  }
};

const header = ref(defaultProduct.name);


const nav = ref([{ label: '', icon: '🏠', url: '/home' },
{
  label: defaultProduct.name,
  icon: defaultProduct.design.icon,
  url: route.path
}]);

const nav1 = ref({
  items: [{
    name: defaultProduct.name,
    icon: defaultProduct.design.icon,
    route: route.path
  }]
});

const product = ref(defaultProduct);
const parent = {};
const product_type = ref(defaultProductType);
const actor = ref(defaultActor);
const actor_type = ref(defaultActorType);
const products = ref([]);

axios.post(`${API_URL}/api/get/portfolio`, { id: id })
  .then((res) => {
    console.log(145, res.data);
    product.value = res.data?.product || defaultProduct;
    parent.value = res.data?.parent || {};
    product_type.value = res.data?.product_type || defaultProductType;
    actor.value = res.data?.actor || defaultActor;
    actor_type.value = res.data?.actor_type || defaultActorType;
    products.value = res.data?.products || [];

    header.value = product.value.name;

    // nav.value = {
    //   items: [
    //     { name: product.value.name, icon: product.value.design?.icon, route: `/portfolio/${product.value.id}` }
    //   ]
    // };

    //   nav.value.items.unshift({
    //     name:parent.value.name,icon:parent.value.design?.icon,route:`/portfolio/${parent.value.id}`
    //   })
  });



defineProps([]);
const portfolioViewMenu = ref();
const togglePortfolioViewMenu = (event) => {
  portfolioViewMenu.value.toggle(event);
};

const portfolioViewMenuItems = ref([
  {
    label: 'Карточки',
    icon: 'mdi mdi-card-multiple-outline',
    command: () => {

    }
  },
  {
    label: 'Таблица',
    icon: 'mdi mdi-table',
    command: () => {

    }
  },
  {
    label: 'Канбан',
    icon: 'mdi mdi-view-grid-outline',
    command: () => {

    }
  },
  {
    label: 'Диаграмма Гантта',
    icon: 'mdi mdi-chart-gantt',
    command: () => {

    }
  }

]);

</script>