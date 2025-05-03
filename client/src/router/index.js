import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import CollegeLandingView from "@/views/CollegeLandingView.vue";
import DPOLandingView from "@/views/DPOLandingView.vue";
import InstituteLandingView from "@/views/InstituteLandingView.vue";


const routes = [
  {
    path: '/common',
    name: 'landing',
    component: LandingView,
  },
  {
    path: '/college',
    name: 'Колледж',
    component: CollegeLandingView,
  },
  {
    path: '/DPO',
    name: 'ДПО',
    component: DPOLandingView,
  },
  {
    path: '/institute',
    name: 'Институт',
    component: InstituteLandingView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
