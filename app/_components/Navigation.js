import Link from "next/link"

const links = [
    {
        destination: '/',
        label: 'Home',
    },
    {
        destination: '/cabins',
        label: 'Cabins',
    },
    {
        destination: '/about',
        label: 'Guest Area'
    }
];

function Navigation() {
    return (
        <nav >
            <ul className="flex gap-12 text-lg">
                {links.map(link => <Link className="hover:text-yellow-400 transition-colors" key={link.destination} href={link.destination}>{link.label}</Link>)}
            </ul>
        </nav>
    )
}

export default Navigation
