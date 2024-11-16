'use client';

import { DayPicker } from "react-day-picker";
import { useEffect, useState } from "react";
import "react-day-picker/style.css";
import { useReservation } from "../_contexts/ReservationContext";
import { subDays } from "date-fns";

function DateSelector({ currentBookings, cabinId }) {
    const { range, setRange, setCabinId } = useReservation();
    console.log(currentBookings, 'Date Selector');
    const disabledDates = currentBookings.map(booking => ({ before: booking.endDate, after: subDays(booking.startDate, 1) }));
    useEffect(function () {
        setCabinId(cabinId)
    }, [setCabinId, cabinId]);
    return (
        <div className="flex gap-8 justify-center my-8 px-4">
            <DayPicker
                disabled={[{ before: new Date() }, ...disabledDates]}
                mode="range"
                selected={range}
                onSelect={setRange}
            />
            <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
            />
        </div>
    )
}

export default DateSelector
