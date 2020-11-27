<template>
    <div>
        <DatePicker class="datepicker" v-model="date" :formatter="momentFormat" format="YYYY-MM-dd" :inline="true" range></DatePicker>
        <p>{{ date }}</p>
    </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    components: {
        DatePicker
    },
    data() {
        return {
            date: "",
            momentFormat: {
                stringify: {
                    stringify: (date) => {
                        return date ? moment(date.format('LL')) : ''
                    }
                }
            }
            // disabledDates: {
            //     to: new Date(2020, 10, 20)
            // }
            // timePickerOptions: {

            // }
        }
    },
    methods: {
        // today() {
        //     const vm = this;
        //     let date = new Date()
        //     let day = date.getDate();
        //     let month = date.getMonth() + 1;
        //     let year = date.getFullYear();
        //     console.log(year, month, day)
        //     vm.disabledDates.to = new Date(`${year}, ${month}, ${day}`)
        // }
    },
    // created() {
    //     this.today();
    // }
}
</script>