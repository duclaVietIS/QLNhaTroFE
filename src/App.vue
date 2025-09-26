<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Interpolation from './components/Interpolation.vue'
import Todo from './components/Todo.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>Hello Vite + Vue!</h1> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Home />
  <Interpolation /> -->
  <!-- <Todo /> -->

  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/contact">Contact</router-link> |
  <router-link to="/not-exist">Not Exist</router-link>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
