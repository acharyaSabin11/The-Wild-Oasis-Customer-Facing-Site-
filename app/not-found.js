import Link from "next/link"

function NotFound() {
    return (
        <div className="flex flex-col gap-4 h-full items-center justify-center">
            <h1 className="text-3xl">This Page Doesn&apos;t exist</h1>
            <Link className="bg-accent-500 px-4 py-2 rounded-md text-primary-800" href='/'>Go to Home</Link>
        </div>
    )
}

export default NotFound
