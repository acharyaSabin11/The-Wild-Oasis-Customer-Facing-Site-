'use client';

import { updateProfile } from "../_lib/actions";
import FormRowVertical from "./FormRowVertical"
import { useFormStatus } from 'react-dom';

function UpdateProfileForm({ children, guest }) {
    return (
        <form action={updateProfile} className="bg-primary-900  px-10 pt-8 pb-12 gap-8 flex flex-col">
            <input type="hidden" name="guestId" value={guest.id} />
            <FormRowVertical>
                <label className="text-lg" htmlFor="fullName" >Full Name</label>
                <input id='fullName' name="fullName" type="text" defaultValue={guest.fullName} className="w-full h-12 bg-primary-800 px-6 outline-none border-solid border-accent-500 focus:border-2" />
            </FormRowVertical>
            <FormRowVertical>
                <label className="text-lg " htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" defaultValue={guest.email} disabled className="w-full h-12 disabled:bg-primary-600 disabled:text-primary-800 bg-primary-800 px-6 outline-none border-solid border-accent-500 focus:border-2 disabled:cursor-not-allowed" />
            </FormRowVertical>
            {children}
            <FormRowVertical>
                <label className="text-lg" htmlFor="nationalID">National ID Number</label>
                <input id="nationalID" name="nationalID" type="number" defaultValue={guest.nationalID} className="w-full h-12 bg-primary-800 px-6 outline-none border-solid border-accent-500 focus:border-2" />
            </FormRowVertical>
            <SubmitButton />
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return <button disabled={pending} className="px-4 py-2 bg-accent-500 text-primary-800 hover:bg-accent-600 self-end rounded-sm font-semibold disabled:bg-primary-600 "> {pending ? 'Updating...' : 'Update Profile'}</button>
}

export default UpdateProfileForm
