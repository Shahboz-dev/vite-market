<template>
  <navbar></navbar>
  <div class="app"></div>
  <router-view/>
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
</script>


<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app{
        padding: 20px;
    }
</style>
