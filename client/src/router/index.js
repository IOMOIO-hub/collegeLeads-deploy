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
    name: 'college_landing',
    component: CollegeLandingView,
  },
  {
    path: '/DPO',
    name: 'DPO_landing',
    component: DPOLandingView,
  },
  {
    path: '/institute',
    name: 'institute_landing',
    component: InstituteLandingView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
