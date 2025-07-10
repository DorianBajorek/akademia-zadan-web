'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, JSX } from 'react';
import { useAuth } from '../app/UserData';
import { useRouter, usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsMenuOpen(false);
  };

  const linksLoggedIn: NavLink[] = [
    { href: '/', label: 'Strona główna' },
    { href: '/kurs-matura-podstawowa', label: 'Kurs maturalny' },
    { href: '/profil', label: 'Profil' },
    { href: '#', label: 'Wyloguj się', onClick: handleLogout },
  ];

  const linksLoggedOut: NavLink[] = [
    { href: '/', label: 'Strona główna' },
    { href: '/logowanie', label: 'Logowanie' },
    { href: '/rejestracja', label: 'Rejestracja' },
  ];

  const navLinks = token ? linksLoggedIn : linksLoggedOut;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" aria-label="Główne menu nawigacyjne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href="/" aria-label="Strona główna">
            <Image src="/logo.svg" alt="Logo Akademia Zadań" width={50} height={50} />
          </Link>
          <Link href="/" className="hidden sm:block" aria-label="Akademia Zadań">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors">
              Akademia Zadań
            </h1>
          </Link>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6" role="menubar">
          {navLinks.map(({ href, label, onClick }) => (
            <li key={label} role="none">
              {onClick ? (
                <button
                  onClick={onClick}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                  role="menuitem"
                >
                  {label}
                </button>
              ) : (
                <Link
                  href={href}
                  className={`text-gray-700 hover:text-blue-500 transition-colors font-medium ${
                    pathname === href ? 'border-b-2 border-blue-500' : ''
                  }`}
                  role="menuitem"
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile menu with animation */}
        <div
          ref={menuRef}
          className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6 transform origin-top transition-transform duration-300 ${
            isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
          }`}
          role="menu"
          aria-label="Menu mobilne"
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map(({ href, label, onClick }) => (
              <li key={label} role="none">
                {onClick ? (
                  <button
                    onClick={() => {
                      onClick();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium w-full text-left"
                    role="menuitem"
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-gray-700 hover:text-blue-500 transition-colors font-medium block ${
                      pathname === href ? 'border-l-4 border-blue-500 pl-2' : ''
                    }`}
                    role="menuitem"
                    aria-current={pathname === href ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
