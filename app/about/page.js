import Image from "next/image"
import about1 from '@/public/about-1.jpg'
import about2 from '@/public/about-2.jpg'
import Link from "next/link"
import { getCabins } from "../_lib/api_cabins"

export const revalidate = 86400;

async function page() {
    const numCabins = await getCabins().then(cabins => cabins.length);
    return (
        <div className="grid grid-cols-5 gap-x-16 gap-y-24 items-center ">
            <div className="col-span-3 flex flex-col gap-6 ">
                <p className="text-accent-500 text-3xl">Welcome to The Wild Oasis</p>
                <p className="text-xl">
                    Where nature&apos;s beauty and comfortable living blend seamlessly.
                    Hidden away in the heart of the Italian Dolomites, this is your
                    paradise away from home. But it&apos;s not just about the luxury cabins.
                    It&apos;s about the experience of reconnecting with nature and enjoying
                    simple pleasures with family.
                </p>
                <p className="text-xl">
                    Our {numCabins} luxury cabins provide a cozy base, but the real freedom and
                    peace you&apos;ll find in the surrounding mountains. Wander through lush
                    forests, breathe in the fresh air, and watch the stars twinkle above
                    from the warmth of a campfire or your hot tub. This is where memorable moments are made, surrounded by nature&apos;s
                    splendor. It&apos;s a place to slow down, relax, and feel the joy of
                    being together in a beautiful setting.
                </p>
            </div>
            <div className="relative col-span-2 h-full w-full max-w-[35rem] mx-auto max-h-[40rem]">
                <Image src={about1} fill alt="About-1" className=" object-cover mx-auto " />
            </div>
            <div className="relative col-span-2 h-full w-full max-w-[35rem] mx-auto">
                <Image src={about2} fill alt="About-2" className=" object-cover mx-auto " />
            </div>
            <div className="col-span-3 flex flex-col gap-6 items-start">
                <p className="text-accent-500 text-3xl">Managed by our family since 1932</p>
                <p className="text-xl">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Torquent penatibus per ac consectetur elit praesent elementum quis. Leo nascetur accumsan fermentum ut cursus montes et adipiscing. Imperdiet ipsum sagittis dignissim phasellus donec arcu lacinia ut. Tellus vulputate aptent maecenas ex et metus. Condimentum sem fames gravida nec accumsan condimentum commodo semper. Nascetur etiam lorem molestie quis convallis, malesuada cubilia aptent.
                </p>
                <p className="text-xl">
                    Phasellus penatibus magnis posuere; volutpat in magnis. Ipsum habitant ante lacus cubilia cras odio amet dictum. Ut eleifend odio est risus ornare. Massa venenatis mi penatibus laoreet malesuada eget fames ante. Ligula luctus cursus non aliquam ornare enim. Volutpat odio est nec ex lacus. Morbi etiam dis aenean risus lobortis ultricies suscipit tempor tempus. Odio pharetra justo sapien ornare laoreet quis fringilla. Fames gravida tincidunt proin feugiat amet eleifend quis scelerisque.
                </p>

                <Link className="bg-accent-500 px-4 py-2 text-xl text-primary-800 hover:bg-accent-600" href='/cabins'>Explore our Luxury Cabins</Link>

            </div>

        </div>
    )
}

export default page
