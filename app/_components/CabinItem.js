import { UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function CabinItem({ cabin }) {
    const { id, name, maxCapacity, regularPrice, image } = cabin;
    return (<div className="flex h-full  border-2 border-primary-900 max-w-[500px]">
        {/* Image Container */}
        <div className="relative h-full max-w-48 min-w-32">
            <Image className="object-cover" src={image} fill alt="Cabin-number-image" />
        </div>
        {/* Cabin Details */}
        <div className="flex flex-1 flex-col gap-2  pt-4 ">
            <div className="pl-4 pr-2 flex flex-col gap-4">
                <h2 className="text-accent-500 text-2xl mb-2">Cabin {name}</h2>
                <div className="flex gap-4">
                    <UsersIcon className="size-6" />
                    <span>For up to {maxCapacity} Guests</span>
                </div>
                <p className="self-end "><span className="text-2xl font-light">${regularPrice}</span>/night</p>
            </div>
            <div className="flex  flex-1 border-t-2 border-l-2  border-primary-900 ">
                <div className="flex-1"></div>
                <Link className=" text-sm flex-1 border-l-2 h-full py-2 px-2 bg-slate-600 border-primary-900" href={`/cabins/${id}`}>Details & reservations &rarr;</Link>
            </div>
        </div>
    </div>);
}

export default CabinItem
