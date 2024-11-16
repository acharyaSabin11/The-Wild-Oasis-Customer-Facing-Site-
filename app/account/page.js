import { auth } from "../_lib/auth";

async function page() {
    const { user: { guest } } = await auth();
    return (
        <div className="text-accent-500 text-lg">
            Welcome, {guest.fullName}
        </div>
    )
}

export default page
