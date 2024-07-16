<template>
  <v-app :dark="isDark">
    <v-main>
      <v-container>
        <v-switch v-model="isDark" label="Dark Mode"></v-switch>
        <v-row>
          <v-col>
            <v-btn color="secondary">Secondary Button</v-btn>
            <v-btn color="primary" v-on:click="writeText">Primary Button</v-btn>
          </v-col>
          <v-col>
            <h2>{{ text }}</h2>
            <p>{{ msg }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  props: {
    msg: String
  },

  data() { // define the default value of the state
    return{
      isDark: false,
      text: ''
    }
  },
  watch: { // monitor specific state with same name of function
    isDark(value) {
      console.log(this.isDark)
      this.$vuetify.theme.dark = value
    }
  },
  methods: {
    writeText() {
      this.text = 'Nice to meet you.'
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
