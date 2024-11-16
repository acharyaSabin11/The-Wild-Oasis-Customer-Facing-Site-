import Link from "next/link"
import { getCurrentBookingsByCabinId } from "../_lib/api_bookings"
import { getSettings } from "../_lib/api_settings"
import { auth } from "../_lib/auth"
import DateSelector from "./DateSelector"
import ReservationCost from "./ReservationCost"
import ReservationForm from "./ReservationForm"

async function Reservation({ cabin }) {
    const [currentBookings, settings, session] = await Promise.all([getCurrentBookingsByCabinId(cabin.id), getSettings(), auth()]);
    const { minBookingLength, maxBookingLength } = settings;
    return (
        <div className="flex w-full flex-wrap mt-12 justify-center gap-8">
            <div className="flex flex-1 max-w-[50rem] flex-col justify-between border-[1px] border-primary-800">
                <DateSelector currentBookings={currentBookings} cabinId={cabin.id} maxBookingLength={maxBookingLength} minBookingLength={minBookingLength} />
                <ReservationCost cabin={cabin} />
            </div>
            <div className="max-w-[50rem] min-w-[30rem] flex-1 bg-primary-900">
                {session?.user?.name &&
                    <ReservationForm cabin={cabin} userName={session.user.name} userImage={session.user.image} />
                }
                {!session?.user?.name && <div className="flex justify-center items-center h-full px-10 py-6 gap-2">Please Sign In to Make a Reservation <Link className="text-accent-500" href='/api/auth/signin'>SignIn</Link></div>}
            </div>
        </div>
    )
}

export default Reservation
