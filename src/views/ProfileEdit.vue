<script setup>
import { reactive } from 'vue'
import router from '../router';
import {  getFullUserInfo } from '../stores/Users'
// const userDeails = userDeailsUpdate
const userDeails = reactive({
    fullName: getFullUserInfo.fullName,
    email: getFullUserInfo.email,
    password: getFullUserInfo.password,
    confirmPass: getFullUserInfo.confirmPass,
    userName: getFullUserInfo.userName,
    gender: getFullUserInfo.gender,
    userPhonenumber: getFullUserInfo.userPhonenumber,
    dateOfBath: getFullUserInfo.dateOfBath,
    image: getFullUserInfo.image,
})
const editSubmit = () => {
    localStorage.setItem('userDetails2', JSON.stringify(userDeails) )
    router.push('/user')
}
</script>
 
<template>
  <!-- This is the modal container -->
  <div id="userDetailsModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="modal-background fixed inset-0 bg-black opacity-30"></div>
    <div class="modal-content p-6 rounded shadow-lg w-full max-w-[50rem] z-10 bg-black h-[80vh] mt-[3rem] overflow-y-auto ">
      <!-- User Details Edit Form -->
      <div class="relative">
        <h1 class="text-2xl font-semibold mb-4 UserEdintPageHeading">Edit User Details</h1>
        <RouterLink to="/user" class="absolute top-[-19px] right-0 text-[2.4rem]">
            <i class="fa-solid fa-xmark text-white cursor-pointer"></i>
        </RouterLink>
      </div>
      <form @submit.prevent>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-white dark:text-gray-200" for="imageUrl">Enter Image Url</label>
                    <input id="imageUrl" type="text" v-model="userDeails.image"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label class="text-white dark:text-gray-200" for="username">Full Name</label>
                    <input id="username" type="text" v-model="userDeails.fullName"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label class="text-white dark:text-gray-200" for="passwordConfirmation">User Name</label>
                    <input id="color" type="text" v-model="userDeails.userName"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label class="text-white dark:text-gray-200" for="emailAddress">Email Address</label>
                    <input id="emailAddress" type="email" v-model="userDeails.email"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label class="text-white dark:text-gray-200" for="password">Password</label>
                    <input id="password" type="password" v-model="userDeails.password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label class="text-white dark:text-gray-200" for="passwordConfirmation"> Confirmation Password</label>
                    <input id="passwordConfirmation" type="password" v-model="userDeails.confirmPass"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label class="text-white dark:text-gray-200" for="passwordConfirmation">Gender</label>
                    <select v-model="userDeails.gender" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option value="" selected disabled>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label class="text-white dark:text-gray-200" for="passwordConfirmation">Phone Number</label>
                    <input id="range" type="number" v-model="userDeails.userPhonenumber"
                        class="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label class="text-white dark:text-gray-200" for="passwordConfirmation">Date Of Bath</label>
                    <input id="date" type="date" v-model="userDeails.dateOfBath"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
            </div>
            <!-- Add similar fields for other user details here -->

            <div class="flex justify-end mt-5">
                <button @click="editSubmit" type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover-bg-blue-600">Save</button>
                <RouterLink to="/user" id="closeModal" class="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 ml-2 cursor-pointer">Close</RouterLink>
            </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .UserEdintPageHeading{
    text-transform: capitalize;
    text-align: center;
    padding: 0;
    color: white;
    font-size: 2.2rem;
  }
</style>
