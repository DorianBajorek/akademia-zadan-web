"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          </Link>
          <Link href="/">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Akademia Zadań</h1>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500 transition-colors">
            Strona główna
          </Link>
          <Link href="/barometr-opis" className="text-gray-700 hover:text-blue-500 transition-colors">
            Barometr
          </Link>
          <Link href="/task-speedrun" className="text-gray-700 hover:text-blue-500 transition-colors">
            Zadaniowy speedrun
          </Link>
          <Link href="/logowanie" className="text-gray-700 hover:text-blue-500 transition-colors">
            Logowanie
          </Link>
          <Link href="/rejestracja" className="text-gray-700 hover:text-blue-500 transition-colors">
            Rejestracja
          </Link>
        </div>

        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Strona główna
              </Link>
              <Link 
                href="/barometr-opis" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Barometr
              </Link>
              <Link 
                href="/task-speedrun" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Zadaniowy speedrun
              </Link>
              <Link 
                href="/logowanie" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Logowanie
              </Link>
              <Link 
                href="/rejestracja" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rejestracja
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;