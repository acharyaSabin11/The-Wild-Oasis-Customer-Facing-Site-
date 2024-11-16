import CabinsList from "../_components/CabinsList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const metadata = { title: 'Cabins' }

async function page({ searchParams }) {
    const { capacity: filter = 'all' } = await searchParams;
    return (
        <div className="h-full flex flex-col">
            <h1 className="text-accent-500 text-3xl mb-4">Our Luxury Cabins</h1>
            <p className="text-xl text-justify mb-10">The cabins at The Wild Oasis are a harmonious blend of luxury and nature, offering an unparalleled escape in the heart of the woods. Each cabin is designed to maximize comfort and elegance, with plush furnishings, expansive windows, and private terraces that bring you face-to-face with breathtaking forest views. Thoughtfully crafted interiors exude warmth and sophistication, providing a cozy retreat where you can unwind and reconnect with nature. From the serene sounds of the forest to the gentle breeze through the trees, every detail enhances the peaceful ambiance, creating a truly indulgent sanctuary that feels both luxurious and naturally inviting.</p>
            <div className="self-end">
                <Filter filterField='capacity' options={[
                    { label: 'All Cabins', value: 'all' },
                    { label: '1-3 Guests', value: 'small' },
                    { label: '4-7 Guests', value: 'medium' },
                    { label: '8-12 Guests', value: 'large' },
                ]} />
            </div>
            <Suspense fallback={<Spinner />} key={filter}>
                <CabinsList filter={filter} />
            </Suspense>
            <ReservationReminder />
        </div>
    )
}



export default page
