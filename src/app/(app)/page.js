'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="">
      <nav className="bg-violet-800  p-4">
        <div className="flex justify-between items-center">
          {/* Modifica este enlace */}
          <Link href="#home" className="font-semibold" >
            Home
          </Link>
          
          <Link href="#request-uber" className="font-semibold">
            Request Uber
          </Link>
          <Link href="#be-uber" className="font-semibold">
            Be Uber
          </Link>
          <button >
          <Link   href="/account" className="font-semibold">
            <Image   width={30} height={30} src="user.svg" alt="user"/>
          </Link>
          </button>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto p-4">
        <section id="home" className="text-center my-8">
          <h1 className="text-3xl font-bold">Welcome to TGAweb</h1>
          <p className="mt-4">
            TGAweb is like Uber but operates on a subscription model, offering
            better prices for both customers and drivers. Join us and experience
            the new era of transportation.
          </p>
        </section>
      </div>
    </main>
  );
}