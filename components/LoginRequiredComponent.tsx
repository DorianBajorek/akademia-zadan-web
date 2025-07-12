'use client';

import { useRouter } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const LoginRequiredScreen = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <svg
              className="h-8 w-8 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Dostęp ograniczony
          </h2>

          <p className="text-gray-600 mb-6">
            To zadanie jest dostępne tylko dla zalogowanych użytkowników.
          </p>

          <div className="bg-blue-50 p-4 rounded-md mb-6 text-left">
            <h3 className="font-medium text-blue-800 mb-2">
              Dlaczego warto się zalogować?
            </h3>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li>Pełny dostęp do wszystkich zadań i funkcji</li>
              <li>Możliwość śledzenia swoich postępów</li>
              <li>Zapisywanie wyników i historii rozwiązań</li>
              <li>Dostęp do spersonalizowanych rekomendacji</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push('/logowanie')}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium"
            >
              Zaloguj się
            </button>
            <button
              onClick={() => router.push('/rejestracja')}
              className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition font-medium"
            >
              Zarejestruj się
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginRequiredScreen;
