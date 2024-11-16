'use client';

const { createContext, useContext, useState } = require("react");

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
    const [range, setRange] = useState();
    const [cabinId, setCabinId] = useState();

    function resetRange() {
        setRange(undefined);
    }
    return <ReservationContext.Provider value={{ range, resetRange, setRange, cabinId, setCabinId }}>
        {children}
    </ReservationContext.Provider>
}

export function useReservation() {
    const context = useContext(ReservationContext);

    if (!context) {
        throw new Error('Reservation Context used outside the Reservation Context Provider');
    }

    return context;
}