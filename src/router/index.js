import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { users } from '../stores/Users'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      component: ()=> import('../components/Auth/SignUp.vue')
    },
    {
      path: '/login',
      component: ()=> import('../components/Auth/Login.vue')
    },
    {
      path: '/user',
      component: ()=> import('../views/UserProfile.vue'),
      meta: { 
        requiresAuth: true 
      },
      children: [
        {
          path: 'edit',
          component: ()=> import ('../views/ProfileEdit.vue')
        }
      ]
    }
    
  ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth == true && !users.isAuth ) {
    next('/login')
  } else {
    next()
  }
})

export default router
