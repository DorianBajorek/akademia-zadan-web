"use client";
import "katex/dist/katex.min.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { google, register } from "@/service";
import { useAuth } from "../UserData";
import { Eye, EyeOff } from 'lucide-react';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { updateToken, updateUsername } = useAuth();

  const handleSubmit = async () => {
    try {
      const data = await register(email, username, password, confirmPassword);
      console.log("Rejestracja pomyślna:", data);
      if (data?.key && data?.username) {
        updateToken(data.token);
        updateUsername(data.username);
        window.location.href = '/';
      } else {
        console.error("Rejestracja nieudana. Brak tokena lub nazwy użytkownika.");
      }
    } catch (error) {
      console.error("Błąd podczas rejestracji:", error);
    }
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          <div className="lg:w-1/2">
            <div className="flex justify-center mb-4 lg:hidden">
              <Image src="/logoGrayBackground.svg" alt="Smok" width={160} height={160} />
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">
              Rozpocznij swoją przygodę z nauką
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
              <p>
                <span className="font-semibold text-blue-700">Założenie konta zajmie mniej niż minutę</span>, a da Ci dostęp do wyjątkowych materiałów edukacyjnych.
              </p>
              
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3">Korzyści z rejestracji:</h3>
                <ul className="space-y-2 sm:space-y-3 list-disc pl-4 sm:pl-5">
                  <li><span className="font-medium">Dostęp do próbnej wersji nowoczesnego kursu maturalnego</span></li>
                  <li><span className="font-medium">Śledzenie postępów</span></li>
                  <li><span className="font-medium">System odznaczeń</span></li>
                  <li><span className="font-medium">Odznaki za naukę</span></li>
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
                Zarejestruj się
              </h2>
              
              <div className="w-full mb-4 sm:mb-6 flex justify-center">
                <GoogleLogin
                  onSuccess={async credentialResponse => {
                    try {
                      const resp = await google(credentialResponse.credential ?? null);
                      console.log("Google token:", credentialResponse.credential);
                      console.log("Backend token:", resp);

                      if (resp.token && resp.user?.username) {
                        updateToken(resp.token);
                        updateUsername(resp.user.username);
                        window.location.href = '/';
                      } else {
                        console.error("Rejestracja przez Google nieudana.");
                      }
                    } catch (error) {
                      console.error("Błąd rejestracji przez Google:", error);
                    }
                  }}
                  onError={() => {
                    console.log('Rejestracja przez Google nie powiodła się');
                  }}
                />

              </div>

              
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="mx-3 sm:mx-4 text-sm sm:text-base text-gray-500">lub</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Nazwa użytkownika
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Wprowadź nazwę użytkownika"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Adres email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Wprowadź email"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Hasło
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-3 sm:px-4 py-2 pr-10 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Wprowadź hasło (min. 8 znaków)"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Pokaż hasło"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Powtórz hasło
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full px-3 sm:px-4 py-2 pr-10 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Powtórz hasło"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label="Pokaż hasło"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 rounded-md transition duration-200 text-sm sm:text-base"
                  onClick={handleSubmit}
                >
                  Zarejestruj się
                </button>
                </div>
              
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-sm sm:text-base text-gray-600">
                  Masz już konto?{' '}
                  <Link href="/logowanie" className="text-blue-600 hover:text-blue-800 font-medium">
                    Zaloguj się
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

export default Register;
