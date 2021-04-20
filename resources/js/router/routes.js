const routes = [
    {
        path: '',
        component: () => import('../pages/Home.vue'),
        name: 'home'
    },
    {
        path: 'about',
        component: () => import('../pages/About.vue'),
        name: 'about'
    },
]

export default routes;