import React from 'react';
import Image from 'next/image';
import PhotoProfile from '@/resources/images/photo-profile.jpg';

const AboutMe: React.FC = () => {
  return (
    <section id="sobre" className="py-16 pt-24 bg-fuchsia-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Olá! Eu sou Paulo Holanda,</h2>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
            <Image
              src={PhotoProfile}
              alt="Paulo Holanda"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <p className="text-center max-w-2xl mx-auto text-lg">
             Um desenvolvedor apaixonado por jogos e tecnologia. 
            Com experiência em várias tecnologias e dispositivos, estou sempre buscando aprender e aplicar novas 
            habilidades em projetos desafiadores ou fazer produtos para meu uso pessoal. Fora do mundo da programação, gosto de ler, ouvir música e correr. 
            Estou sempre aberto a novas oportunidades e colaborações!
          </p>
          <p>

          principais tecnologias: Java desktop e web, Flutter, C++, swift e C# (backend e jogos unity)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;