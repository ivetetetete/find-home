'use client';

import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <Navbar />
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <section className="">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">LA TEVA SATISFACCIÓ ÉS LA NOSTRA PRIORITAT</h1>
          </div>
        </section>

      </main>
    </div>
  );
}
