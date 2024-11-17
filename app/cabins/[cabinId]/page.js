import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { getCabinById } from "@/app/_lib/api_cabins";
import { EyeSlashIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { cabinId } = await params;
    const { name, description } = await getCabinById(cabinId);
    return { title: `Cabin-${name}`, description: description }
}

// export async function generateStaticParams() {
//     return await getCabins().then(cabins => cabins.map(cabin => ({ cabinId: String(cabin.id) })));
// }

async function page({ params }) {
    const { cabinId } = await params;
    const cabin = await getCabinById(cabinId);

    return (
        <div className="flex flex-col h-full items-center">

            <div className="flex-1 flex gap-12 justify-between h-full items-center">
                <div className="h-full min-h-[12rem] max-h-[35rem] flex-1 relative">
                    <Image className="object-cover max-w-[25rem] mx-auto" src={cabin.image} fill alt={`cabin-${cabinId}-image`} />
                </div>
                <div className="flex-1 pl-12 py-8 flex flex-col gap-4">
                    <h1 className="text-6xl font-bold mb-8 uppercase">{`Cabin-${cabin.name}`}</h1>
                    <TextExpander>{cabin.description}</TextExpander>

                    <div className="flex gap-4 items-center">
                        <UsersIcon className="size-7 text-primary-500" />
                        <p className="text-primary-200">Fits up to <span className="font-bold text-lg text-primary-100">{cabin.maxCapacity}</span> guests</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <UsersIcon className="size-7 text-primary-500" />
                        <p className="text-primary-200">Located in the heart of the <span className="font-bold text-lg text-primary-100">Dolomites</span> (Italy)</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <EyeSlashIcon className="size-7 text-primary-500" />
                        <p className="text-primary-200">Privacy <span className="font-bold text-lg text-primary-100">100%</span> guaranteed</p>
                    </div>
                </div>
            </div>
            <p className="text-4xl mt-12 text-accent-500">Reserve Cabin-{cabin.name} Today. Pay on Arrival.</p>
            <Suspense fallback={<Spinner />}>
                <Reservation cabin={cabin} />
            </Suspense>
        </div>
    )
}

export default page
