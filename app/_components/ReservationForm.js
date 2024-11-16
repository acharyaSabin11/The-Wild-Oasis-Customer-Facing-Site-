'use client';

import Image from "next/image";
import { useReservation } from "../_contexts/ReservationContext";
import FormRowVertical from "./FormRowVertical"

function ReservationForm({ cabin, userName, userImage }) {
    const { setCabinId } = useReservation();
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
            <div className="w-full py-4 px-8 flex flex-col gap-6">
                <FormRowVertical>
                    <label htmlFor="guestsCount">How many guests?</label>
                    <select className="w-full h-10 bg-primary-300 text-primary-900 px-4 outline-none border-solid border-accent-500 focus:border-2">
                        <option value='1'>1</option>
                    </select>
                </FormRowVertical>
                <FormRowVertical>
                    <label htmlFor="guestsCount">Anything we should know about your stay?</label>
                    <textarea placeholder="Any pets, allergies, special requirements?" className="hide-scrollbar w-full h-20 bg-primary-300 text-primary-900 px-4 outline-none border-solid border-accent-500 focus:border-2 placeholder:text-primary-500 py-2"></textarea>
                </FormRowVertical>
                <div className="self-end flex gap-4 items-center">
                    <span className="text-primary-600 text-sm">Start by selecting dates</span>
                    <button className="bg-accent-600 text-primary-900 hover:bg-accent-700 px-6 py-4 transition-colors">Reserve Now</button>
                </div>
            </div>
        </div>
    )
}

export default ReservationForm
