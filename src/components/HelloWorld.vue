<template>
  <form class="container" v-on:submit.prevent="items.push({ id: items.length + 1, label: newItem })">
    <div class="shoping-list-card">
      <h1>{{ header }}</h1>
      <input
        type="text"
        placeholder="Add an item"
        v-model="newItem"
      />
      <label>
        <input type="checkbox" v-model="newItemHighPriority" />
        High Priority
      </label>
      <button
        class="btn btn-primary"
        type="submit"
      >
        Save Item
      </button>
      <ul>
        <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
      </ul>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const header = ref("Shopping List App");
const items = ref([
  { id: 1, label: "10 party hats" },
  { id: 2, label: "2 board games" },
  { id: 3, label: "20 cups" },
]);
const newItem = ref("");
const newItemHighPriority = ref(false);
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
.shoping-list-card {
  padding: 50px 30px;
  background-color: darkgray;
  max-width: 500px;
}
.shoping-list-card ul {
  list-style-type: none;
  margin: 0;
}
.shoping-list-card ul li {
  margin-left: 0;
}
.btn {
  padding: 8px 12px;
  border-radius: 5px;
}
.btn-primary {
  background-color: paleturquoise;
}
</style>
