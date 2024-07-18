<template>
  <v-app :dark="isDark">
    <v-main>
      <v-container>
        <v-switch v-model="isDark" label="Dark Mode"></v-switch>
        <v-row>
          <v-col>
            <v-btn color="secondary" v-on:click="increament">{{ state.count }}</v-btn>
            <v-btn color="primary" v-on:click="writeText">Primary Button</v-btn>
            <v-btn color="accent" @click="state.cnt++">{{ state.cnt }}</v-btn>
          </v-col>
          <v-col>
            <h2>{{ state.text }}</h2>
            <p>{{ msg }}</p>
          </v-col>
        </v-row>

        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { reactive } from "vue";
export default {
  
  name: "App",
  
  props: {
    msg: String,
  },
  
  data() {
    // define the default value of the state
    return {
      isDark: false,
    };
  },
  watch: {
    // monitor specific state with same name of function
    isDark(value) {
      console.log(this.isDark);
      this.$vuetify.theme.dark = value;
    },
  },

  setup() {
    const state = reactive({
      count: 0,
      text: '',
      cnt:0
    })
    
    function increament() {
      state.count++
    }

    function increase() {
      state.cnt++
    }

    function writeText() {
      state.text = "Hello world!"
    }

    return {
      state,
      increament,
      increase,
      writeText
    }
  },
};
</script>

<style>
/* Add your styles here */
</style>
