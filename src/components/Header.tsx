"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out pt-2 ${isScrolled ? 'bg-fuchsia-800 bg-opacity-75 h-16 shadow-md' : 'bg-fuchsia-950 h-20'} z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <Image 
              src='../images/android-chrome-512x512.png'
              alt="Logo" 
              width={48} 
              height={48}
            />
          </div>
          <h1 className={`text-2xl font-bold transition-transform duration-300 ${isScrolled ? 'text-white' : 'text-gray-100'}`}>Paulo Holanda</h1>
        </div>

        {/* Menu para desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#sobre" className={`hover:text-gray-300 transition-colors ${isScrolled ? 'text-gray-300' : 'text-gray-100'}`}>Sobre</a></li>
            <li><a href="#projetos" className={`hover:text-gray-300 transition-colors ${isScrolled ? 'text-gray-300' : 'text-gray-100'}`}>Projetos</a></li>
            <li><a href="#contato" className={`hover:text-gray-300 transition-colors ${isScrolled ? 'text-gray-300' : 'text-gray-100'}`}>Contato</a></li>
          </ul>
        </nav>
        
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
