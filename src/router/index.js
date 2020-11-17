import Vue from 'vue'
import Router from 'vue-router'

const MainComponent = () => import('@/components/MainComponent')
const PostComponent = () => import('@/components/PostComponent')
const PostDetailComponent = () => import('@/components/PostDetailComponent')
const UserDetailComponent=()=>import ('@/components/UserDetailComponent')
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
        name: 'Home',
        component: MainComponent,
        children: [
            {
                path: 'posts/:userid',
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
            {
                path:'user/:id',
                name:'user',
                component: UserDetailComponent
            }
        ]
    }
    
    ]
}
