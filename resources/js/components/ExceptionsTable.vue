<template>
    <table class="openingHours exceptionsTable table w-full">
        <tr>
            <td>{{ __('Exceptions') }}</td>
            <td v-if="editable"></td>
            <td>
                <button v-if="editable" class="btn btn-default btn-primary" @click.prevent="addException">+</button>
            </td>
        </tr>
        <tr v-for="(intervals, exceptionName) in exceptions">
            <td>
                <div v-if="editable">
                    <input class="form-control form-input form-input-bordered"
                           v-model="exceptionName"
                           _change="$emit('update:exceptionName', exceptionName);"
                           @change="changeExceptionName(exceptionName, value);"
                           _pattern="^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])-(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$"
                           required
                    >
                </div>
                <div v-else>{{ exceptionName }}</div>
            </td>
            <td>
                <div v-if="exceptions[exceptionName].length">
                    <div v-for="(interval, intervalIndex) in intervals" class="interval">
                        <div v-if="editable">
                            <input class="form-control form-input form-input-bordered"
                                   v-model="exceptions[exceptionName][intervalIndex]"
                                   pattern="^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])-(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$"
                                   required
                            >
                            <button class="btn btn-default btn-danger"
                                    @click.prevent="removeInterval(exceptionName, intervalIndex)">-
                            </button>
                        </div>
                        <div v-else>{{ interval }}</div>
                    </div>
                </div>
                <div v-else>{{ __('Closed') }}</div>
            </td>
            <td v-if="editable">
                <button class="btn btn-default btn-primary" @click.prevent="addInterval(exceptionName)">+</button>
                <button class="btn btn-default btn-danger" @click.prevent="removeException(exceptionName)">-</button>
            </td>
        </tr>
    </table>
</template>

<script>
import {getRandomDate, getRandomTimeInterval} from "../func"

export default {
    props: ['value', 'editable'],

    data() {
        return {
            exceptions: this.value,
        }
    },

    methods: {
        addException() {
            this.$set(this.exceptions, getRandomDate(), [getRandomTimeInterval()])
        },

        removeException(key) {
            this.$delete(this.exceptions, key)
        },

        changeExceptionName(oldName, newName) {
            let _exception = this.exceptions[oldName]

            this.$delete(this.exceptions, oldName)
            this.$set(this.exceptions, newName, _exception)
        },

        addInterval(key) {
            let intervals = this.exceptions[key] || []
            intervals.push(getRandomTimeInterval())

            this.exceptions[key] = intervals
        },

        removeInterval(key, index) {
            this.exceptions[key].splice(index, 1)
        },

        // onChange(exceptions) {
        //     this.$emit('update-exceptions', exceptions)
        // }
    },
}
</script>
