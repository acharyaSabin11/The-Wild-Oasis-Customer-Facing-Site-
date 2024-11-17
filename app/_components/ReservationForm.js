'use client';

import Image from "next/image";
import { useReservation } from "../_contexts/ReservationContext";
import FormRowVertical from "./FormRowVertical"
import { createReservationAction } from "../_lib/actions";
import { getSubDays } from "../_lib/helpers";
import { useFormStatus } from 'react-dom';

function ReservationForm({ cabin, userName, userImage }) {
    const { setCabinId, range } = useReservation();
    const { maxCapacity, id } = cabin;
    return (
        <div className="flex-1 flex flex-col rounded-sm bg-primary-900 min-w-[30rem] h-full">
            <div className="flex py-2 px-8 justify-between items-center bg-primary-800">
                <h5 className="rounded-tl-sm rounded-tr-sm">Logged in as</h5>
                <div className="flex gap-4">
                    <div className="size-6 relative">
                        <Image src={userImage} className="rounded-full" fill alt="user-image" />
                    </div>
                    <span>{userName}</span>
                </div>
            </div>
            <form action={(formData) => {
                if (!range) return;
                createReservationAction({ numNights: getSubDays(range.from, range.to), cabinId: id, startDate: range.from, endDate: range.to }, formData)
            }} className="w-full py-8 px-8 flex flex-col gap-6 justify-between  flex-1">
                <div className="flex flex-col gap-6">
                    <FormRowVertical>
                        <label htmlFor="guestsCount">How many guests?</label>
                        <select name="numGuests" id="numGuests" className="w-full h-10 bg-primary-300 text-primary-900 px-4 outline-none border-solid border-accent-500 focus:border-2" >
                            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                    </FormRowVertical>
                    <FormRowVertical>
                        <label htmlFor="observations">Anything we should know about your stay?</label>
                        <textarea name="observations" id="observations" placeholder="Any pets, allergies, special requirements?" className="hide-scrollbar w-full h-20 bg-primary-300 text-primary-900 px-4 outline-none border-solid border-accent-500 focus:border-2 placeholder:text-primary-500 py-2"></textarea>
                    </FormRowVertical>
                </div>
                <div className="self-end flex gap-4 items-center">
                    <span className="text-primary-600 text-sm">Start by selecting dates</span>
                    <ReserveButton range={range} />
                </div>
            </form>
        </div>
    )
}

function ReserveButton({ range }) {
    const { pending } = useFormStatus();
    return <button disabled={!range || pending} className="bg-accent-600 text-primary-900 hover:bg-accent-700 px-6 py-4 transition-colors disabled:cursor-not-allowed disabled:bg-primary-500">Reserve Now</button>

}

export default ReservationForm
