import Image from "next/image";
import bg from '@/public/bg.png';
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <Image quality={60} className="object-cover object-top" src={bg} alt="The Wild Oasis Background" fill />
      <div className="relative z-20 mx-auto flex gap-8 flex-col justify-center items-center">
        <span className="text-9xl">Welcome to paradise</span>
        <Link className="bg-accent-500 px-6 py-4 text-2xl text-primary-800 hover:bg-accent-600" href='/cabins'>Explore Luxury Cabins</Link>
      </div>
    </div>
  );
}
