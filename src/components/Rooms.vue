<template>
    <div>
        <!-- 訂房簡介 -->
        <article class="col-5 bookRoom" :style="{ backgroundImage: `url(${Room1})` }">
            <router-link to="/" href="#" class="bookRoom_back bookRoom_grid">
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
            </router-link>

            <section class="bookRoom_booking bookRoom_grid">
                <div class="bookRoom_booking_price">
                    <span class="bookRoom_booking_price_money money">9999</span>
                    <span class="bookRoom_booking_price_night">1晚</span>
                </div>
                <button
                    class="bookingBtn bookingBtn_now"
                    @click.prevent="openOrder()"
                >
                    Booking now
                </button>
            </section>

            <section class="bookRoom_list bookRoom_grid">
                <button class="bookRoom_list_btn bookRoom_list_btn--color">
                    <i class="fas fa-circle"></i>
                </button>
                <button class="bookRoom_list_btn bookRoom_list_btn--color">
                    <i class="far fa-circle"></i>
                </button>
                <button class="bookRoom_list_btn bookRoom_list_btn--color">
                    <i class="far fa-circle"></i>
                </button>
            </section>
        </article>

        <!-- 房間資訊 -->
        <article class="col-7 roomData">
            <h1 class="roomData_title">{{ roomData.name }}</h1>
            <span class="roomData_subtitle"
                >1人·單人床·附早餐·衛浴1間·18平方公尺</span
            >
            <section class="roomData_content">
                <p>平日（一～四）價格：1380 / 假日（五〜日）價格：1500</p>
                <p>入住時間：15：00（最早）/ 21：00（最晚）</p>
                <p>退房時間：10：00</p>
            </section>
            <section class="roomData_content">
                <p>・單人間僅供一位客人使用。</p>
                <p>・臥室配有單人床和私人浴室。</p>
                <p>
                    ・您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。
                </p>
                <p>・房間裡有AC，當然還有WiFi。</p>
            </section>
            <section class="roomData_precaution">
                <div class="roomData_precaution_box" v-for="(icon, key) in allSvg" :key="key">
                    <span class="roomData_precaution_box_icon"></span>
                    <span class="roomData_precaution_box_yes"></span>
                </div>
            </section>
            <section class="rooomData_monthly">
                <p class="rooomData_monthly_title">空房狀態查詢</p>
                <DatePicker></DatePicker>
            </section>
        </article>

        <!-- Order -->
        <div class="modal" tabindex="-1" role="dialog" id="bookingOrder">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <article class="col-5 boxGrid">
                            <form>
                                <div class="form-group">
                                    <label for="formGroupExampleInput"
                                        >姓名</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="formGroupExampleInput"
                                        placeholder="Example input"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2"
                                        >手機</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="Another input"
                                    />
                                </div>
                                <div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect2"
                                            >入住日期</label
                                        >
                                        <select
                                            multiple
                                            class="form-control"
                                            id="exampleFormControlSelect2"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect3"
                                            >退房日期</label
                                        >
                                        <select
                                            multiple
                                            class="form-control"
                                            id="exampleFormControlSelect3"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <span>2天，1晚平日</span>
                                </div>
                                <div>
                                    <span>總計</span>
                                    <span class="money">9999</span>
                                </div>
                                <button>確定送出</button>
                                <p>
                                    此預約系統僅預約功能，並不會針對您進行收費
                                </p>
                            </form>
                        </article>
                        <article class="col-7 boxGrid">
                            <div class="model-header">
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <!-- 房間資訊 -->
                            <div>
                                <h3>Single Room</h3>
                                <span
                                    >1人・ 單人床・附早餐・
                                    衛浴1間・18平方公尺</span
                                >
                                <span
                                    >平日（一～四）價格：1380 /
                                    假日（五〜日）價格：1500</span
                                >
                                <div>
                                    <div>
                                        <span>icon</span>
                                        <span>早餐</span>
                                    </div>
                                </div>
                            </div>
                            <!-- 訂房資訊 -->
                            <div>
                                <h3>訂房資訊</h3>
                                <span
                                    >・入住時間：最早15：00，最晚21：00；退房時間：10：00，請自行確認行程安排。</span
                                >
                                <span
                                    >・平日定義週一至週四；假日定義週五至週日及國定假日。</span
                                >
                                <span>・好室旅店全面禁止吸菸。</span>
                                <span
                                    >・若您有任何問題，歡迎撥打 03-8321155 (
                                    服務時間 週一至週六 10:00 - 18:00 )。</span
                                >
                            </div>
                            <!-- 預約流程 -->
                            <div>
                                <h3>預約流程</h3>
                                <div>
                                    <div>
                                        <span>icon</span>
                                        <span>說明</span>
                                    </div>
                                    <span>> 符號</span>
                                    <div>
                                        <span>icon</span>
                                        <span>說明</span>
                                    </div>
                                    <span>> 符號</span>
                                    <div>
                                        <span>icon</span>
                                        <span>說明</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import Room1 from "../assets/image/room1.png";
import DatePicker from "./DatePicker";
import icon1 from "../assets/icon/icon1.svg";
import icon2 from "../assets/icon/icon2.svg";
import icon3 from "../assets/icon/icon3.svg";
import icon4 from "../assets/icon/icon4.svg";
import icon5 from "../assets/icon/icon5.svg";
import icon6 from "../assets/icon/icon6.svg";
import icon7 from "../assets/icon/icon7.svg";
import icon8 from "../assets/icon/icon8.svg";
import icon9 from "../assets/icon/icon9.svg";
import icon10 from "../assets/icon/icon10.svg";
import icon11 from "../assets/icon/icon11.svg";
import icon12 from "../assets/icon/icon12.svg";
import icon98 from "../assets/icon/icon98.svg";
import icon99 from "../assets/icon/icon99.svg";


export default {
    components: {
        DatePicker,
    },
    data() {
        return {
            roomId: "",
            Room1,
            icon1,
            icon2,
            icon3,
            icon4,
            icon5,
            icon6,
            icon7,
            icon8,
            icon9,
            icon10,
            icon11,
            icon12,
            icon98,
            icon99,
            roomData: {},
            roomAmenities: {},
            allSvg: [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12],
            yesOrNo: [icon98, icon99]
        };
    },
    methods: {
        getRoomData() {
            const vm = this;
            const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomId}`;
            vm.$http.get(api).then((response) => {
                vm.roomData = response.data.room[0];
                vm.roomAmenities = response.data.room[0].amenities;
                console.log(vm.roomAmenities);

            });
        },
        openOrder() {
            $("#bookingOrder").modal("show");
        },
        iconView() {
            // const vm = this;
            let num = 1;
            let num2 = 98;
            let iconTemplate = document.querySelectorAll('roomData_precaution_box_icon');
            let iconYN = document.querySelectorAll('roomData_precaution_box_yes');
            let iconElement = document.createElement(`icon${num}`);
            let yOrNo = document.createElement(`icon${num2}`)
            iconTemplate.appendChild(iconElement);
            iconYN.appendChild(yOrNo);
        }
    },
    computed: {
        
    },
    created() {
        this.roomId = this.$route.params.roomId;
        this.getRoomData();
        this.iconView();
    },
};
</script>
