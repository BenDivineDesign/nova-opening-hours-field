import {EMPTY_WEEK, WEEK_DAYS} from "./const"

export function getOpeningHoursData(openingHoursData) {
    return {
        openingHours: getOpeningHoursWeekData(openingHoursData),
        exceptions: getOpeningHoursExceptionsData(openingHoursData),
    }
}

export function getOpeningHoursWeekData(openingHoursData) {
    return {
        ...EMPTY_WEEK,
        ..._.pick(openingHoursData, WEEK_DAYS),
    }
}

export function getOpeningHoursExceptionsData(openingHoursData) {
    return (openingHoursData && openingHoursData['exceptions']) || {}
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase()
}

export function getRandomDate() {
    let date = new Date()
    date.setDate(date.getDate() + Math.floor(Math.random() * 365))

    return date.toISOString().split('T')[0]
}

export function getRandomTimeInterval() {
    let date = new Date()

    let fromHour = Math.floor(Math.random() * 24)
    let toHour = fromHour + 1 + Math.floor(Math.random() * (24 - fromHour))

    if (fromHour.toString().length === 1) {
        fromHour = "0" + fromHour
    }

    if (toHour.toString().length === 1) {
        toHour = "0" + toHour
    }

    return fromHour + ':00-' + toHour + ':00'
}
