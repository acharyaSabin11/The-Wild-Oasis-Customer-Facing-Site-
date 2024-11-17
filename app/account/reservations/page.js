import ReservationsList from "@/app/_components/ReservationsList";
import { getAllBookingsByGuestId } from "@/app/_lib/api_bookings";
import { auth } from "@/app/_lib/auth";
import Link from "next/link";

async function page() {
    const { user: { guest: { id: guestId } } } = await auth();
    const bookings = await getAllBookingsByGuestId(guestId);
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl text-accent-400 mb-6">Your Reservations</h1>
            {bookings.length === 0 && <p>
                You hanve no current reservations.
                <Link href='/cabins' className="text-accent-500 ml-2">Explore our luxury cabins &rarr;</Link></p>}
            {!!bookings.length && <ReservationsList bookings={bookings} />}
        </div>
    )
}

export default page
