'use client';

import Image from "next/image";
import Navbar from "./components/navbar";
import { ArrowRight, Award, Building, CarFront, Flower, HandHeart, HomeIcon, Mail, MessagesSquare, Phone, Sun, User, WavesLadder } from "lucide-react";
import Link from "next/link";
import Footer from "./components/footer";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import ProgressBar from "./components/progressBar";

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
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  }
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
                    <p className="text-blue-800 font-semibold">Infórmate gratis</p>
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
            <Reveal delay={0.3}>
              <div>
                <h2 className="text-2xl text-center font-semibold text-blue-900">¿Cuanto cuesta tu propiedad?</h2>
                <p className="text-sm text-neutral-600 text-center mt-2">Obtén una valoración gratuita de tu propiedad de nuestro equipo de expertos en solo unos pocos pasos sencillos.</p>
              </div>

              <ProgressBar step={step} />

              <div className="bg-white shadow rounded-xl p-5">
                {step === 1 && (
                  <>
                    <p className="text-blue-900 textx-lg font-semibold text-center">¿Que tipo de propiedad deseas valorar?</p>

                    <div className="flex flex-col md:flex-row gap-x-3">
                      <div className="flex items-center gap-x-2 border border-gray-200 rounded-lg p-3 mt-4 cursor-pointer hover:bg-blue-100 hover:border-blue-300 transition-all md:flex-1 md:flex-col md:gap-y-2" onClick={handleNextStep}>
                        <HomeIcon size={18} className="text-blue-900 inline-block mr-2 md:mr-0 md:size-10" />
                        <p className="text-blue-900 font-semibold md:text-xl">Casa</p>
                      </div>

                      <div className="flex items-center gap-x-2 border border-gray-200 rounded-lg p-3 mt-4 cursor-pointer hover:bg-blue-100 hover:border-blue-300 transition-all md:flex-1 md:flex-col md:gap-y-2" onClick={handleNextStep}>
                        <Building size={18} className="text-blue-900 inline-block mr-2 md:size-10 md:mr-0" />
                        <p className="text-blue-900 font-semibold md:text-xl">Piso</p>
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <p className="text-blue-900 textx-lg font-semibold text-center">¿En que localidad se encuentra tu propiedad?</p>

                    <input type="text" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring focus:ring-blue-300 outline-none transition-all mt-4 placeholder:text-neutral-400 text-neutral-600" placeholder="Introduce la localidad" />

                    <button className="bg-blue-900 rounded-lg p-2 flex flex-row items-center gap-2 mx-auto shadow transition-transform hover:scale-105 mt-4" onClick={handleNextStep}>
                      <p className="text-center text-white font-semibold">Siguiente</p>
                      <ArrowRight size={20} className="text-white" />
                    </button>
                  </>
                )}

                {step === 3 && (
                  <>
                    <p className="text-blue-900 textx-lg font-semibold text-center">Detalles de la propiedad</p>

                    <select className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring focus:ring-blue-300 outline-none transition-all mt-4 text-neutral-600">
                      <option className="text-neutral-600" value="">Estado de la propiedad</option>
                      <option value="1" className="text-neutral-600">Obra nueva</option>
                      <option value="2" className="text-neutral-600">Buen estado</option>
                      <option value="3" className="text-neutral-600">A reformar</option>
                    </select>

                    <div>
                      <input type="number" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition-all mt-4 placeholder:text-neutral-400 text-neutral-600" placeholder="Superficie construida (m²)" />

                      <input type="number" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition-all mt-4 placeholder:text-neutral-400 text-neutral-600" placeholder="Superficie total (m²)" />
                    </div>

                    <div>
                      <input type="number" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition-all mt-4 placeholder:text-neutral-400 text-neutral-600" placeholder="Número de habitaciones" />
                      <input type="number" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition-all mt-4 placeholder:text-neutral-400 text-neutral-600" placeholder="Número de baños" />
                    </div>

                    <button className="bg-blue-900 rounded-lg p-2 flex flex-row items-center gap-2 mx-auto shadow transition-transform hover:scale-105 mt-4" onClick={handleNextStep}>
                      <p className="text-center text-white font-semibold">Siguiente</p>
                      <ArrowRight size={20} className="text-white" />
                    </button>
                  </>
                )}

                {step === 4 && (
                  <>
                    <p className="text-blue-900 textx-lg font-semibold text-center">Características</p>

                    <div>
                      <label className="flex items-center gap-x-2 mt-4 cursor-pointer border border-gray-200 rounded-lg p-3 hover:bg-blue-100 hover:border-blue-300 transition-all">
                        <input type="checkbox" className="mr-2 sr-only" />
                        <Sun size={24} className="text-blue-900 inline-block mr-2" />
                        <p className="text-blue-900 font-semibold">Terraza</p>
                      </label>

                      <label className="flex items-center gap-x-2 mt-4 cursor-pointer border border-gray-200 rounded-lg p-3 hover:bg-blue-100 hover:border-blue-300 transition-all">
                        <input type="checkbox" className="mr-2 sr-only" />
                        <WavesLadder size={24} className="text-blue-900 inline-block mr-2" />
                        <p className="text-blue-900 font-semibold">Piscina</p>
                      </label>

                      <label className="flex items-center gap-x-2 mt-4 cursor-pointer border border-gray-200 rounded-lg p-3 hover:bg-blue-100 hover:border-blue-300 transition-all">
                        <input type="checkbox" className="mr-2 sr-only" />
                        <CarFront size={24} className="text-blue-900 inline-block mr-2" />
                        <p className="text-blue-900 font-semibold">Garaje</p>
                      </label>

                      <label className="flex items-center gap-x-2 mt-4 cursor-pointer border border-gray-200 rounded-lg p-3 hover:bg-blue-100 hover:border-blue-300 transition-all">
                        <input type="checkbox" className="mr-2 sr-only" />
                        <Flower size={24} className="text-blue-900 inline-block mr-2" />
                        <p className="text-blue-900 font-semibold">Jardín</p>
                      </label>
                    </div>

                    <button className="bg-blue-900 rounded-lg p-2 flex flex-row items-center gap-2 mx-auto shadow transition-transform hover:scale-105 mt-4" onClick={handleNextStep}>
                      <p className="text-center text-white font-semibold">Siguiente</p>
                      <ArrowRight size={20} className="text-white" />
                    </button>
                  </>
                )}

                {step === 5 && (
                  <>
                    <p className="text-blue-900 textx-lg font-semibold text-center">Cuéntanos más</p>

                    <div>
                      <textarea name="more_info" id="more_info" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring focus:ring-blue-300 outline-none transition-all mt-4 placeholder:text-neutral-400 h-32 text-neutral-600" placeholder="Comparte cualquier información adicional que consideres relevante"></textarea>
                    </div>

                    <p className="text-xs text-neutral-400">Cuánto más detalles proporciones, más precisa será tu valoración</p>

                    <button className="bg-blue-900 rounded-lg p-2 flex flex-row items-center gap-2 mx-auto shadow transition-transform hover:scale-105 mt-4" onClick={handleNextStep}>
                      <p className="text-center text-white font-semibold">Siguiente</p>
                      <ArrowRight size={20} className="text-white" />
                    </button>
                  </>
                )}

                {step === 6 && (
                  <>
                    <p className="text-blue-900 textx-lg font-semibold text-center">¿Qué te interesa hacer?</p>

                    <div>
                      <label className="flex items-center gap-x-2 mt-4 cursor-pointer border border-gray-200 rounded-lg p-3 hover:bg-blue-100 hover:border-blue-300 transition-all">
                        <input type="checkbox" className="mr-2 sr-only" />
                        <p className="text-blue-900 font-semibold">Quiero vender mi propiedad</p>
                      </label>

                      <label className="flex items-center gap-x-2 mt-4 cursor-pointer border border-gray-200 rounded-lg p-3 hover:bg-blue-100 hover:border-blue-300 transition-all">
                        <input type="checkbox" className="mr-2 sr-only" />
                        <p className="text-blue-900 font-semibold">Quiero alquilar una propiedad</p>
                      </label>
                    </div>

                    <button className="bg-blue-900 rounded-lg p-2 flex flex-row items-center gap-2 mx-auto shadow transition-transform hover:scale-105 mt-4" onClick={handleNextStep}>
                      <p className="text-center text-white font-semibold">Siguiente</p>
                      <ArrowRight size={20} className="text-white" />
                    </button>
                  </>
                )}

                {step === 7 && (
                  <>
                    <p className="text-blue-900 textx-lg font-semibold text-center">Tu información de contacto</p>

                    <div className="flex items-center gap-x-3 p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all mt-4 ">
                      <User size={24} className="text-neutral-400 inline-block" />
                      <input type="text" className="w-full placeholder:text-neutral-400 outline-0 text-neutral-600 " placeholder="Nombre completo" />
                    </div>

                    <div className="flex items-center gap-x-3 p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all mt-4 ">
                      <Mail size={24} className="text-neutral-400 inline-block" />
                      <input type="email" className="w-full placeholder:text-neutral-400 outline-0 text-neutral-600 " placeholder="Correo electrónico" />
                    </div>

                    <div className="flex items-center gap-x-3 p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all mt-4 ">
                      <Phone size={24} className="text-neutral-400 inline-block" />
                      <input type="tel" className="w-full placeholder:text-neutral-400 outline-0 text-neutral-600 " placeholder="Número de teléfono" />
                    </div>

                    <button className="bg-blue-900 rounded-lg p-2 flex flex-row items-center gap-2 mx-auto shadow transition-transform hover:scale-105 mt-4" onClick={handleNextStep}>
                      <p className="text-center text-white font-semibold">Enviar</p>
                      <ArrowRight size={20} className="text-white" />
                    </button>
                  </>
                )}


              </div>
            </Reveal>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}