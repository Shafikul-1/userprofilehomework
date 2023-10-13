<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'
import {RouterView} from 'vue-router'
import Navbar from './views/Navbar.vue';
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style scoped>
 
</style>