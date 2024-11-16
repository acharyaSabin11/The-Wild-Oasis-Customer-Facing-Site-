import Image from "next/image";
import getAllCountries from "../_lib/api_countries"
import FormRowVertical from "./FormRowVertical";

async function SelectCountry({ nationality, countryFlag }) {
    const countries = await getAllCountries().then(data => data.sort((a, b) => a.name.localeCompare(b.name)));
    return (
        <FormRowVertical>
            <div className="flex justify-between">
                <label className="text-lg" htmlFor="nationality">Where are you from?</label>
                <div className="relative size-6">
                    {countryFlag && <Image src={countryFlag} alt={nationality} fill />}
                </div>
            </div>
            <select id="nationality" name="nationality" className="w-full h-12 bg-primary-800 px-6 outline-none border-solid border-accent-500 focus:border-2 hide-scrollbar" defaultValue={nationality ? `${nationality}%%${countryFlag}` : 'default'} key={nationality}>
                <option disabled value='default'>-- Select a Country --</option>
                {countries.map(country => <option key={country.name} value={`${country.name}%%${country.flag}`}>{country.name}</option>)}
            </select>
        </FormRowVertical>
    )
}

export default SelectCountry
