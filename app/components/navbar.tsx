'use client';

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const menuItems = [
        { name: "Inici", href: "#hero" },
        { name: "Serveis", href: "#services" },
        { name: "Vendes", href: "#catalog" },
        { name: "Lloguer", href: "#catalog" },
        { name: "Contactans", href: "#contact" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selected, setSelected] = useState(menuItems[0].href);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    // Smooth scroll handler
    const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            setSelected(href);
        } else {
            setSelected(href);
        }
    };

    return (
        <>
            <nav className="flex items-center justify-between p-4 bg-white border-b w-full sticky top-0 z-[100] px-14">
                <div className="flex items-center">
                    <Image src="/favicon.png" alt="Find Home Logo" width={32} height={32} className="mr-2" />
                    <div className="text-xl font-bold text-blue-900">Find Home</div>
                </div>

                <div className="hidden md:flex space-x-6">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-gray-700 hover:text-blue-900 font-semibold transition-colors px-3 py-1 rounded-lg ${selected === item.href ? 'bg-blue-100 text-blue-900' : ''}`}
                            onClick={handleNavClick(item.href)}
                            aria-current={selected === item.href ? "page" : undefined}
                            aria-label={item.name}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden p-2 text-blue-900 z-[110]"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[90] md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={closeMenu}
            />

            <div className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="flex flex-col p-6 pt-16 space-y-6">
                    <div className="text-xl font-bold text-blue-900 mb-4">Find Home</div>

                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-gray-800 font-bold text-xl border-b border-gray-50 pb-2 hover:text-blue-600 rounded-lg px-2 py-1 ${selected === item.href ? 'bg-blue-100 text-blue-900' : ''}`}
                            onClick={(e) => {
                                handleNavClick(item.href)(e);
                                closeMenu();
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}