<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'
import { users } from '../stores/Users';
</script>

<template>
    <div class="">
         <h1>This is a Home Page</h1>
    </div>
    <button @click="users.signOut" class="font-bold bg-red-500 text-2xl">Sign Out</button>
</template>

<style scoped>
 
</style>