'use server';

import { revalidatePath } from "next/cache";
import { updateGuest } from "./api_guests";
import { auth, signIn, signOut } from "./auth";
import { deleteBooking, getBookingByBookingId, updateBooking } from "./api_bookings";
import { redirect } from "next/navigation";
// import toast from "react-hot-toast";

export async function signInWithGoogle() {
    await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
    await signOut({ redirectTo: '/' });
}

export async function updateProfile(formData) {
    const session = await auth();
    if (!session) throw new Error('Your must first login to update profile');

    const { user: { guest: { id } } } = session;
    if (id !== Number(formData.get('guestId'))) {
        throw new Error("You cannot modify other's data");
    }

    if (formData.get('fullName').trim().split(" ").length <= 1) {
        throw new Error('You must enter the full name');
    }

    if (formData.get('nationalID') && !/^[a-zA-Z0-9]{6,12}$/.test(formData.get('nationalID'))) {
        throw new Error('Enter a valid National ID');
    }

    const unprocessedNationality = formData.get('nationality');
    const [nationality, flag] = unprocessedNationality.split('%%');
    await updateGuest({
        guestId: formData.get('guestId'),
        updateData: {
            fullName: formData.get('fullName'),
            nationality,
            nationalID: formData.get('nationalID'),
            countryFlag: flag,
        }
    })
    revalidatePath('/account/profile');
}

export async function deleteReservationAction(bookingId) {
    const session = await auth();
    if (!session) throw new Error('Your must first login to delete reservation');

    const { user: { guest: { id } } } = session;

    const booking = await getBookingByBookingId(bookingId);

    if (booking.guestId !== id) {
        throw new Error('You are not authorized to delete bookings of others');
    }


    await deleteBooking(bookingId);

    revalidatePath('/account/reservations');
}

export async function updateReservationAction(bookingId, formData) {
    const session = await auth();
    if (!session) throw new Error('Your must first login to update reservation');

    const { user: { guest: { id } } } = session;

    const booking = await getBookingByBookingId(bookingId);

    if (booking.guestId !== id) {
        throw new Error('You are not authorized to update bookings of others');
    }

    const updateValue = {
        numGuests: Number(formData.get('numGuests')),
        observations: formData.get('observations'),
    }
    await updateBooking(bookingId, updateValue);

    // toast.success(`Reservation #${bookingId} updated successfully`);
    // toast.success('Updation Success');

    revalidatePath(`/account/reservations/edit/${bookingId}`);
    revalidatePath(`/account/reservations`);

    redirect('/account/reservations');
}