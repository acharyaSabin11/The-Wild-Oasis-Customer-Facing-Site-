export default async function getAllCountries() {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
    if (!res.ok) {
        throw new Error("Couldn't get the countries data.");
    }
    const data = await res.json();

    return data.map(country => ({ name: country.name.common, flag: country.flags.svg }))
}