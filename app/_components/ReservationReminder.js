'use client';

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useReservation } from "../_contexts/ReservationContext";
import Link from "next/link";

function ReservationReminder() {
    const { range, resetRange, cabinId } = useReservation();
    if (!range) return null;
    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-8 py-4 bg-accent-600 max-w-[35rem] rounded-xl flex gap-8">
            👋Hey! Don&apos; forget to reserve your date from 📆{range.from.toString()} to 📆{range.to.toString()}
            <div className="flex flex-col items-end justify-between">
                <button onClick={resetRange}><XMarkIcon className="size-4 text-primary-800 hover:text-primary-50 hover:size-6" /></button>
                <Link href={`/cabins/${cabinId}`} className="border-2 border-primary-800 px-4 py-2 text-sm font-bold rounded-full text-primary-800 w-32">Reserve Now</Link>
            </div>
        </div>)

}

export default ReservationReminder
