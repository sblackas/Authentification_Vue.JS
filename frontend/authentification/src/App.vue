<template>
  <div id="app">
    <!-- <MyJumbotron/> -->
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
// import MyJumbotron from './components/MyJumbotron.vue';

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
