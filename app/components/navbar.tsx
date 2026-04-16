'use client';

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const menuItems = [
        { name: "Inici", href: "#" },
        { name: "Propietaris", href: "#" },
        { name: "Serveis", href: "#" },
        { name: "Contactans", href: "#" },
        { name: "Vendes", href: "#" },
        { name: "Lloguer", href: "#" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Toggling menu. Current state:", isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <nav className="flex items-center justify-between p-4 bg-sidebar w-full" >
            <div className="text-xl font-bold text-blue-900">Find Home</div>
            <button className="md:hidden" aria-label="Open menu" onClick={toggleMenu}>
                <Menu className="md:hidden text-2xl text-blue-900" />
            </button>
            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-black font-bold text-lg">
                    Inici
                </a>
                <a href="#" className="text-black font-bold text-lg">
                    Propietaris
                </a>
                <a href="#" className="text-black font-bold text-lg">
                    Serveis
                </a>
                <a href="#" className="text-black font-bold text-lg">
                    Contactans
                </a>
                <a href="#" className="text-black font-bold text-lg">
                    Vendes
                </a>
                <a href="#" className="text-black font-bold text-lg">
                    Lloguer
                </a>
            </div>

            <div className={`absolute top-full left-0 w-full bg-sidebar p-4 flex flex-col items-start space-y-2 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                <a href="#" className="text-black font-bold text-lg">
                    Iniciar Sessió
                </a>
                <a href="#" className="text-black font-bold text-lg">
                    Registre
                </a>
            </div>
        </nav>
    );
}