import Link from "next/link";

function page() {
    const cabins = [];
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl text-accent-400 mb-6">Your Reservations</h1>
            {cabins.length === 0 && <p>
                You hanve no current reservations.
                <Link href='/cabins' className="text-accent-500 ml-2">Explore our luxury cabins &rarr;</Link></p>}
        </div>
    )
}

export default page
