import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import StoreView from "@/views/StoreView.vue";


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
      component: AboutView
    },{
      path: '/contact',
      name: 'contact',
      component: ContactView
    },{
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/single/product/:id',
      name: 'productDetails',
      component: ProductDetails
    }
  ]
})

export default router
