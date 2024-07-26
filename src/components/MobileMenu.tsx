"use client";

import React, { useState } from 'react';

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Menu móvel */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><a href="#sobre" className="block hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#projetos" className="block hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
            <li><a href="#contato" className="block hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;