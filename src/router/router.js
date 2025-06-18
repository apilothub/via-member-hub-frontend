import { createRouter, createWebHistory } from 'vue-router';
import ComEvent from '../views/Event.vue';
import ComEventDetail from '../views/EventDetail.vue';
import NotFound from '../views/404.vue';
import Challenges from '../views/Challenges.vue';
import AboutPage from '../views/About.vue';
import Posts from '../views/CommentPage.vue';

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: ComEvent,
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: ComEventDetail,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
  ,
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenges,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,

  },
  {
    path: '/comment/:postId',
    name: 'CommentPage',
    component: Posts,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
