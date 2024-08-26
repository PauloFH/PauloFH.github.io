import React from 'react';
import Image from 'next/image';
const AboutMe: React.FC = () => {
  return (
    <section id="sobre" className="py-16 pt-50 bg-blue-950">
      <div className="container mx-auto px-25">
        <h2 className="text-3xl font-bold text-center mb-8">Olá! Eu sou Paulo Holanda,</h2>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
            <Image
              src="../images/photo-profile.jpg"
              alt="Paulo Holanda"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <p className="text-center max-w-2xl mx-auto text-lg py-3">
          
     Developer passionate about games and technology. With experience in various technologies and devices, I'm always looking to learn and apply new skills to challenging projects or make products for my own use. Outside of programming, I enjoy reading, listening to music and running. I'm always open to new opportunities and collaborations!


          </p>
          <p className='text-center max-w-2xl'>

          
     Main technologies: C# .NET, game development with unity3D and Godot, Java desktop and
     web, mobile swift and Flutter, C++ desktop applications.

          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;