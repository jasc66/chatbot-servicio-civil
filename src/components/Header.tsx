import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="text-gray-500 bg-primary body-font">
      <div className="container mx-auto p-2 flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-2xl font-bold" id="main-header">Chatbot Servicio Civil</h1>
        </div>
        <Link 
          href="/" 
          className="mt-4 md:mt-0 md:ml-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Ir a la página principal"
        >
          <Image
            src="/logo_design_jasc.webp"
            alt="Logo del Chatbot Servicio Civil"
            width={40}
            height={40}
            className="p-2 bg-primary rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
