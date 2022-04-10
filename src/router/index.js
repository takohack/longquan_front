import VueRouter from "vue-router";

import ActivityCenter from '../pages/activity/ActivityCenter'
import TeenHome from '../pages/home/TeenHome'
import Place from '../pages/place/Place'
import Peixun from '../pages/place/Peixun'
import News from '../components/News'
import Index from '../pages/index/Index'
import Course from '../pages/class/Course'
import Lesson from '../pages/class/Lesson'

export default new VueRouter({
    routes: [
            {
                path: '/',
                redirect: '/index'
            },
           {
               path: '/activitycenter',
               component: ActivityCenter
           },
           {
               path: '/teenhome',
               component: TeenHome
           },
           {
               path: '/place',
               component: Place

           },
           {
               path:'/news',
               component: News
           },
           {
               path: '/peixun',
               component: Peixun
           },
           {
               path: '/index',
               component: Index
           },
           {
               path: '/course',
               component: Course
           },
           {
               path: '/lesson',
               component: Lesson
           } 
    ]
})