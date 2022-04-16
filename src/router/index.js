import VueRouter from "vue-router";


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