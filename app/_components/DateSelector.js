'use client';

import { DayPicker } from "react-day-picker";
import { useEffect, useState } from "react";
import "react-day-picker/style.css";
import { useReservation } from "../_contexts/ReservationContext";
import { addMonths, areIntervalsOverlapping, subDays } from "date-fns";
import toast from "react-hot-toast";


function DateSelector({ currentBookings, cabinId }) {
    const { range, setRange, setCabinId } = useReservation();
    const [month, setMonth] = useState(new Date());
    const nextMonth = addMonths(month, 1);
    const disabledDates = currentBookings.map(booking => ({ before: booking.endDate, after: subDays(booking.startDate, 1) }));
    useEffect(function () {
        setCabinId(cabinId)
    }, [setCabinId, cabinId]);

    function setRangeWithNonOverlap(range) {
        if (!range) {
            setRange(range);
            return;
        }
        const selectedRange = { start: range.from, end: range.to };
        let isInvalid = false;
        disabledDates.forEach(disabled => {
            if (areIntervalsOverlapping({ start: disabled.after, end: disabled.before }, selectedRange)) {
                setRange(null);
                isInvalid = true;
                toast.error('A booking already exists in that date');
                return;
            }
        });
        if (!isInvalid) {
            setRange(range);
        }
    }


    return (
        <div className="flex gap-8 justify-center my-8 px-4">
            <DayPicker
                disabled={[{ before: new Date() }, ...disabledDates]}
                mode="range"
                selected={range}
                onSelect={setRangeWithNonOverlap}
                month={month}
                onMonthChange={setMonth}
            />
            <DayPicker
                disabled={[{ before: new Date() }, ...disabledDates]}
                mode="range"
                selected={range}
                onSelect={setRangeWithNonOverlap}
                month={nextMonth}
                onMonthChange={(value) => setMonth(addMonths(value, -1))}
            />
        </div>
    )
}

export default DateSelector
