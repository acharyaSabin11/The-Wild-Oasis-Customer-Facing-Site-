'use client';

import { useReservation } from "../_contexts/ReservationContext"
import { getSubDays } from "../_lib/helpers";

function ReservationCost({ cabin }) {
    //HOOK
    const { resetRange, range } = useReservation();

    //Destructuring
    const { discount, regularPrice } = cabin;

    //Derived States
    const bookingDays = range ? getSubDays(range.from, range.to) : 0;
    const priceAfterDiscount = regularPrice - discount;

    //UI Logic
    return (
        <div className="py-4 px-8 bg-accent-500 text-primary-800 flex gap-8 items-center">
            <div className="flex items-end gap-2">
                <p className="text-lg font-bold">${discount ? priceAfterDiscount : regularPrice + '/Night'} </p>
                {discount ?
                    <p className="text-sm"><span className="line-through">${regularPrice}</span>/night</p>
                    : null}
            </div>
            {!!bookingDays && <>
                <p className="bg-accent-600 p-2">&times; <span className="text-lg">{bookingDays}</span></p>
                <p className="uppercase "><span className="text-sm font-bold">Total</span> <span className="text-lg font-bold">${priceAfterDiscount * bookingDays}</span></p>
                <button className="px-4 py-2 border-2 border-primary-800 rounded-lg ml-auto bg-accent-500 hover:bg-accent-600" onClick={resetRange}>Clear</button>
            </>
            }
        </div>
    )
}

export default ReservationCost
