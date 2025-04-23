"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dane logowania:', formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Nav />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          <div className="lg:w-1/2">
            <div className="flex justify-center mb-4 lg:hidden">
              <Image src="/logoGrayBackground.svg" alt="Smok" width={160} height={160} />
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">
              Witaj z powrotem!
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
              <p>
                <span className="font-semibold text-blue-700">Zaloguj się</span>, aby kontynuować naukę i śledzić swoje postępy.
              </p>
              
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3">Korzyści z konta:</h3>
                <ul className="space-y-2 sm:space-y-3 list-disc pl-4 sm:pl-5">
                  <li><span className="font-medium">Dostęp do pełnej wersji kursu maturalnego</span> - innowacyjne podejście do nauki matematyki</li>
                  <li><span className="font-medium">Historia rozwiązywanych zadań</span> - wracaj do swoich rozwiązań w każdej chwili</li>
                  <li><span className="font-medium">Odznaki za naukę</span> - stała motywacja do nauki matematyki</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 sticky top-8">
              <div className="hidden lg:flex justify-center mb-4 sm:mb-6">
                <Image src="/logo.svg" alt="Smok" width={150} height={150} />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 sm:mb-6 text-center">
                Zaloguj się
              </h2>
              
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white border border-gray-300 rounded-md py-2 sm:py-3 px-4 mb-4 sm:mb-6 text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                <FcGoogle className="text-lg sm:text-xl" />
                Zaloguj się przez Google
              </button>
              
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="mx-3 sm:mx-4 text-sm sm:text-base text-gray-500">lub</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Adres email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Wprowadź email"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Hasło
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Wprowadź hasło"
                  />
                </div>

                <div className="text-right">
                  <Link href="/przypomnij-haslo" className="text-sm text-blue-600 hover:text-blue-800">
                    Zapomniałeś hasła?
                  </Link>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 rounded-md transition duration-200 text-sm sm:text-base"
                >
                  Zaloguj się
                </button>
              </form>
              
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-sm sm:text-base text-gray-600">
                  Nie masz jeszcze konta?{' '}
                  <Link href="/rejestracja" className="text-blue-600 hover:text-blue-800 font-medium">
                    Zarejestruj się
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;