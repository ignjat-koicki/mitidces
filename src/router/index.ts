import { createRouter, createWebHistory } from 'vue-router'
import AboutView from './../views/AboutView.vue'
import HomeView from './../views/HomeView.vue'
import MobilePhonesView from '../views/MobilePhonesView.vue'
import ServiceView from './../views/ServiceView.vue'
import ProductsView from '../views/products/ProductsView.vue'
import AllProductsView from '../views/products/AllProductsView.vue'
import AccessoriesView from '../views/products/AccessoriesView.vue'
import CustomerSupport from '../views/CustomerSupportView.vue'
import CustomerServicesView from '../views/services/CustomerServicesView.vue'
import EntertainmentView from '../views/services/EntertainmentView.vue'
import NewsView from '../views/NewsView.vue'
import TVs from '../views/TVs.vue'
import LaptopsView from '@/views/LaptopsView.vue'
import eOffice from '@/views/eOffice.vue'
import LanguagePageView from '@/views/LanguagePageView.vue'
import LegalQustionsView from '@/views/footer-pages/LegalQuestionsView.vue'
import PrivacyPolicesView from '@/views/footer-pages/PrivacyPolicesView.vue'
import SalesView from '@/views/footer-pages/SalesView.vue'
import TermsOfUseView from '@/views/footer-pages/TermsOfUseView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/legal-questions',
    name: 'LegalQuestions',
    component: LegalQustionsView,
  },
  {
    path: '/privacy-polices',
    name: 'PrivacyPolices',
    component: PrivacyPolicesView,
  },
  {
    path: '/sales',
    name: 'Sales',
    component: SalesView,
  },
  {
    path: '/terms-of-use',
    name: 'TermsOfUses',
    component: TermsOfUseView,
  },
  {
    path: '/language',
    name: 'Language',
    component: LanguagePageView,
  },
  {
    path: '/laptops',
    name: 'Laptops',
    component: LaptopsView,
  },
  {
    path: '/office',
    name: 'eOffice',
    component: eOffice,
  },
  {
    path: '/tvs',
    name: 'TVs',
    component: TVs,
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/models-mobile-phones',
    name: 'MobilePhones',
    component: MobilePhonesView,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServiceView,
  },
  {
    path: '/entertaiment',
    name: 'Entertainment',
    component: EntertainmentView,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView,
  },
  {
    name: 'AllProducts',
    path: '/all-products',
    component: AllProductsView,
  },
  {
    name: 'Accessories',
    path: '/accessories',
    component: AccessoriesView,
  },
  {
    name: 'CustomerSupport',
    path: '/customer-support',
    component: CustomerSupport,
  },
  {
    name: 'ForCustomers',
    path: '/for-customers',
    component: CustomerServicesView,
  },
]

// const routes = [
//   { path: '/', redirect: { name: 'Home', params: { lang: 'en' } } },
//   {
//     path: '/:lang(sr-latin-rs|en|eu-fr)$',
//     redirect: (to) => ({ name: 'Home', params: { lang: to.params.lannavigatg } }),
//   },
//   {
//     path: '/:lang(sr-latin-rs|en|eu-fr)',
//     component: { template: '<router-view />' },
//     children: [
//       {
//         path: '/',
//         name: 'Home',
//         component: HomeView,
//       },
//       {
//         path: 'legal-questions',
//         name: 'LegalQuestions',
//         component: LegalQustionsView,
//       },
//       {
//         path: 'privacy-polices',
//         name: 'PrivacyPolices',
//         component: PrivacyPolicesView,
//       },
//       {
//         path: 'sales',
//         name: 'Sales',
//         component: SalesView,
//       },
//       {
//         path: 'terms-of-use',
//         name: 'TermsOfUses',
//         component: TermsOfUseView,
//       },
//       {
//         path: 'language',
//         name: 'Language',
//         component: LanguagePageView,
//       },
//       {
//         path: 'laptops',
//         name: 'Laptops',
//         component: LaptopsView,
//       },
//       {
//         path: 'office',
//         name: 'eOffice',
//         component: eOffice,
//       },
//       {
//         path: 'tvs',
//         name: 'TVs',
//         component: TVs,
//       },
//       {
//         path: 'news',
//         name: 'News',
//         component: NewsView,
//       },
//       {
//         path: 'about',
//         name: 'About',
//         component: AboutView,
//       },
//       {
//         path: 'models-mobile-phones',
//         name: 'MobilePhones',
//         component: MobilePhonesView,
//       },
//       {
//         path: 'services',
//         name: 'Services',
//         component: ServiceView,
//       },
//       {
//         path: 'entertaiment',
//         name: 'Entertainment',
//         component: EntertainmentView,
//       },
//       {
//         path: 'products',
//         name: 'Products',
//         component: ProductsView,
//       },
//       {
//         name: 'AllProducts',
//         path: 'all-products',
//         component: AllProductsView,
//       },
//       {
//         name: 'Accessories',
//         path: 'accessories',
//         component: AccessoriesView,
//       },
//       {
//         name: 'CustomerSupport',
//         path: 'customer-support',
//         component: CustomerSupport,
//       },
//       {
//         name: 'ForCustomers',
//         path: 'for-customers',
//         component: CustomerServicesView,
//       },
//     ],
//   },
//   { path: '/:pathMatch(.*)*', redirect: { name: 'Home', params: { lang: 'en' } } },
// ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
