import{ createRouter, createWebHashHistory, createWebHistory }from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', 
      redirect: '/MusicalKeyboard',
    },
    {
      path: '/MusicalKeyboard',
      component: () => import('../Views/MusicalKeyboard.vue')
    }

  ]
})

export default router