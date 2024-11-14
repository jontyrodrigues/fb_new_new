import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Match from '../views/Match.vue'
import Tables from '../views/Tables.vue'
import Stories from '../views/Stories.vue'
import Story from '../views/Story.vue'
import Schedule from '../views/Schedule.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/match/:id', component: Match },
    { path: '/tables', component: Tables },
    { path: '/stories', component: Stories },
    { path: '/story/:id', component: Story },
    { path: '/schedule', component: Schedule },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

export default router