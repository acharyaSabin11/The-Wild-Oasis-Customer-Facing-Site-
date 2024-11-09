import '@/app/_styles/globalStyles.css';
import Header from './_components/Header';
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: {
        template: '%s | The Wild Oasis',
        default: 'Welcome | The Wild Oasis'
    },
    description: 'A secluded retreat nestled in the heart of the woods, offering a perfect escape into nature with cozy cabins and scenic forest views. A haven for tranquility, it combines rustic charm with modern comforts.'
}

function Layout({ children }) {
    return (
        <html lang="en">
            <body className={`${josefinSans.className} bg-primary-950 text-gray-50 min-h-screen flex flex-col w-full `}>
                <Header />
                <div className=' flex-1 px-8 py-12 w-full grid'>
                    <main className=' mx-auto max-w-[120rem] '>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

export default Layout;