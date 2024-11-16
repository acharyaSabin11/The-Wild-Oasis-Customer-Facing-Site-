import supabase from "./supabase";

export async function getCurrentBookingsByCabinId(id) {
    const { data, error } = await supabase.from('bookings').select().eq('cabinId', id).gte('endDate', new Date().toISOString());

    if (error) {
        console.log(error);
        throw new Error(`Cabin ${id} doesn't exist`);
    }

    return data;
}