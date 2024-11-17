import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { formatDateFull, formatDateFullWithTime, formatDateWithDistance } from "../_lib/helpers";

function ReservationItem({ booking, handleDelete }) {
    const { numNights, numGuests, cabins, startDate, endDate, created_at, status, totalPrice } = booking;
    const { name: cabinName } = cabins;
    return (
        <div className="flex border-2 border-primary-900 divide-x-2 divide-primary-900">
            <div className="relative grid min-w-40">
                <Image src={booking.cabins.image} className="object-cover" fill alt="cabin-image" />
            </div>
            <div className="flex-1 flex flex-col px-4 py-4">
                <div className="flex justify-between items-center">
                    <h5 className="text-2xl">{numNights} nights in Cabin {cabinName}</h5>
                    <span className={`uppercase flex items-center font-bold text-[10px] px-3 py-2 ${status === 'checked-out' && 'bg-accent-600'} ${status === 'checked-in' && 'bg-green-600'} ${status === 'unconfirmed' && 'bg-blue-600'} rounded-sm`}>{status === 'checked-out' ? 'Past' : status}</span>
                </div>
                <p className="text-primary-500 flex-1">{formatDateWithDistance(startDate)} - {formatDateFull(endDate)}</p>
                <div className="flex mt-6 gap-4 justify-between">
                    <div className="flex gap-4 flex-1 items-center">
                        <p>${totalPrice}</p>
                        <span>.</span>
                        <p>{numGuests} guests</p>
                    </div>
                    <p className="flex-1 text-right">Booked {formatDateFullWithTime(created_at)}</p>
                </div>
            </div>
            <div className="flex flex-col justify-center divide-y-2 divide-primary-900">
                <Link className="flex flex-1 gap-3 items-center px-4 rounded-sm py-2 hover:bg-accent-500 hover:text-primary-800 text-sm" href={`/account/reservations/edit/${booking.id}`}><PencilIcon className="size-4" /> Edit</Link>
                <DeleteButton bookingId={booking.id} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

function DeleteButton({ bookingId, handleDelete }) {
    return <form className="flex-1 px-4 py-2 hover:bg-accent-500 hover:text-primary-800" action={() => handleDelete(bookingId)}>
        <button className="flex h-full gap-3 items-center  rounded-sm   text-sm"><TrashIcon className="size-4" /> Delete</button>
    </form>
}

export default ReservationItem
