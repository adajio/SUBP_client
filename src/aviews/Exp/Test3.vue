<template>
   <!-- <Voix1 url="https://jsonplaceholder.typicode.com/users" v-slot="customers">
      <ul>
         <li v-for="customer in customers">{{ customer.name }} </li>
      </ul>
   </Voix1> -->

   <!-- <Voix api="get/home/actor" id="1" :params="{id:1}" v-slot="data">

   </Voix> -->

   <!-- <Button label="изменить актора" @click="changeActor"></Button> -->
   <div>{{ parent_id }}</div>
   <!-- <Voix api="get/home/actor" :id="actor_id" #="data">
      {{ data.actor.name }} -->
      <!-- <Button rounded icon="mdi mdi-arrow-up" @click="actor_id=data.actor.parent"></Button>
      <p>{{ data.actor.name }}</p> -->
   <!-- </Voix> -->

   <Voix api="get/home/actor" :id="actor_id" #="{actor,actors}">
      <Button rounded icon="mdi mdi-arrow-up" @click="actor_id=actor.parent"></Button>
      {{ actor?.name }}
      <ul>
         <li v-for="item in actors">
            <span @click="actor_id=item.actor.id">{{ item.actor.name }}
            </span></li>
      </ul>
   </Voix>


</template>
<script setup>
import {ref} from 'vue';
const actor_id = ref(1);
const parent_id = ref();
function changeActor() { actor_id.value = 2; }

// Vue.component('MyData', {
//   props: ['url', 'result'],
//   data() {
//     return {
//       responseData: null
//     };
//   },
//   mounted() {
//     this.fetchData();
//   },
//   methods: {
//     fetchData() {
//       axios.get(this.url)
//         .then(response => {
//           this.responseData = response.data;
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//   },
//   template: `
//     <div>
//       <slot :customers="responseData ? responseData[result] : null"></slot>
//     </div>
//   `
// });



</script>