import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline"
import { signOutAction } from "../_lib/actions"

function SignOutButton() {
    return (
        <form action={signOutAction}>
            <button className="flex gap-4  items-center px-8 py-3 hover:bg-primary-900 hover:text-gray-50  text-primary-500 rounded-sm" ><ArrowLeftStartOnRectangleIcon className="size-5 text-bold" /> <span>Sign out</span></button>
        </form>
    )
}

export default SignOutButton
