<template>
    <div :class="`text-${field.textAlign}`">
        <boolean-icon v-for="(intervals, dayName) in openingHours" :key="dayName" :value="intervals.length"/>
    </div>
</template>

<script>
import {getOpeningHoursWeekData} from "../func"

export default {

    props: ['resourceName', 'field'],

    data: function () {
        return {
            openingHours: getOpeningHoursWeekData(this.field.value),
        }
    },
}
</script>
