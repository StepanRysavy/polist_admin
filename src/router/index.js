import Vue from 'vue';
import Router from 'vue-router';
import LayoutLogin from '@/layout/login/do';
import LayoutHomepage from '@/layout/homepage/do';
import LayoutList from '@/layout/list/do';
import LayoutDetail from '@/layout/detail/do';
import store from '@/store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'EntryPoint',
      component: LayoutLogin
    },
    {
      path: '/admin',
      name: 'Admin',
      component: LayoutHomepage,
      meta: {requiresAuth: true}
    },
    {
      path: '/list/:id',
      name: 'List',
      props: true,
      component: LayoutList,
      meta: {requiresAuth: true}
    },
    {
      path: '/detail/:type/:id',
      name: 'Detail',
      props: true,
      component: LayoutDetail,
      meta: {requiresAuth: true}
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.user === -1) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
