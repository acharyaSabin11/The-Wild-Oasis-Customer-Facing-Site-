import Image from "next/image";
import bg from '@/public/bg.png';
import Link from "next/link";
import { auth } from "./_lib/auth";

export default async function Home() {
  return (
    <div className="mt-40">
      <Image quality={60} placeholder="blur" className="object-cover object-top" src={bg} alt="The Wild Oasis Background" fill />
      <div className="relative z-20 mx-auto flex gap-8 flex-col justify-center items-center">
        <span className="text-9xl">Welcome to paradise</span>
        <Link className="bg-accent-500 px-6 py-4 text-2xl text-primary-800 hover:bg-accent-600 active:text-accent-500" href='/cabins'>Explore Luxury Cabins</Link>
      </div>
    </div>
  );
}
