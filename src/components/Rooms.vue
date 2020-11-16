<template>
    <div>
        <article
            class="col-5 bookRoom"
            :style="{ backgroundImage: `url(${Room1})` }"
        >
            <a href="#" class="bookRoom_back bookRoom_grid">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8.316"
                    height="15.874"
                    viewBox="0 0 8.316 15.874"
                >
                    <g transform="translate(-14 -3.991)">
                        <path
                            class="a"
                            d="M21.925,3.992a.367.367,0,0,0-.26.114L14.111,11.66a.378.378,0,0,0,0,.534l7.555,7.555a.378.378,0,1,0,.534-.534l-7.288-7.288L22.2,4.64a.377.377,0,0,0,.084-.418A.373.373,0,0,0,21.925,3.992Z"
                            transform="translate(0 0)"
                        />
                    </g>
                </svg>
                <span>查看其他房型</span>
            </a>
            <section class="bookRoom_booking bookRoom_grid">
                <div class="bookRoom_booking_price">
                    <span class="bookRoom_booking_price_money money">9999</span>
                    <span class="bookRoom_booking_price_night">1晚</span>
                </div>
                <button class="bookingBtn bookingBtn_now">Booking now</button>
            </section>
            <section class="bookRoom_list bookRoom_grid">
                <button><i class="fas fa-circle"></i></button>
                <button><i class="far fa-circle"></i></button>
                <button><i class="far fa-circle"></i></button>
            </section>
        </article>
        <article class="col-7 roomData">
            <h1>Single Room</h1>
            <span>1人·單人床·附早餐·衛浴1間·18平方公尺</span>
            <section>
                <p>平日（一～四）價格：1380 / 假日（五〜日）價格：1500</p>
                <p>入住時間：15：00（最早）/ 21：00（最晚）</p>
                <p>退房時間：10：00</p>
            </section>
            <section>
                <p>・單人間僅供一位客人使用。</p>
                <p>・臥室配有單人床和私人浴室。</p>
                <p>
                    ・您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。
                </p>
                <p>・房間裡有AC，當然還有WiFi。</p>
            </section>
            <section>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
            </section>
            <section>
                <p>空房狀態查詢</p>
                <div>月曆</div>
            </section>
        </article>
    </div>
</template>
<script>
import Room1 from "../assets/image/room1.png";
export default {
    data() {
        return {
            roomId: "",
            Room1,
        };
    },
    methods: {
        getRoomData() {
            const vm = this;
            const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomId}`;
            vm.$http.get(api).then((response) => {
                console.log(response.data.room);
            });
        },
    },
    created() {
        this.roomId = this.$route.params.roomId;
        this.getRoomData();
    },
};
</script>
