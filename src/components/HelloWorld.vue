<template>
  <div class="container">
    <h1>{{ header }}</h1>
    <button class="btn" v-if="editing" @click="doEdit(false)">Cancel</button>
    <button class="btn btn-primary" v-else @click="doEdit(true)">Add Item</button>
    <a v-bind:href="newItem">Dynamic Link</a>
    <form class="shoping-list-card" v-if="editing" @submit.prevent="saveItem">
      <input type="text" placeholder="Add an item" v-model="newItem" />
      <label>
        <input type="checkbox" v-model="newItemHighPriority" />
        High Priority
      </label>
      <button class="btn btn-primary" type="submit">Save Item</button>
      <ul>
        <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
      </ul>
      <p v-if="!items.length">Nothing to see here</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const header = ref("Shopping List App");
const items = ref([
  // { id: 1, label: "10 party hats" },
  // { id: 2, label: "2 board games" },
  // { id: 3, label: "20 cups" },
]);
const newItem = ref("");
const newItemHighPriority = ref(false);
const editing = ref(false)
const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value });
  newItem.value = "";
};

const doEdit = (e) => {
  editing.value = e
  newItem.value = ""
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  background-color: darkgray;
  padding: 50px 30px;
}
.shoping-list-card {
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
