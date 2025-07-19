import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    redirect: '/'
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../components/ProjectsPage.vue')
  },
  {
    path: '/project/:slug',
    name: 'ProjectDetail',
    component: () => import('../components/ProjectDetail.vue'),
    props: true
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: () => import('../components/CertificatesPage.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../components/ForumPage.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/ProfilePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
