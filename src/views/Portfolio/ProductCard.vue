<template>
  <div class="col-12 lg:col-4 p-2" @click="router.push(product_route)" style="cursor:pointer">
    <div class="shadow-2 surface-card border-round p-4 h-full">
 
      <!-- <div style="height:30px">
          <div>
            <div class="flex align-items-center justify-content-between">
              <span class="text-700">{{ product.method }}</span>
              <span class="font-bold text-700">3/5</span>
            </div>
            <ul class="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
              <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
              <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
              <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
              <li style="height:7px; border-radius: 3px" class="flex-1 bg-gray-500"></li>
              <li style="height:7px; border-radius: 3px" class="flex-1 bg-gray-500"></li>
            </ul>
          </div>
        </div> -->


      <div class="flex align-items-start" style="height:90px;">
        <div class="border-round inline-flex align-items-center justify-content-center" style="width:52px; height: 52px">
          <div>
            <div v-if="/\p{Emoji}/u.test(item.product?.design?.icon)" role="img" :aria-label="item.product?.design?.icon" style="
              font-family: &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, NotoColorEmoji, &quot;Noto Color Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Android Emoji&quot;, EmojiSymbols; 
              font-size:38px;
              line-height: 38px; 
              width:38px;
              height:38px;
              position: relative;
              white-space: nowrap;">{{ item.product?.design?.icon }}
            </div>
            <div v-else-if="item.product?.design?.icon" role="img" :aria-label="item.product?.design?.icon"
              :class="item.product?.design?.icon" style="
              font-size:38px;
              line-height: 38px; 
              width:38px;
              height:38px;
              position: relative;
              white-space: nowrap;">
            </div>
            <div v-else></div>
          </div>
          <!-- <img :src="product.img" width="38" height="38" /> -->
        </div>
        <div class="ml-3 flex-1">
          <div class="block text-900 mb-1 text-xl font-medium">{{ item.product?.name }}</div>
          <p v-if="item.stage" class="text-600 mt-0 mb-4 text-sm">{{ item.stage?.name }}</p>
        </div>
      </div>

      <div style="height:100px">

        <div v-if="item.product?.finish_date" style="display:flex;align-items: center;height:30px;">
          <div :style="{ color: item.product?.design?.color }" class="mdi mdi-timer-outline" style="width:30px"></div>
          Срок: {{ item.product?.finish_date?(new Date(item.product?.finish_date).toLocaleDateString('ru-RU')):'' }}
        </div>

        <div v-if="item.activity" style="display:flex;align-items: center;height:40px;">
          <div class="mdi mdi-clock-outline" style="width:30px"></div>
          <div class="text-600 mt-0 mb-0 text-sm">
            {{ item.activity?.name }}
          </div>
        </div>

        <div style="display:flex;align-items: center;justify-content: space-between;height:30px;">
          <div style="display:flex;align-items: center;" v-tooltip="'Продакт-менеджер'">
            <img v-if="item.actor?.design?.image" :src="item.actor?.design?.image"
              style="width:20px;height:20px;margin-right:10px;">
            <div v-else-if="/\p{Emoji}/u.test(item.actor?.design?.icon)" style="width:20px;height:20px;margin-right:10px;
              font-family: &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, NotoColorEmoji, &quot;Noto Color Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Android Emoji&quot;, EmojiSymbols; 
              ">{{ item.actor?.design?.icon }}</div>
            <div v-else class="mdi mdi-account" style="width:20px;height:20px;padding-right:10px;"></div>
            <div class="mt-0 mb-0 text-sm" style="font-weight:600">{{ item.actor?.name }}</div>
          </div>
          <div style="display:flex;align-items: center;color:var(--gray-400)">
            <a href="#">
              <div v-tooltip="'Обсудить продукт'" class="mdi mdi-comment-outline" style="font-size: 20px;"></div>
            </a>
            <a href="#">
              <div v-tooltip="'Позвонить'" class="mdi mdi-phone-outline" style="font-size: 20px;"></div>
            </a>
            <a href="#">
              <div v-tooltip="'Отправить письмо'" class="mdi mdi-email-outline" style="font-size: 20px;"></div>
            </a>
            <div style="width:20px;height:20px;padding:2px" v-tooltip="'Отправить сообщение в Телеграм'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                  d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>





  <!-- <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start">
                    <div class="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style="width:52px; height: 52px">
                        <img src="/images/blocks/illustration/stats-illustration-1.svg" width="38" height="38" />
                    </div>
                    <div class="ml-3 flex-1">
                        <span class="block text-900 mb-1 text-xl font-medium">Revenue</span>
                        <p class="text-600 mt-0 mb-5 text-sm">Sales Goal</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-700">Achieved</span>
                            <span class="font-bold text-700">12/12</span>
                        </div>
                        <ul class="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start">
                    <div class="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style="width:52px; height: 52px">
                        <img src="/images/blocks/illustration/stats-illustration-2.svg" width="38" height="38" />
                    </div>
                    <div class="ml-3 flex-1">
                        <span class="block text-900 mb-1 text-xl font-medium">Reviews</span>
                        <p class="text-600 mt-0 mb-5 text-sm">Client Messages</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-700">In Progress</span>
                            <span class="font-bold text-700">4/12</span>
                        </div>
                        <ul class="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start">
                    <div class="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style="width:52px; height: 52px">
                        <img src="/images/blocks/illustration/stats-illustration-3.svg" width="38" height="38" />
                    </div>
                    <div class="ml-3 flex-1">
                        <span class="block text-900 mb-1 text-xl font-medium">Tasks</span>
                        <p class="text-600 mt-0 mb-5 text-sm">Completed Tasks</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-700">In Progress</span>
                            <span class="font-bold text-700">8/12</span>
                        </div>
                        <ul class="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>', -->
</template>
<script setup>
import {ref} from 'vue';
import router from '../../router';
const props = defineProps(["item"]);
const product_route = ref(

  props.item.product_type?.code == 'PPORTFOLIO'?{path:`/portfolio/${props.item.product.id}`}:
  props.item.product_type?.code == 'PPRODUCT'?{path:`/product/${props.item.product.id}`}:
  {path:`/product/${props.item.product.id}`}


  // props.item.product_type?.code == 'PPORTFOLIO'?{name:'/portfolio',params:{product_id:props.item.product.id}}:
  // props.item.product_type?.code == 'PPRODUCT'?{name:'/product',params:{product_id:props.item.product.id}}:
  // {name:'/product',params:{product_id:props.item.product.id}}
);
</script>