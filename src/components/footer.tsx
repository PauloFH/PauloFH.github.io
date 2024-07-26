"use client";

import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa ícones do Font Awesome

const Footer: React.FC = () => {
  return (
    <section id="contato" className="py-12 bg-fuchsia-900 text-white">
      <div className="container mx-auto text-center"> {/* Centraliza o texto */}
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <p className="text-lg mb-4">
          Você pode me contatar através dos seguintes meios:
        </p>
        <ul className="list-none p-0">
          <li className="mb-4">
            <a href="mailto:paulorfholanda@gmail.com" className="flex items-center justify-center text-white hover:text-gray-400">
              <FaEnvelope className="mr-2" /> Email: paulorfholanda@gmail.com
            </a>
          </li>
          <li className="mb-4">
            <a href="https://www.linkedin.com/in/paulo-roberto-fernandes-holanda-6b0347116/" className="flex items-center justify-center text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="mr-2" /> LinkedIn: Paulo Holanda
            </a>
          </li>
          <li>
            <a href="https://github.com/PauloFH" className="flex items-center justify-center text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2" /> GitHub: PauloFH
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
