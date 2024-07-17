<template>
  <v-app>
    <NavbarComponent/>
    <HelloWorld msg="Welcome to my first Vue app"/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import NavbarComponent from './layouts/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
