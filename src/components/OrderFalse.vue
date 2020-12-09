<template>
    <div class="orderGrid orderGrid--style">
        <div class="orderCheckBox orderCheckBox--success">
            <span class="orderCheckBox_cancel" @click="closeCheck">
                <cancel></cancel>
            </span>
            <div class="orderCheckBox_content">
                <div class="orderCheckBox_content_icon">
                    <success></success>
                    <cancel class="checkIconPosition orderFalse"></cancel>
                </div>
                <h3  class="orderCheckBox_content_title">預約失敗</h3>
                <div class="orderCheckBox_content_text">
                    <p>哎呀！晚了一步！您預約的日期已經被預約走了，</p>
                    <p>再看看其它房型吧</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import cancel from '../assets/icon/orderCheckCancel.svg';
import success from '../assets/icon/orderCheckSuccess.svg';

export default {
    components: {
        cancel,
        success
    },
    methods: {
        closeCheck() {
            this.$store.dispatch('closecheck', false);
        }
    }
}
</script>
