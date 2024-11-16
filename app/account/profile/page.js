import SelectCountry from "@/app/_components/SelectCountry"
import UpdateProfileForm from "@/app/_components/UpdateProfileForm"
import { auth } from "@/app/_lib/auth";

async function page() {
    const { user: { guest } } = await auth();
    return (
        <div className="flex flex-col h-full">
            <h1 className="text-accent-500 text-3xl mb-2">
                Update your guest profile
            </h1>
            <p className="mb-8">Providing the following information will make your check-in process faster and smoother. See you soon!</p>
            <UpdateProfileForm guest={guest}>
                <SelectCountry nationality={guest.nationality} countryFlag={guest.countryFlag} />
            </UpdateProfileForm>
        </div>
    )
}

export default page
