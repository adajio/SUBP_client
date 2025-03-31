<template>
  <DataProvider url="https://jsonplaceholder.typicode.com/users">
    <div slot-scope="{ data, loading }">
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h2>Result: {{ data.length }} users</h2>
        <p v-for="user in data" :key="user.id">{{ user.name }}</p>
      </div>
    </div>
  </DataProvider>
</template>

<script>
import DataProvider from "./DataProvider";

export default {
  components: { DataProvider }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
