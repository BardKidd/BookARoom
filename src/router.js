import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('./components/BookARoom.vue'),
            children: [
                {
                    path: 'rooms/:roomId',
                    name: 'Rooms',
                    component: () => import('./components/Rooms.vue')
                }
            ]
        }
    ]
})