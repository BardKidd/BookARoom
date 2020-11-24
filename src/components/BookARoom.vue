<template>
    <div>
        <transition name="fade" mode="out-in" appear appear-active-class="fade-out_in">
            <div class="fullScreen homepageConfiguration" :class="[ isAnimation ? 'fade-out_in' : 'fade-leave-to']" :style="{ backgroundImage: 'url(' + allBG[show] + ')' }"></div>
        </transition>
        <home-page></home-page>
        <div class="homepageConfiguration_other homepageConfiguration_other--color">
            <button class="homepageConfiguration_other_btn homepageConfiguration_other_btn--style" @click.prevent="changeBG(key)" v-for="(item, key) in allBG" :key="key">
                <i class="far fa-circle" :class="{ 'fas': isActive === key }" @click="isActive = key"></i>
            </button>
        </div>
    </div>
    
</template>
<script>
import HomePage from "./HomePage.vue";
import BG1 from "../assets/image/BG1.png";
import BG2 from "../assets/image/BG2.png";
import BG3 from "../assets/image/BG3.png";
import BG4 from "../assets/image/BG4.png";

export default {
    components: {
        HomePage
    },
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
            isActive: 0,
            isAnimation: true
        };
    },
    methods: {
        changeBG(key) {
            const vm = this;
            vm.show = key;
            vm.isAnimation = !vm.isAnimation;
        }
    },
    created() {
        const vm = this;
        vm.$http.get(vm.API).then(response => {
            vm.totalRooms = response.data.items;
        })
    },
    mounted() {
        const vm = this;
        setInterval(() => {
            vm.show++
            vm.isActive++
            vm.isAnimation = !vm.isAnimation;
            if (vm.show === vm.allBG.length) {
                vm.show = 0
                vm.isActive = 0
            }
        }, 5000)
    }
};
</script>
