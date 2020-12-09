<template>
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
                <div
                    class="thumbnail col-4"
                    v-for="(item, key) in totalRooms"
                    :key="key"
                    :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    @click.prevent="seeMore(item.id)"
                >
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            API: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
            roomId: '',
            show: 0,
            isActive: ''
        };
    },
    methods: {
        getRooms() {
            this.$store.dispatch('getroomdata');
        },
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
        },
    },
    created() {
        this.getRooms();
    },
    computed: {
        totalRooms() {
            return this.$store.state.rooms;
        }
    }
};
</script>
