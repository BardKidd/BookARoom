<template>
    <div>
        <!-- 訂房簡介 -->
        <article class="col-5 bookRoom">
            <div class="bookRoom_BG" :style="{ backgroundImage: 'url(' + allRoom[show] + ')' }" @click.prevent="openBigBG"></div>
            <router-link to="/" href="#" class="bookRoom_back bookRoom_grid">
                <arrow></arrow>
                <span>查看其他房型</span>
            </router-link>

            <section class="bookRoom_booking bookRoom_grid">
                <div class="bookRoom_booking_price">
                    <span class="bookRoom_booking_price_money money" v-if="allDay.length > 0">{{ normalDay.length * roomData.normalDayPrice + holiDay.length * roomData.holidayPrice }}</span>
                    <span class="bookRoom_booking_price_money money" v-else>{{ roomData.normalDayPrice }}</span>

                    <span class="bookRoom_booking_price_night" v-if="allDay.length > 0">{{ allDay.length }} 晚</span>
                    <span class="bookRoom_booking_price_night" v-else>1 晚</span>
                </div>
                <button
                    class="bookingBtn bookingBtn_now"
                    @click.prevent="bookingBtn"
                >
                    Booking now
                </button>
            </section>

            <section class="bookRoom_list bookRoom_grid">
                <button class="bookRoom_list_btn bookRoom_list_btn--color" v-for="(item, key) in allRoom" :key="key" @click="changeBG(key)">
                    <i class="far fa-circle" :class="{ 'fas': isActive === key }" @click="isActive = key"></i>
                </button>
            </section>
        </article>

        <!-- 圖片瀏覽 -->
        <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" :class="{ 'displayNone': openBGBig === false }">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img :src="allRoom[0]" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img :src="allRoom[1]" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img :src="allRoom[2]" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div> -->

        <!-- 房間資訊 -->
        <article class="col-7 roomData" v-if="roomData.descriptionShort.Bed">
            <h1 class="roomData_title">{{ roomData.name }}</h1>
            <span class="roomData_subtitle"
                >{{ roomData.descriptionShort.GuestMin }}~{{ roomData.descriptionShort.GuestMax }}人·{{ roomData.descriptionShort.Bed.length }}床·附早餐·衛浴{{ roomData.descriptionShort['Private-Bath'] }}間·{{ roomData.descriptionShort.Footage }}平方公尺</span
            >
            <section class="roomData_content">
                <p>平日（一～四）價格：{{ roomData.normalDayPrice }} / 假日（五〜日）價格：{{ roomData.holidayPrice }}</p>
                <p>入住時間：{{ roomData.checkInAndOut.checkInEarly }}（最早）/ {{ roomData.checkInAndOut.checkInLate }}（最晚）</p>
                <p>退房時間：{{ roomData.checkInAndOut.checkOut }}</p>
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
                    <span class="roomData_precaution_box_icon" :is="icon.tag" :data-iconBoolean="allSvgBoolean[key]" :class="[allSvgBoolean[key] ? 'roomData_precaution_box_icon--style' : '']"></span>
                    <span class="roomData_precaution_box_yes" v-if="allSvgBoolean[key]" :is="yesOrNo[0].tag"></span>
                    <span class="roomData_precaution_box_yes roomData_precaution_box_yes--style " v-else :is="yesOrNo[1].tag"></span>
                </div>
            </section>
            <section class="rooomData_monthly">
                <p class="rooomData_monthly_title">空房狀態查詢</p>
                <div>
                    <DatePicker class="datepicker" @change="getAllDay" value-type="timestamp" v-model="value" :default-value="new Date()" :disabled-date="disabledDates" :inline="true" range></DatePicker>
                </div>
            </section>
        </article>

        <!-- Order -->
        <article>
            <div class="col-5">
                <form>
                    <label>姓名<input type="text"></label>
                    <label>手機號碼<input type="text"></label>
                    <label>入住日期<input type="text"></label>
                    <label>退房日期<input type="text"></label>
                    <span>2天 1晚平日</span>
                    <div>
                        <span>總計</span>
                        <span>1380</span>
                    </div>
                    <button>確定送出</button>
                    <p>此預約系統僅預約功能，並不會對您進行收費</p>
                </form>
            </div>
            <div class="col-7"></div>
        </article>
    </div>
</template>
<style lang="scss" scoped>
    .displayNone {
        display: none;
    }
</style>
<script>
// import $ from "jquery";
import Room1 from "../assets/image/room1.png";
import Room2 from "../assets/image/seeroom2.png";
import Room3 from "../assets/image/seeroom3.png";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import arrow from '../assets/icon/arrow.svg';
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
        arrow
    },
    data() {
        return {
            roomId: "",
            allRoom: [Room1, Room2, Room3],
            show: 0,
            isActive: 0,
            roomData: {
                descriptionShort: {
                    GuestMin: 0
                }
            },
            roomAmenities: {},
            allSvg: [
                {
                    tag: icon1,
                },
                {
                    tag: icon2,
                },
                {
                    tag: icon3,
                },
                {
                    tag: icon4,
                },
                {
                    tag: icon5,
                },
                {
                    tag: icon6,
                },
                {
                    tag: icon7,
                },
                {
                    tag: icon8,
                },
                {
                    tag: icon9,
                },
                {
                    tag: icon10,
                },
                {
                    tag: icon11,
                },
                {
                    tag: icon12,
                }
            ],
            allSvgBoolean: [],
            yesOrNo: [
                { 
                    tag: icon98
                }, 
                {
                    tag: icon99
                }
            ],
            value: [],
            allDay: [],
            allWeek: [],
            normalDay: [],
            holiDay: [],
            openBGBig: false,
            openOrder: false
        };
    },
    methods: {
        getRoomData() {
            const vm = this;
            const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomId}`;
            vm.$http.get(api).then((response) => {
                vm.roomData = response.data.room[0];
                vm.roomAmenities = vm.roomData.amenities;
                for (let item in vm.roomAmenities) {
                    vm.allSvgBoolean.push(vm.roomAmenities[item])
                }
                // console.log(vm.allSvgBoolean)
            });
        },
        bookingBtn() {
            const vm = this;
            vm.openOrder = !vm.openOrder;
        },
        changeBG(key) {
            const vm = this;
            vm.show = key;
            vm.isAnimation = !vm.isAnimation;
        },
        disabledDates(date) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            return date < today || date > new Date(today.getTime() + 365 * 24 * 3600 * 1000);
        },
        getAllDay() {
            let i = 0;
            const vm = this;
            let startTime = vm.value[0];
            let endTime = vm.value[1];
            while((endTime - startTime) >= 0){
                // 將起始日期設為 startTime 的時間，每疊代一次重新設置時間點
                let date = new Date(startTime);
                let year = date.getFullYear();
                let month = (date.getMonth() + 1).toString().length === 1 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
                let day = date.getDate().toString().length === 1 ? "0" + date.getDate().toString() : date.getDate().toString();
                let week = date.getDay().toString();
                vm.allDay[i] = `${ year }-${ month }-${ day }`;
                vm.allWeek[i] = week
                startTime += 86400000;
                i += 1;
            }
            console.log("week", vm.allWeek);
            vm.normalDay = vm.allWeek.filter(item => {
                return item.match(/[1-5]/)
            })
            vm.holiDay = vm.allWeek.filter(item => {
                return item.match(/[0|6]/)
            }) 
        },
        openBigBG() {
            const vm = this;
            vm.openBGBig = !vm.openBGBig;
            console.log(vm.openBGBig)
        }
    },
    created() {
        this.roomId = this.$route.params.roomId;
        this.getRoomData();
    },
};
</script>
