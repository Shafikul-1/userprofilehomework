<script setup>
import { ref, reactive } from "vue";
const showUserNav = ref(false);
// const userInfoShow = ()=>{
//   showUserNav.value = !showUserNav.value
//   console.log(showUserNav.value)
// }
</script>
<template>
  <li class="relative">
    <img :src="image.image" @click="showUserNav = !showUserNav" alt=""
      class="w-[30px] h-[30px] rounded-full cursor-pointer" />
    <div id="dropdownNavbar" :class="showUserNav ? '' : 'hidden'"
      class="absolute right-[-12px] top-[45px] z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
        <li>
          <RouterLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Dashboard</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Settings</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Earnings</RouterLink>
        </li>
      </ul>
      <div class="py-1">
        <RouterLink to="/"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
          Sign out</RouterLink>
      </div>
    </div>
  </li>
</template>
