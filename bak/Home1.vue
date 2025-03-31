<template>
  <LayoutApp title="Главная">

    <div class="card flex justify-content-center p-8">

      <form @submit="onSubmit" class="flex flex-column gap-4">
        <span class="p-float-label">

          <InputText id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage1 }"
            aria-describedby="text-error"></InputText>
          <label for="value">Введите что-нибудь...</label>
        </span>

        <!-- <span class="p-float-label">

          <InputText id="myfield2" v-model="myfield2" type="text" :class="{ 'p-invalid': errorMessage2 }"
            aria-describedby="text-error"></InputText>
          <label for="myfield2">И еще...</label>
        </span> -->

        <span class="p-error" id="text-error">{{ errorMessage1 || '&nbsp;' }}</span>
        <Button type="submit" label="Submit" />
      </form>
      <Toast />
    </div>
    <!-- <div class="hover:text-purple-400 text-3xl">
      123    
    </div>

    <div class="flex flex-column">
      <div @click="id = 1">1</div>
      <div @click="id = 2">2</div>
      <div @click="id = 3">3</div>
    </div> -->
    <!-- <div class="mdi mdi-rotate-3d-variant ro">Наведи мышку на иконку</div>
     -->
    <!-- <Goix query="query GetActor($id: Int!) {actor(id:$id)}" :vars="{id:2}" #="{actor}"> -->
    <!-- <GQL query="query test($id:ID!){actor(id:$id) {id,name}}" :params="{id}" #="{actor}">
    {{ actor?.name }}
    </GQL> -->
    <!-- <SQL all="SELECT * FROM Actor WHERE id = ?" :params="[id]" #="actors">
      <p>SELECT params</p>
      <ul>
        <li v-for="actor of actors">{{ actor?.name }}</li>
      </ul>
    </SQL>

    <SQL all="SELECT UPPER(name) name FROM Actor" #="actors">
      <p>SELECT ALL</p>
      <ul>
        <li v-for="actor of actors">{{ actor?.name }}</li>
      </ul>
    </SQL>

    <SQL all="Actor" code="EPETROVA" #="actors">
      <p>ID</p>
      <ul>
        <li v-for="actor of actors">{{ actor?.name }}</li>
      </ul>
    </SQL>

    <SQL all="Actor" :like="{name:'*петр*'}" #="actors">
      <p>LIKE</p>
      <ul>
        <li v-for="actor of actors">{{ actor?.name }}</li>
      </ul>
    </SQL>

    <SQL all="Actor" :where="{code:'EPETROVA'}" #="actors">
      <p>WHERE</p>
      <ul>
        <li v-for="actor of actors">{{ actor?.name }}</li>
      </ul>
    </SQL>

    <SQL all="Task.actor=Actor" :where="{'Actor.code':'EPETROVA'}" #="tasks">
      <p>TASKS</p>
      <ul>
        <li v-for="task of tasks">{{ task?.name }}</li>
      </ul>
    </SQL> -->
    <!-- <SQL all="SELECT Product.name FROM Product 
       INNER JOIN ProductType ON Product.type = ProductType.id
       WHERE ProductType.code = 'PPORTFOLIO'" #="portfolios">
      <Menu :items="Object.values(portfolios).map(d => ({ label: d.name }))"></Menu>
      {{ Object.values(portfolios).map(d => ({ label: d.name })) }}
    </SQL> -->
    <!-- <Select one="product.name"></Select> -->
    <!-- <SQL all="Task.name" #="tasks">
      <p>TASKS</p>
      <ul>
        <li v-for="task of tasks">{{ task?.name }}</li>
      </ul>
    </SQL> -->

    <!-- <SQL all="Task.ctor" :where="{'Actor.id':3}" #="tasks">
      <p>TASKS</p>
      <ul>
        <li v-for="task of tasks">{{ task?.name }}</li>
      </ul>
    </SQL> -->

    <!-- <SQL all="Product.type=ProductType" :where="{'ProductType.code':'PPORTFOLIO'}" #="products">
      <p>PRODUCTS IN PORTFOLIOS</p>
      <ul>
        <li v-for="product of products">{{ product?.name }}</li>
      </ul>
    </SQL> -->


    <!-- <SQL all="Task.children" :where="{'Actor.code':'EPETROVA'}" #="tasks">
      <p>NESTED PRODUCTS</p>
      <ul>
        <li v-for="task of tasks">{{ task?.name }}</li>
      </ul>
    </SQL> -->


    <!-- <SQL all="Actor.id=Task.actor" :where="{'Actor.code':'EPETROVA'}" #="tasks">
      <p>TASKS</p>
      <ul>
        <li v-for="task of tasks">{{ task?.name }}</li>
      </ul>
    </SQL> -->

    <!-- <SQL all="SELECT * FROM Actor INNER JOIN Task ON Actor.id = Task.actor " 
      :where="{'Actor.code':'EPETROVA'}" #="tasks">
      <p>TASKS</p>
      <ul>
        <li v-for="task of tasks">{{ task?.name }}</li>
      </ul>
    </SQL> -->


  </LayoutApp>
</template>
<script setup>
import { ref } from 'vue';
const id = ref();

import { useToast } from 'primevue/usetoast';
const toast = useToast();

import { useForm, useField } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage1 } = useField('value', validateField1);
// const { myfield2, errorMessage2 } = useField('myfield2', validateField2);

console.log(handleSubmit,value);

function validateField1(value) {
  if (!value) {
    return 'Name1 - Surname is required.';
  }

  return true;
}
// function validateField2(value) {
//   if (!value) {
//     return 'Name2 - Surname is required.';
//   }

//   return true;
// }


const onSubmit = handleSubmit((values) => {
  console.log(161, values);
  if (values.value && values.value.length > 0) {
    alert(JSON.stringify(values, null, 2));
    toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
    resetForm();
  }
});


</script>
