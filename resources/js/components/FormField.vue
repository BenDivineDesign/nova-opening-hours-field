<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <week-table :value="openingHours" :editable="true"/>
            <br/>
            <exceptions-table :value="exceptions" :editable="true"/>
        </template>
    </default-field>
</template>

<script>
import {FormField, HandlesValidationErrors} from 'laravel-nova'
import WeekTable from "./WeekTable"
import ExceptionsTable from "./ExceptionsTable"
import {getOpeningHoursData} from "../func"

export default {
    components: {WeekTable, ExceptionsTable},

    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data: function () {
        return {
            ...getOpeningHoursData(this.field.value),
        }
    },

    methods: {
        fill(formData) {
            formData.set(
                this.field.attribute,
                JSON.stringify({
                    ...this.openingHours,
                    exceptions: this.exceptions,
                })
            )
        },
    },
}
</script>
