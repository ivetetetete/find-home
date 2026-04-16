'use client';

import Image from "next/image";
import Navbar from "./components/navbar";
import { ArrowRight, Award, HandHeart, MessagesSquare } from "lucide-react";
import Link from "next/link";
import Footer from "./components/footer";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
};

const Reveal = ({ children, delay = 0, y = 30 }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans">
        <Navbar />
        <main className="flex-1 w-full sm:items-start mx-auto bg-blue-50">

          <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-12 w-full p-6 max-w-6xl mx-auto">
            <div className="">
              <section id="hero" className="mt-4">
                <Reveal>
                  <h1 className="text-2xl font-semibold text-blue-900 mb-4 md:text-4xl">
                    La teva satisfacció és la nostra prioritat
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-base text-neutral-700">
                    <span className="font-bold text-blue-900">Find Home</span> és una agència jove formada per un equip professional i dinàmic amb el clar objectiu de satisfer les necessitats dels nostres clients.
                    Ens caracteritzem per un tracte personalitzat on prioritzem la transparència i eficàcia amb qualsevol mena de transacció.
                  </p>
                </Reveal>
              </section>

              <section className="flex flex-col gap-2 my-6 w-full md:flex-row md:items-center md:gap-4">
                <Reveal delay={0.4}>
                  <button
                    className="bg-blue-800 rounded-lg p-3 w-full shadow-md active:scale-[0.98] transition-transform"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <p className="text-white font-semibold">Explora nuestros servicios</p>
                  </button>
                </Reveal>
                <Reveal delay={0.5}>
                  <button
                    className="border border-blue-800 rounded-lg p-3 w-full active:scale-[0.98] transition-transform"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <p className="text-blue-800 font-semibold">Únete a nuestro equipo</p>
                  </button>
                </Reveal>
              </section>
            </div>

            <Reveal delay={0.6}>
              <section className="my-6">
                <Image
                  src="/casa.png"
                  alt="Home"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-xl md:w-full object-cover"
                />
              </section>
            </Reveal>
          </div>

          <section id="services" className="flex flex-col my-6 md:my-10 p-6 max-w-6xl mx-auto w-full">
            <Reveal>
              <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">Els nostres serveis</h2>
              <p className="text-center text-base text-neutral-700 mb-6">Descobreix els serveis que oferim per ajudar-te a trobar la casa dels teus somnis.</p>
            </Reveal>

            <div className="space-y-4 md:flex md:items-center md:gap-6 md:flex-1 md:space-y-0 ">
              <Reveal delay={0.1}>
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 min-h-55 flex flex-col">
                  <div className="bg-blue-100 rounded-lg p-3 w-fit mb-3">
                    <MessagesSquare size={24} className="text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">Assesorament</h3>
                  <p className="text-sm text-neutral-600">Et donem un assessorament integral en tot el procés de compra i venda, de manera personalitzada i del principi al final.</p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 min-h-55 flex flex-col">
                  <div className="bg-blue-100 rounded-lg p-3 w-fit mb-3">
                    <HandHeart size={24} className="text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">Acompanyament</h3>
                  <p className="text-sm text-neutral-600">T´acompanyem en tots els tràmits i gestionem qualsevol incidència per a la teva tranquil·litat.</p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 min-h-55 flex flex-col">
                  <div className="bg-blue-100 rounded-lg p-3 w-fit mb-3">
                    <Award size={24} className="text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">Vetllem pel millor servei</h3>
                  <p className="text-sm text-neutral-600">Posem a la teva disposició els millors mitjans i professionals jurídics i financers.</p>
                </div>
              </Reveal>
            </div>
          </section>

          <Reveal delay={0.4}>
            <section id="catalog" className="bg-blue-900 w-full py-12 px-6" >
              <div className="max-w-6xl mx-auto">
                <p className="text-white text-xl font-semibold text-center">¿Preparada per trobar la teva casa ideal?</p>
                <p className="text-center text-white mb-4">Explora les nostres àmplies llistes i descobreix la casa dels teus somnis avui mateix.</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col bg-white shadow rounded-xl pb-4 overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/buy.png"
                        alt="Casa ideal"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="px-4 py-2 flex flex-col flex-1">
                      <p className="text-blue-900 font-semibold text-lg">Comprar</p>
                      <p className="text-blue-900 mb-4">
                        Busca per el nostre catàleg de cases, pisos, i apartaments disponibles. Troba el teu lloc ideal avui mateix.
                      </p>

                      <button className="mt-auto bg-blue-900 rounded-lg p-2 flex flex-row items-center gap-2 mx-auto shadow transition-transform hover:scale-105">
                        <p className="text-center text-white font-semibold">Explora les nostres propietats</p>
                        <ArrowRight size={20} className="text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col bg-white shadow rounded-xl pb-4 overflow-hidden md:mt-0 mt-4">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/rent.png"
                        alt="Casa ideal"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="px-4 py-2 flex flex-col flex-1">
                      <p className="text-blue-900 font-semibold text-lg">Lloguer</p>
                      <p className="text-blue-900 mb-4">
                        Explora les nostres opcions de lloguer i troba la casa perfecta per a tu. Des de apartaments moderns fins a cases familiars, tenim tot el que necessites.
                      </p>

                      <button className="mt-auto bg-blue-900 rounded-lg p-2 flex flex-row items-center gap-2 mx-auto shadow transition-transform hover:scale-105">
                        <p className="text-center text-white font-semibold">Explora els nostres lloguers</p>
                        <ArrowRight size={20} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </Reveal>


          <section id="contact" className="flex flex-col mt-10 w-full p-6 max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">Vols convertir-te en un assessor immobiliari?</h2>
              <p className="text-center text-base text-neutral-700 mb-6">Un futur sòlid, solvent, ple d’oportunitats, on el límit el poses tu.</p>
            </Reveal>

            <div className="flex flex-col md:grid md:grid-cols-2 items-start gap-8 md:gap-12 w-full">
              <Reveal delay={0.2}>
                <Image src="/team.png" alt="Assessor" width={500} height={300} className="rounded-xl shadow-lg mb-6" />
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-white shadow-xl rounded-2xl p-6 mb-8 border border-gray-100">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-blue-900 text-sm font-medium mb-1">Nom i cognoms*</label>
                      <input id="name" type="text" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-blue-900 text-sm font-medium mb-1">Correu electrònic*</label>
                      <input id="email" type="email" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-blue-900 text-sm font-medium mb-1">Telèfon*</label>
                        <input id="phone" type="tel" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-blue-900 text-sm font-medium mb-1">Localitat</label>
                        <input id="location" type="text" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                    </div>

                    <label htmlFor="cv" className="block text-blue-900 text-sm font-medium mb-1">CV</label>
                    <input id="cv" type="file" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />

                    <div>
                      <label htmlFor="message" className="block text-blue-900 text-sm font-medium mb-1">Missatge</label>
                      <textarea id="message" rows={4} className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                    </div>

                    <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 rounded-lg w-full shadow-lg transition-colors mt-4">
                      Enviar sol·licitud
                    </button>

                    <div className="flex items-center mt-4">
                      <input id="privacy" type="checkbox" className="  mr-2" required />
                      <label htmlFor="privacy" className="text-xs text-neutral-500">
                        He llegit i accepto la{' '}
                        <Link href="/privacy-policy" className="underline text-blue-800">Política de privacitat</Link>
                      </label>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}