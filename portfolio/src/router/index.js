import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToDoListView from '../views/ToDoListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: ToDoListView
    },
    {
      path: '/randomquotegenerator',
      name: 'randomquotegenerator',
      component: () => import('../views/RandomQuoteGeneratorView.vue')
    },
    {
      path: '/mycalculator',
      name: 'mycalculator',
      component: () => import('../views/CalculatorView.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('../views/AccordionView.vue')
    },
    {
      path: '/formvalidation',
      name: 'formvalidation',
      component: () => import('../views/FormValidationView.vue')
    },
    {
      path: '/progresssteps',
      name: 'progresssteps',
      component: () => import('../views/ProgressStepsView.vue')
    },
    {
      path: '/dadjokes',
      name: 'dadjokes',
      component: () => import('../views/DadJokesView.vue')
    },
    {
      path: '/githubusersearch',
      name: 'githubusersearch',
      component: () => import('../views/GitHubUserSearchView.vue')
    },
    {
      path: '/wikiclone',
      name: 'wikiclone',
      component: () => import('../views/WikiCloneView.vue')
    }
    // {
    //   // path: '/about',
    //   // name: 'about',
    //   // // route level code-splitting
    //   // // this generates a separate chunk (About.[hash].js) for this route
    //   // // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
