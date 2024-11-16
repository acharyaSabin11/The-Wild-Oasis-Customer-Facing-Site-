'use client';
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
    {
        destination: '/cabins',
        label: 'Cabins',
    },
    {
        destination: '/about',
        label: 'About',
    },
];

function Navigation({ session }) {
    console.log(session);
    const pathName = usePathname();
    const activeStyle = 'text-accent-500';
    return (
        <nav >
            <ul className="flex gap-12 text-lg">
                {links.map(link => <Link className={`hover:text-yellow-400 transition-colors ${pathName === link.destination && activeStyle}`} key={link.destination} href={link.destination}>{link.label}</Link>)}
                <Link className={`hover:text-yellow-400 transition-colors flex gap-4 ${pathName === '/account' && activeStyle}`} key={'/account'} href='/account'>
                    {session?.user?.image && <div className="size-6 relative">
                        <Image src={session.user.image} className="rounded-full" alt="user-image" fill />
                    </div>}
                    Guest Area
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
