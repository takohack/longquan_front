import VueRouter from "vue-router";

import ActivityCenter from '../pages/activity/ActivityCenter'
import TeenHome from '../pages/home/TeenHome'

export default new VueRouter({
    routes: [
            {
                path: '/',
                redirect: '/activitycenter'
            },
           {
               path: '/activitycenter',
               component: ActivityCenter
           },
           {
               path: '/teenhome',
               component: TeenHome
           }, 
           
    ]
})