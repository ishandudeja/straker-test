import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const MainComponent = () => import('@/components/MainComponent')
const PostComponent = () => import('@/components/PostComponent')
const PostDetailComponent = () => import('@/components/PostDetailComponent')
Vue.use(Router)
export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [{
        path: '/',
        // redirect: '/dashboard',
        name: 'Home',
        component: MainComponent,
        children: [
                       {
                path: 'posts/:id',
                meta: {
                  label: 'Posts'
                },
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    path: '',
                    name: 'Posts',
                    component: PostComponent
                  },
                  {
                    path: ':id',
                    meta: {
                      label: 'Post Details'
                    },
                    name: 'Post',
                    component: PostDetailComponent
                  }
                ]
              },
        ]
        }
    ]
}
