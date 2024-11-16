export function getSubDays(date1, date2) {
    return Math.ceil(Math.abs(new Date(date1) - new Date(date2)) / 86400000)
}