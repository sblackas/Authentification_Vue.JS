<template>
  <div id="app">
    <!-- <MyJumbotron/> -->
    <router-view :key="$route.path"></router-view> <!-- router-view va remplace nos url qlqu'ils soient -->
  </div>
</template>

<script>
// import MyJumbotron from './components/MyJumbotron.vue'; // je n'ai plus besoin de l'import myjumbotron, de mes composants a cause de router-view

export default {
  name: 'App',
  components: {
    // MyJumbotron
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
