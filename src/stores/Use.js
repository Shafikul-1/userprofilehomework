import { defineStore } from "pinia";
import { ref, reactive } from 'vue'
import router from '../router/index'

import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

export const users = defineStore('users', ()=>{
    const getUserInfo = localStorage.getItem('userDetails')
    const getFullUserInfo = JSON.parse(getUserInfo)
    const isAuth = ref(false)

// SignUP 
    // const userDeails = reactive({
    //     fullName: '',
    //     email: '',
    //     password: '',
    //     confirmPass: '',
    //     userName: '',
    //     gender: '',
    //     userPhonenumber: '',
    //     dateOfBath: '',
    //     imageUrl: '',
    //     image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    // })

    // const userDetailsSumit = ()=>{
    //     localStorage.setItem('userDetails', JSON.stringify(userDeails))
    //     router.push('/login')
    // }

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml'];
    //       if (validImageTypes.includes(file.type)) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //           userDeails.image = e.target.result;
    //           // Generate a unique image link based on the file name and timestamp
    //           const uniqueId = `${userDeails.userName}_imageId_${Date.now()}`;
    //           userDeails.imageUrl = uniqueId;
    //         };
    //         reader.readAsDataURL(file);
    //       } else {
    //         alert('Please select a valid image file (jpg, jpeg, png, webp, svg).');
    //         event.target.value = ''; // Clear the file input
    //         userDeails.image = ''; // Reset to the default image
    //       }
    //     }
    // };

// Login 
    // const loginInfo = reactive({
    //     name: '',
    //     email: '',
    //     pass: ''
    // })

    // const loginFRSubmit = ()=>{
    //     if ( getFullUserInfo.userName !== loginInfo.name) {
    //         toast.error(`Did Not Match Login Name => ${loginInfo.name} ||  LocalStore Name => ${getFullUserInfo.userName} `)
    //     } else if ( getFullUserInfo.email !== loginInfo.email) {
    //         toast.error(`Did Not Match Login Email => ${loginInfo.email} ||  LocalStore Email => ${getFullUserInfo.email}`)
    //     } else if ( getFullUserInfo.password !== loginInfo.pass) {
    //          toast.error(`Did Not Match Login Password => ${loginInfo.pass} ||  LocalStore Password => ${getFullUserInfo.password}`)
    //     } else {
    //         isAuth.value = true
            
    //         toast.success('Match Your Provide information => Successfully Done')
    //         setInterval(() => {
    //             router.push('/user')
    //         }, 2000);
    //     }    
    // }

    const auth = ()=>{
        // isAuth.value = true
    }
    const notauth = ()=>{
        // isAuth.value = false
    }
// Sign Out
    const signOut = ()=>{
        localStorage.removeItem('userDetails')
    }

    return{ userDeails, userDetailsSumit, handleFileChange, loginInfo, loginFRSubmit, isAuth, signOut, auth, notauth }
})