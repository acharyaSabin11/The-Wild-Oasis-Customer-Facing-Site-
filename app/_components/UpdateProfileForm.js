'use client';

import FormRowVertical from "./FormRowVertical"
import SelectCountry from "./SelectCountry"

function UpdateProfileForm({ children }) {
    return (
        <form className="bg-primary-900  px-10 pt-8 pb-12 gap-8 flex flex-col">
            <FormRowVertical>
                <label className="text-lg" htmlFor="fullName">Full Name</label>
                <input type="text" className="w-full h-12 bg-primary-800 px-6 outline-none border-solid border-accent-500 focus:border-2" />
            </FormRowVertical>
            <FormRowVertical>
                <label className="text-lg" htmlFor="email">Email Address</label>
                <input type="email" className="w-full h-12 bg-primary-800 px-6 outline-none border-solid border-accent-500 focus:border-2" />
            </FormRowVertical>
            {children}
            <FormRowVertical>
                <label className="text-lg" htmlFor="nationalID">National ID Number</label>
                <input type="number" className="w-full h-12 bg-primary-800 px-6 outline-none border-solid border-accent-500 focus:border-2" />
            </FormRowVertical>
        </form>
    )
}

export default UpdateProfileForm
