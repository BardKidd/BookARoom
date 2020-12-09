<template>
    <div class="orderGrid orderGrid--style">
        <div class="orderCheckBox orderCheckBox--success">
            <span class="orderCheckBox_cancel" @click="closeCheck">
                <cancel></cancel>
            </span>
            <div class="orderCheckBox_content">
                <div class="orderCheckBox_content_icon">
                    <success></success>
                    <right class="checkIconPosition"></right>
                </div>
                <h3  class="orderCheckBox_content_title">預約成功</h3>
                <div class="orderCheckBox_content_text">
                    <p>請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，</p>
                    <p>若未收到簡訊請來電確認，謝謝您</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import cancel from '../assets/icon/orderCheckCancel.svg';
import success from '../assets/icon/orderCheckSuccess.svg';
import right from '../assets/icon/orderCheckRight.svg';
export default {
    components: {
        cancel,
        success,
        right
    },
    methods: {
        closeCheck() {
            this.$store.dispatch('closecheck', false);
        }
    }
}
</script>
