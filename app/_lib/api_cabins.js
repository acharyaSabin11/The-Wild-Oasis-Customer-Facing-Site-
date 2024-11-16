import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from('cabins').select('*');

    if (error) {
        console.log(error);
        throw new Error('Failed to get cabins data.');
    }

    return data;
}

export async function getCabinById(id) {
    const { data, error } = await supabase.from('cabins').select().eq('id', id).single();

    if (error) {
        console.log(error);
        throw new Error(`Cabin ${id} doesn't exist`);
    }

    return data;
}

