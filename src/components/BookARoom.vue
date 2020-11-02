<template>
    <div class="fullScreen homepageConfiguration" :style="{ backgroundImage: `url(${ BG1 })` }">
        <div class="container homepageConfiguration_main">
            <article class="homepageConfiguration_main_head col-3">
                <div class="homepageConfiguration_main_head_logo">
                    <img src="../assets/image/logo.png" alt="" />
                </div>
                <div class="homepageConfiguration_main_head_title">
                    <span>好室旅店。HOUSE HOTEL</span>
                    <span>花蓮縣花蓮市國聯一路1號</span>
                    <span>03-8321155</span>
                    <span>HOUSE@HOTEL.COM</span>
                </div>
            </article>
            <section class="homepageConfiguration_main_context col-9">
                <div class="homepageConfiguration_main_context_thumbnail">
                    <div class="thumbnail col-4" :style="{ backgroundImage: `url(${ Room1 })` }"></div>
                    <div class="thumbnail col-4" :style="{ backgroundImage: `url(${ Room2 })` }"></div>
                    <div class="thumbnail col-4" :style="{ backgroundImage: `url(${ Room3 })` }"></div>
                    <div class="thumbnail col-4" :style="{ backgroundImage: `url(${ Room4 })` }"></div>
                    <div class="thumbnail col-4" :style="{ backgroundImage: `url(${ Room5 })` }"></div>
                    <div class="thumbnail col-4" :style="{ backgroundImage: `url(${ Room6 })` }"></div>
                </div>
            </section>
        </div>
        <div class="homepageConfiguration_other">
            <button><i class="fas fa-circle"></i></button>
            <button><i class="far fa-circle"></i></button>
            <button><i class="far fa-circle"></i></button>
            <button><i class="far fa-circle"></i></button>
        </div>
    </div>
</template>
<script>
import BG1 from "../assets/image/BG1.png";
import Room1 from '../assets/image/room1.png';
import Room2 from '../assets/image/room2.png';
import Room3 from '../assets/image/room3.png';
import Room4 from '../assets/image/room4.png';
import Room5 from '../assets/image/room5.png';
import Room6 from '../assets/image/room6.png';

export default {
    data() {
        return {
            API: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
            token: process.env.VUE_APP_TOKEN,
            BG1,
            Room1,
            Room2,
            Room3,
            Room4,
            Room5,
            Room6
        };
    },
    // methods: {
    //     // getAllRooms() {
    //     //     const vm = this;
    //     //     // const api = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
    //     //     vm.$http.get(vm.API).then(response => {
    //     //         console.log(response.data)
    //     //     })
    //     // }
    // },
    // created() {
    //     this.$http.get(this.API).then(response => {
    //         console.log(response.data);
    //     })
    // }
};
</script>
