<template>
    <div>
        <article class="col-5">123</article>
        <section class="col-7">456</section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            roomId: ''
        }
    },
    methods: {
        getRoomData() {
            const vm = this;
            const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomId}`;
            vm.$http.get(api).then(response => {
                console.log(response.data)
            })
        }
    },
    created() {
        this.roomId = this.$route.params.roomId;
        this.getRoomData();
        console.log('OK')
    }
}
</script>