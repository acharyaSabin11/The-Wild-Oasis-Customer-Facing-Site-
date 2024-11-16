import { formatDistance, parseISO } from "date-fns";

export function getSubDays(date1, date2) {
    return Math.ceil(Math.abs(new Date(date1) - new Date(date2)) / 86400000)
}

export const formatDistanceFromNow = (dateStr) =>
    formatDistance(parseISO(dateStr), new Date(), {
        addSuffix: true,
    })
        .replace('about ', '')
        .replace('in', 'In');

export function formatDateFull(date) {
    return new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).format(parseISO(date));
}

export function formatDateFullWithTime(date) {
    return new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }).format(parseISO(date));
}

export function formatDateWithDistance(date) {
    const fullDate = new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).format(parseISO(date));
    const distanceFromNow = formatDistanceFromNow(date);
    return `${fullDate} (${distanceFromNow})`;
}