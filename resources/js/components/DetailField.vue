<template>
    <panel-item :field="field">
        <template slot="value">
            <week-table :value="openingHours" :editable="false"/>
            <br/>
            <exceptions-table :value="exceptions" :editable="false"/>
        </template>
    </panel-item>
</template>

<script>
import WeekTable from "./WeekTable"
import ExceptionsTable from "./ExceptionsTable"
import {getOpeningHoursData} from "../func"

export default {
    components: {WeekTable, ExceptionsTable},

    props: ['resource', 'resourceName', 'resourceId', 'field'],

    data: function () {
        return {
            ...getOpeningHoursData(this.field.value)
        }
    },
}
</script>
