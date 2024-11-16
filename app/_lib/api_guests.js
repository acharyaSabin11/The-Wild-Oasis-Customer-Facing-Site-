import supabase from "./supabase";

export async function createGuest(colData) {
    const { data, error } = await supabase
        .from('guests')
        .insert([
            colData,
        ])
        .select();

    if (error) {
        console.log(error);
        throw new Error("Couldn't create the guest");
    }

    return data;
}

export async function getGuestByEmail(email) {
    let { data, error } = await supabase
        .from('guests')
        .select('*')
        .eq('email', email);

    if (error) {
        console.log(error);
        throw new Error("Couldn't get the guest");
    }

    if (!data.length) return null;

    return data[0];
}