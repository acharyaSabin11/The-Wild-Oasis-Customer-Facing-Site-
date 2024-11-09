import Image from "next/image"
import Link from "next/link"

function Logo() {
    return (
        <Link href='/' className="flex items-center gap-4">
            <Image src='/logo.png' height={60} width={60} alt="the-wild-oasis-logo" />
            <span className="text-2xl font-bold">The Wild Oasis</span>
        </Link>
    )
}

export default Logo
