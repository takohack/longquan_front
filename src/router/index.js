import VueRouter from "vue-router";


import Index from '../pages/index/Index'
import Course from '../pages/class/Course'
import Lesson from '../pages/class/Lesson'
import Profile from '../pages/personal/Profile'
import Discuss from '../pages/class/Discuss'
import Display from '../pages/class/Display'

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
           },
           {
               path: '/profile',
               component: Profile
           },
           {
               path: '/discuss',
               component: Discuss
           },
           {
               path: '/list',
               component: Display
           },
           {
            path: '/student',
            component: () => import('@/components/student/index'),
            children: [
            //   {path:"/",component: ()=> import('@/components/student/myExam')},
            //   {path:'/startExam', component: () => import('@/components/student/startExam')},
            //   {path: '/manager', component: () => import('@/components/student/manager')},
            //   {path: '/examMsg', component: () => import('@/components/student/examMsg')},
            //   {path: '/message', component: () => import('@/components/student/message')},
            //   {path: '/studentScore', component: () => import("@/components/student/answerScore")},
            //   {path: '/scoreTable', component: () => import("@/components/student/scoreTable")}
            ]
          },
    ]
})