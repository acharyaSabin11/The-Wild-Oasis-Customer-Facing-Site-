'use client';
import { deleteReservationAction } from "../_lib/actions";
import ReservationItem from "./ReservationItem";
import { useOptimistic } from 'react';

function ReservationsList({ bookings }) {
    const [optimisticBookings, deleteOptimistic] = useOptimistic(bookings, (curBookings, bookingId) => curBookings.filter(booking => booking.id !== bookingId));
    async function handleDelete(bookingId) {
        deleteOptimistic(bookingId);
        await deleteReservationAction(bookingId);

    }
    return (
        <div className="flex flex-col gap-4 w-full">
            {optimisticBookings.map(booking => <ReservationItem booking={booking} key={booking.id} handleDelete={handleDelete} />)}
        </div>
    )
}

export default ReservationsList
