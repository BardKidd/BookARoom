<template>
    <div
        class="fullScreen homepageConfiguration"
        :style="{ backgroundImage: `url(${BG1})` }"
    >
        <div class="container">
            <article class="homepageConfiguration_head col-3">
                <div class="homepageConfiguration_head_logo">
                    <img src="../assets/image/logo.png" alt="" />
                </div>
                <div class="homepageConfiguration_head_title">
                    <span>好室旅店。HOUSE HOTEL</span>
                    <span>花蓮縣花蓮市國聯一路1號</span>
                    <span>03-8321155</span>
                    <span>HOUSE@HOTEL.COM</span>
                </div>
            </article>
            <section class="homepageConfiguration_context col-9">
                <div>6個房間縮圖</div>
            </section>
            <div>輪播 icon</div>
        </div>
    </div>
</template>
<script>
import BG1 from "../assets/image/BG1.png";
export default {
    data() {
        return {
            BG1,
        };
    },
};
</script>
