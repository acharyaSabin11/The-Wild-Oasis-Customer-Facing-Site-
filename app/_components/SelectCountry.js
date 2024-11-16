import getAllCountries from "../_lib/api_countries"
import FormRowVertical from "./FormRowVertical";

async function SelectCountry() {
    const countries = await getAllCountries().then(data => data.sort((a, b) => a.name.localeCompare(b.name)));
    console.log(countries);
    const defCountryName = 'Nepal';
    const defCountryFlag = '🇳🇵';
    return (
        <FormRowVertical>
            <div className="flex justify-between">
                <label className="text-lg" htmlFor="country">Where are you from?</label>
                <span className="text-2xl">{defCountryFlag}</span>
            </div>
            <select className="w-full h-12 bg-primary-800 px-6 outline-none border-solid border-accent-500 focus:border-2 hide-scrollbar" defaultValue={defCountryName}>
                {countries.map(country => <option key={country.name} value={country.name}>{country.name}</option>)}
            </select>
        </FormRowVertical>
    )
}

export default SelectCountry
