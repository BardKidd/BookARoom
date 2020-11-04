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
                    <div class="thumbnail col-4" v-for="(item, key) in totalRooms" :key="key" :style="{ backgroundImage: `url(${ item.imageUrl })` }" @click.prevent="seeMore(item.id)">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </section>
        </div>
        <div class="homepageConfiguration_other homepageConfiguration_other--color">
            <button class="homepageConfiguration_other_btn homepageConfiguration_other_btn--style"><i class="fas fa-circle"></i></button>
            <button class="homepageConfiguration_other_btn homepageConfiguration_other_btn--style"><i class="far fa-circle"></i></button>
            <button class="homepageConfiguration_other_btn homepageConfiguration_other_btn--style"><i class="far fa-circle"></i></button>
            <button class="homepageConfiguration_other_btn homepageConfiguration_other_btn--style"><i class="far fa-circle"></i></button>
        </div>
    </div>
</template>
<script>
import BG1 from "../assets/image/BG1.png";

export default {
    data() {
        return {
            API: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
            token: process.env.VUE_APP_TOKEN,
            totalRooms: [],
            BG1,
            roomId: ''
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
        }
    },
    created() {
        this.$http.get(this.API).then(response => {
            this.totalRooms = response.data.items;
            console.log(this.totalRooms)
        })
    }
};
</script>
