<template>
  <div class="app">
    <navbar />
    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
body {
  font-family: Arial, sans-serif;
  color: #686868;
}
h1 {
  margin: 20px 0;
  text-transform: uppercase;
}
.container {
  width: 1440px;
  max-width: 80%;
  margin: 0 auto;
}
</style>