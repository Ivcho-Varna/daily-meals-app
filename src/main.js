import './assets/main.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from '@/App.vue'
import Homepage from '@/Homepage.vue'
import Category from '@/Category.vue'
import Meal from '@/Meal.vue'
import RandomMeal from '@/RandomMeal.vue'
import Search from '@/Search.vue'
import Ingredients from '@/Ingredients.vue'
import SendRecipe from '@/SendRecipe.vue'

const routes = [
    { path: '/', component: Homepage },
    { path: '/category', component: Category },
    { path: '/meal', component: Meal },
    { path: '/random-meal', component: RandomMeal },
    { path: '/search', component: Search },
    { path: '/ingredients', component: Ingredients },
    { path: '/send-recipe', component: SendRecipe },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

const app = createApp(App)
app.use(router)
app.mount('#app')
