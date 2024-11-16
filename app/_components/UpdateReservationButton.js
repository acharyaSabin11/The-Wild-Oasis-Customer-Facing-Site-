'use client';
import { useFormStatus } from 'react-dom';

function UpdateReservationButton() {
    const { pending } = useFormStatus();
    return <button disabled={pending} className="px-4 py-2 bg-accent-500 text-primary-800 hover:bg-accent-600 self-end rounded-sm font-semibold disabled:bg-primary-600 "> {pending ? 'Updating...' : 'Update Reservation'}</button>
}

export default UpdateReservationButton;
