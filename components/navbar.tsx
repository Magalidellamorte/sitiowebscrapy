"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  currentPage?: string;
  variant?: 'home' | 'reciclaje' | 'default';
}

export default function Navbar({ currentPage = "", variant = "default" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Define menu items
  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Reciclaje Urbano", href: "/reciclaje-urbano" },
    { label: "Reciclaje Industrial", href: "/reciclaje-industrial" },
    // Comentado según lo pedido
    // { label: "Barrios Cerrados", href: "/barrios-cerrados" },
    { label: "Beneficios", href: "/beneficios" },
    { label: "Contacto", href: "/contacto" },
  ];

  // Determinar si es la página de inicio
  const isHomePage = currentPage === "/" || currentPage === "";

  // Determine el color y estilo adecuado para la navegación
  const getNavBgClass = () => {
    if (variant === 'home') {
      return scrolled ? "bg-black/40 backdrop-blur-sm" : "bg-transparent";
    } else if (variant === 'reciclaje') {
      return scrolled ? "bg-black/5 backdrop-blur-sm" : "bg-transparent";
    } else {
      // Para otras páginas, fondo blanco con sombra al hacer scroll
      return `bg-white ${scrolled ? "shadow-sm" : "shadow-none"}`;
    }
  };

  // Determine el estilo del texto
  const getTextBaseClass = () => {
    if (variant === 'home') {
      // Para home, texto blanco con hover verde
      return "text-white hover:text-green-400 transition-colors font-bold";
    } else if (variant === 'reciclaje') {
      // Para reciclaje, texto gris oscuro
      return "text-gray-500 hover:text-gray-700 transition-colors font-bold";
    } else {
      // Para otras páginas
      return "text-gray-400 hover:text-gray-600 font-bold";
    }
  };
  
  const navBgClass = getNavBgClass();
  const textBaseClass = getTextBaseClass();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo scrapy color.png"
            alt="Scrapy logo"
            width={160}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-medium">
          {menuItems.map((item) => {
            // Determinar si este item está activo
            const isActive = item.href === currentPage;
            
            // Estilo especial para el botón de contacto
            if (item.label === "Contacto") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 font-bold"
                >
                  {item.label}
                </Link>
              );
            }
            
            // Estilo para items activos normales
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${textBaseClass} ${isActive ? "text-opacity-100" : "text-opacity-90"} relative group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 h-0.5 bg-current ${
                  isActive 
                    ? "w-full left-0" 
                    : "w-0 left-1/2 transform -translate-x-1/2 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"
                } transition-all duration-300 ease-out`}></span>
              </Link>
            );
          })}
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`md:hidden focus:outline-none ${
            variant === 'home' ? "text-white" : variant === 'reciclaje' ? "text-gray-700" : "text-gray-600"
          }`}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden ${
          variant === 'home' 
            ? "bg-black/80 backdrop-blur-md border-t border-white/20" 
            : variant === 'reciclaje'
              ? "bg-black/50 backdrop-blur-md border-t border-white/20"
              : "border-t border-gray-200 bg-white"
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = item.href === currentPage;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 ${
                    item.label === "Contacto"
                      ? "text-green-400 font-bold"
                      : variant === 'home' 
                        ? "text-white hover:text-green-400 transition-colors font-bold" 
                        : variant === 'reciclaje'
                          ? "text-gray-700 hover:text-gray-900 transition-colors font-bold"
                          : `text-gray-600 hover:text-gray-900 font-bold`
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
