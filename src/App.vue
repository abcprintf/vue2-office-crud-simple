<template>
  <div id="app">
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" />
    <p>
      {{ message }}
    </p>
    <lits-items :items="items" :message="message" @handle-click="handleChange"></lits-items>

    <button @click="handleClick">Click Me</button> -->

    <router-view />

  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import LitsItems from './components/LitsItems.vue';

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  //   LitsItems
  // },
  data() {
    return {
      message: "Hello Mix",
      items: [
        {
          id: 1,
          name: "A1",
        },
        {
          id: 2,
          name: "A2",
        },
        {
          id: 3,
          name: "A3"
        }
      ],
    };
  },
  methods: {
    handleChange() {
      alert("handleChange");
    },
    handleClick() {
      alert("click me !!!");
    }
  },
  created() {
    console.log(`created`);
  },
  mounted() {
    console.log(`mounted`);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
