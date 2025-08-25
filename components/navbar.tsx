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
    { label: "Beneficios", href: "https://beneficios.scrapyapp.com/user/coupons", external: true },
    { label: "Contacto", href: "/contacto" },
  ];

  // Determinar el color de fondo según la página actual
  const getPageHeaderColor = () => {
    switch (currentPage) {
      case "/":
        return "bg-black/40 backdrop-blur-lg"; // Home - mismo efecto difuminado del video hero
      case "/reciclaje-urbano":
        return "bg-green-50/95 backdrop-blur-lg"; // Reciclaje urbano - verde claro con transparencia y blur
      case "/reciclaje-industrial":
        return "bg-white/95 backdrop-blur-lg"; // Reciclaje industrial - blanco con transparencia y blur
      case "/contacto":
        return "bg-gray-800/90 backdrop-blur-lg"; // Contacto - gris oscuro con transparencia y blur
      default:
        return "bg-white/95 backdrop-blur-lg"; // Otras páginas - blanco con transparencia y blur
    }
  };

  // Determinar el color del texto según el fondo
  const getTextColor = () => {
    switch (currentPage) {
      case "/":
      case "/contacto":
        return "text-white"; // Texto blanco para fondos oscuros
      case "/reciclaje-urbano":
      case "/reciclaje-industrial":
        return "text-gray-800"; // Texto oscuro para fondos claros
      default:
        return "text-gray-800"; // Texto oscuro por defecto
    }
  };

  // Color para el estado activo (siempre verde de la app)
  const getActiveTextColor = () => {
    return "text-green-400";
  };

  // Determine el color y estilo adecuado para la navegación (solo desktop)
  const getNavBgClass = () => {
    if (variant === 'home') {
      return scrolled ? "bg-black/40 backdrop-blur-sm" : "bg-transparent";
    } else if (variant === 'reciclaje') {
      return scrolled ? "bg-black/5 backdrop-blur-sm" : "bg-transparent";
    } else {
      return `bg-white ${scrolled ? "shadow-sm" : "shadow-none"}`;
    }
  };

  // Determine el estilo del texto (solo desktop)
  const getTextBaseClass = () => {
    if (variant === 'home') {
      return "text-white hover:text-green-400 transition-colors font-bold";
    } else if (variant === 'reciclaje') {
      return "text-gray-500 hover:text-gray-700 transition-colors font-bold";
    } else {
      return "text-gray-400 hover:text-gray-600 font-bold";
    }
  };
  
  const navBgClass = getNavBgClass();
  const textBaseClass = getTextBaseClass();
  const pageHeaderColor = getPageHeaderColor();
  const mobileTextColor = getTextColor();
  const activeColor = getActiveTextColor();

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
            const isActive = item.href === currentPage;
            
            // Estilo normal para todos los items en desktop (sin botón especial para contacto)
            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`${textBaseClass} ${isActive ? "text-green-400" : "text-opacity-90"} relative group`}
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
          className={`md:hidden focus:outline-none ${mobileTextColor}`}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden ${pageHeaderColor} backdrop-blur-md border-t border-white/20`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = item.href === currentPage;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`block px-3 py-2 font-bold transition-colors ${
                    isActive 
                      ? activeColor 
                      : `${mobileTextColor} hover:${activeColor.replace('text-', 'hover:text-')}`
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
