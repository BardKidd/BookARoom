<template>
    <div class="fullScreen homepageConfiguration" :style="{ backgroundImage: 'url(' + allBG[show] + ')' }">
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
                    <div class="thumbnail col-4" v-for="(item, key) in totalRooms" :key="key" :style="{ backgroundImage: `url(${ item.imageUrl })` }" @click.prevent="seeMore(item.id)">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </section>
        </div>
        <div class="homepageConfiguration_other homepageConfiguration_other--color">
            <button class="homepageConfiguration_other_btn homepageConfiguration_other_btn--style" @click.prevent="changeBG(key)" v-for="(item, key) in allBG" :key="key"><i class="far fa-circle" :class="{ 'fas': isActive === key }" @click="isActive = key"></i></button>
        </div>
    </div>
</template>
<script>
import BG1 from "../assets/image/BG1.png";
import BG2 from "../assets/image/BG2.png";
import BG3 from "../assets/image/BG3.png";
import BG4 from "../assets/image/BG4.png";

export default {
    data() {
        return {
            API: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
            token: process.env.VUE_APP_TOKEN,
            totalRooms: [],
            BG1,
            BG2,
            BG3,
            BG4,
            allBG: [BG1, BG2, BG3, BG4],
            roomId: '',
            show: 0,
            isActive: ''
        };
    },
    methods: {
        seeMore(id) {
            const vm = this;
            const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`;
            vm.roomId = id
            vm.$http.get(api).then(response => {
                if(response.data.success) {
                    vm.$router.push(`room/${vm.roomId}`)
                }
            })
        },
        changeBG(key) {
            const vm = this;
            vm.show = key;
            // vm.isActive = !vm.isActive;
        }
    },
    created() {
        this.$http.get(this.API).then(response => {
            this.totalRooms = response.data.items;
            // console.log(this.totalRooms)
        })
    }
};
</script>
