'use client'

import Link from "next/link"

function Error({ error }) {
    return (
        <div className="flex flex-col gap-4 h-full items-center justify-center">
            <h1 className="text-3xl">Something went wrong</h1>
            <p className="text-lg text-red-300">{error.message}</p>
            <Link className="bg-accent-500 px-4 py-2 rounded-md text-primary-800" href='/'>Go to Home</Link>
        </div>
    )
}

export default Error
