import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { auth } from '../firebase/firebase.config'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/About.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/signin',
        name: 'SigninPage',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SigninPage.vue'),
    },
    {
        path: '/signup',
        name: 'SignupPage',

        component: () =>
            import ('../views/SignupPage.vue'),
    },
    {
        path: '/item/:id',
        name: 'Item',
        component: () =>
            import ('../components/Item.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.path === '/signin' && auth.currentUser) {
        next('/')
        return
    }
    if (to.path === '/signup' && auth.currentUser) {
        next('/')
        return
    }
    if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !auth.currentUser
    ) {
        next('/signin')
        return
    }
    next()
})

export default router