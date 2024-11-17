import supabase from "./supabase";

export async function getCurrentBookingsByCabinId(id) {
    const { data, error } = await supabase.from('bookings').select().eq('cabinId', id).gte('endDate', new Date().toISOString());

    if (error) {
        console.log(error);
        throw new Error(`Cabin ${id} doesn't exist`);
    }

    return data;
}

export async function getAllBookingsByGuestId(id) {
    const { data, error } = await supabase.from('bookings').select('*,cabins(*)').eq('guestId', id);

    if (error) {
        console.log(error);
        throw new Error(`Couldn't Load the bookings for guest id #${id}`);
    }

    return data;
}

export async function getBookingByBookingId(id) {
    const { data, error } = await supabase.from('bookings').select('*').eq('id', id).single();
    if (error) {
        console.log(error);
        throw new Error(`Couldn't get the bookings of id #${id}`);
    }

    return data;
}

export async function getBookingByBookingIdWithOtherTables(id) {
    const { data, error } = await supabase.from('bookings').select('*,cabins(*),guests(*)').eq('id', id).single();
    if (error) {
        console.log(error);
        throw new Error(`Couldn't get the bookings of id #${id}`);
    }

    return data;
}

export async function deleteBooking(id) {
    const { data, error } = await supabase.from('bookings').delete().eq('id', id);
    if (error) {
        console.log(error);
        throw new Error(`Couldn't delete the bookings of id #${id}`);
    }

    return data;
}

export async function updateBooking(id, updateData) {
    const { data, error } = await supabase.from('bookings').update(updateData).eq('id', id);

    if (error) {
        console.log(error);
        throw new Error(`Couldn't update the bookings of id #${id}`);
    }

    return data;
}

export async function createBooking(creationData) {
    const { data, error } = await supabase.from('bookings').insert(creationData).select();

    if (error) {
        console.log(error);
        throw new Error(`Couldn't creating the bookings`);
    }

    return data;
}