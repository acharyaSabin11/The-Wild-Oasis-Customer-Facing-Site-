import supabase from "./supabase";

export async function getSettings() {
    const { data, error } = await supabase.from('settings').select('*').single();

    if (error) {
        console.log(error);
        throw new Error("Couldn't load settings");
    }

    return data;
}