import Link from "next/link"

function page() {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl text-accent-400 mb-6">Reservation Successful</h1>
            <p>
                Thank you for reserving the cabin.
                <Link href='/account/reservations' className="text-accent-500 ml-2">Manage your reservations &rarr;</Link>
            </p>
        </div>
    )
}

export default page
