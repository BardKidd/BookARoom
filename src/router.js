import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./components/BookARoom.vue')
        },
        {
            path: '/room:roomId',
            name: 'Rooms',
            component: () => import('./components/Rooms.vue')
        }
    ]
})