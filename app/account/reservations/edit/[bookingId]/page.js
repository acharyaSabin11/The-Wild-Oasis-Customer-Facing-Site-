import FormRowVertical from "@/app/_components/FormRowVertical";
import UpdateReservationButton from "@/app/_components/UpdateReservationButton";
import { updateReservationAction } from "@/app/_lib/actions";
import { getBookingByBookingIdWithOtherTables } from "@/app/_lib/api_bookings";

async function page({ params }) {
    const { bookingId } = await params;
    const booking = await getBookingByBookingIdWithOtherTables(bookingId);
    console.log(booking);
    const { numGuests, observations, cabins } = booking;
    const { maxCapacity } = cabins;
    console.log(observations);

    const updateReservation = updateReservationAction.bind(null, bookingId);
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl text-accent-500 mb-8">
                Edit Reservation #{bookingId}
            </h1>
            <form action={updateReservation} className="w-full py-4 px-8 flex flex-col gap-6">
                <FormRowVertical>
                    <label htmlFor="numGuests">How many guests?</label>
                    <select name="numGuests" id="numGuests" className="w-full h-10 bg-primary-300 text-primary-900 px-4 outline-none border-solid border-accent-500 focus:border-2" defaultValue={numGuests} key={numGuests}>
                        {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(val => <option value={val}>{val}</option>)}
                    </select>
                </FormRowVertical>
                <FormRowVertical>
                    <label htmlFor="observations">Anything we should know about your stay?</label>
                    <textarea placeholder="Any pets, allergies, special requirements?" name="observations" id="observations" key={observations} defaultValue={observations} className="hide-scrollbar w-full h-20 bg-primary-300 text-primary-900 px-4 outline-none border-solid border-accent-500 focus:border-2 placeholder:text-primary-500 py-2"></textarea>
                </FormRowVertical>
                <UpdateReservationButton />
            </form>
        </div>
    )
}



export default page
