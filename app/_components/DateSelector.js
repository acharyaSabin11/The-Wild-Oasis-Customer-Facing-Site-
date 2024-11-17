'use client';

import { DayPicker } from "react-day-picker";
import { useEffect, useState } from "react";
import "react-day-picker/style.css";
import { useReservation } from "../_contexts/ReservationContext";
import { addDays, addMonths, areIntervalsOverlapping, subDays } from "date-fns";
import toast from "react-hot-toast";


function DateSelector({ currentBookings, cabinId }) {
    //HOOKS:
    const { range, setRange, setCabinId } = useReservation();
    const [month, setMonth] = useState(new Date());

    //DERIVED STATES:
    const nextMonth = addMonths(month, 1);
    const disabledDates = currentBookings.map(booking => ({ before: addDays(booking.endDate, 1), after: subDays(booking.startDate, 1) }));

    //USE EFFECTS
    useEffect(function () {
        setCabinId(cabinId)
    }, [setCabinId, cabinId]);

    //SETTER FUNCTION:
    function setRangeWithNonOverlap(range) {
        // STEPS:
        // 1. If there is no range, set the range to null and finish;
        if (!range) {
            setRange(range);
            return;
        }

        // 2.a. Creating the date in the form of UTC normalized so as to match the form it takes in the server action.
        const UTCNormalizedRange = { from: new Date(Date.UTC(range.from.getFullYear(), range.from.getMonth(), range.from.getDate())), to: new Date(Date.UTC(range.to.getFullYear(), range.to.getMonth(), range.to.getDate())) }

        //2.b. Creating the selected range so as to compare it with the active bookings date.
        const selectedRange = { start: UTCNormalizedRange.from, end: UTCNormalizedRange.to };

        //3. When the disabled dates and the selected date range are intersecting, then cancel the selection
        let isInvalid = false;
        disabledDates.forEach(disabled => {
            if (areIntervalsOverlapping({ start: addDays(disabled.after, 1), end: subDays(disabled.before, 1) }, selectedRange)) {
                setRange(null);
                isInvalid = true;
                toast.error('A booking already exists in that date');
                return;
            }
        });

        //4. If non overlapped, set the selected range as a valid range.
        if (!isInvalid) {
            setRange(UTCNormalizedRange);
        }
    }

    //Render Logic
    return (
        <div className="flex gap-8 justify-center my-8 px-4">
            <DayPicker
                timeZone="UTC"
                disabled={[{ before: addDays(new Date(), 1) }, ...disabledDates]}
                mode="range"
                selected={range}
                onSelect={setRangeWithNonOverlap}
                month={month}
                onMonthChange={setMonth}
            />
            <DayPicker
                timeZone="UTC"
                disabled={[{ before: addDays(new Date(), 1) }, ...disabledDates]}
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
