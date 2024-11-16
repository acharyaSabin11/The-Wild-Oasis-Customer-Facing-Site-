'use client';

import Link from "next/link"
import { ArrowLeftStartOnRectangleIcon, CalendarDaysIcon, HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";

const links = [
    {
        destination: '/account',
        label: 'Home',
        icon: <HomeIcon className="size-5 text-bold" />,
    },
    {
        destination: '/account/reservations',
        label: 'Reservations',
        icon: <CalendarDaysIcon className="size-5 text-bold" />,
    },
    {
        destination: '/account/profile',
        label: 'Profile',
        icon: <UserIcon className="size-5 text-bold" />,
    }
];

function SideNavigation() {
    const pathName = usePathname();
    const activeStyle = 'bg-primary-900 text-gray-50';
    const baseStyle = 'text-primary-500';
    return (
        <div className="flex flex-col gap-2 justify-between border-r-[1px]  border-solid border-primary-900">
            <div className="flex flex-col gap-4">
                {links.map(link => <Link key={link.destination} className={`flex gap-4  items-center px-8 py-3 hover:bg-primary-900 hover:text-gray-50 rounded-sm ${pathName === link.destination ? activeStyle : baseStyle}`} href={link.destination} >{link.icon} <span>{link.label}</span></Link>)}
            </div>

            <SignOutButton />
        </div>
    )
}

export default SideNavigation;