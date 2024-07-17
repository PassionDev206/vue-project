<template>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click:stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Contact</v-btn>
    </v-app-bar>
  </template>

<script>
export default {
    data() {
        return {
            drawer: false,
        };
    },
};
</script>