import { ref, reactive, watch } from 'vue'
import router from '../router/index'

import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

// Router Change Condition
const loginToken = localStorage.getItem('loginToken')
console.log(loginToken);
const users = reactive({
    isAuth : loginToken,
    signOut(){
        this.isAuth = localStorage.setItem('loginToken', false)
    }
})
// End ====================

// Sign Up Details =============
const getUserInfo = localStorage.getItem('userDetails2')
const getFullUserInfo = JSON.parse(getUserInfo)

const userDeails = reactive({
    fullName: '',
    email: '',
    password: '',
    confirmPass: '',
    userName: '',
    gender: '',
    userPhonenumber: '',
    dateOfBath: '',
    imageUrl: '',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
})

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const validImageTypes = [ "image/jpeg", "image/jpg",  "image/png", "image/webp", "image/svg+xml", ];
        if (validImageTypes.includes(file.type)) {
            const reader = new FileReader();
            reader.onload = (e) => {
                userDeails.image = e.target.result;
                // Generate a unique image link based on the file name and timestamp
                const uniqueId = `${userDeails.userName}_imageId_${Date.now()}`;
                userDeails.imageUrl = uniqueId;
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please select a valid image file (jpg, jpeg, png, webp, svg).");
            event.target.value = ""; // Clear the file input
            userDeails.image = ""; // Reset to the default image
        }
    }
};

// watch(userDeails, function userDetailsSumit(){
//     localStorage.setItem('userDetails2', JSON.stringify(userDeails))
// }, {immediate: true})
const userDetailsSumit = ()=>{
    localStorage.setItem('userDetails2', JSON.stringify(userDeails))
    router.push('/login')
}
// End SignUp Details ================

// Login Details ============
const loginInfo = reactive({
    name: '',
    email: '',
    pass: ''
})

const loginFRSubmit = ()=>{
    if((getFullUserInfo == null)|| (getFullUserInfo == undefined)){
        toast.error('Please registar your account')
    } else{
        if ((getFullUserInfo.userName == "") || (getFullUserInfo.email == "") || (getFullUserInfo.password == "")) {
            toast.error('Please registar your account')
        } else {
            if ( getFullUserInfo.userName !== loginInfo.name) {
                toast.error(`Did Not Match Login Name => ${loginInfo.name} ||  LocalStore Name => ${getFullUserInfo.userName} `)
            } else if ( getFullUserInfo.email !== loginInfo.email) {
                toast.error(`Did Not Match Login Email => ${loginInfo.email} ||  LocalStore Email => ${getFullUserInfo.email}`)
            } else if ( getFullUserInfo.password !== loginInfo.pass) {
                 toast.error(`Did Not Match Login Password => ${loginInfo.pass} ||  LocalStore Password => ${getFullUserInfo.password}`)
            } else {
                localStorage.setItem('loginToken', true)
                toast.success('Match Your Provide information => Successfully Done')
                router.push('/user')
            }  
        }
    }
}
// End Login Details ===========

// Update Login Details

// const userDeailsUpdate = reactive({
//     fullName: getFullUserInfo.fullName,
//     email: getFullUserInfo.email,
//     password: getFullUserInfo.password,
//     confirmPass: getFullUserInfo.confirmPass,
//     userName: getFullUserInfo.userName,
//     gender: getFullUserInfo.gender,
//     userPhonenumber: getFullUserInfo.userPhonenumber,
//     dateOfBath: getFullUserInfo.dateOfBath,
//     image: getFullUserInfo.image,
// })

// const editSubmit = () => {
//     localStorage.setItem('userDetails2', JSON.stringify(userDeails) )
//     console.log(userDeails)
//     router.push('/user')
// }

export{ getFullUserInfo, users, userDeails, userDetailsSumit, handleFileChange, loginInfo, loginFRSubmit,  }
