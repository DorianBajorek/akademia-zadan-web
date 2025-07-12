import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {
  ChartBarIcon,
  AcademicCapIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { SparklesIcon, ChartBarSquareIcon, TrophyIcon } from '@heroicons/react/24/solid';

const BarometerExamSelector: React.FC = () => {
  return (
    <div className='pt-20'>
      <Nav />
      <div className="from-blue-50 to-indigo-50 min-h-screen flex flex-col">
        <main className="max-w-7xl mx-auto px-6 pt-8 w-full flex-grow">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center bg-blue-600 rounded-full p-4 mb-6 shadow-lg">
              <ChartBarSquareIcon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Odkryj swój{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                matematyczny potencjał
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precyzyjny pomiar Twoich umiejętności w inteligentnym systemie diagnostycznym
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl mb-10 max-w-6xl mx-auto border border-gray-100 transform transition-all hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <SparklesIcon className="w-8 h-8 text-blue-600" />
                  Innowacyjny Barometr Maturalny
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Nasz inteligentny system analizuje Twoje odpowiedzi w czasie rzeczywistym,
                  porównując je z wynikami tysięcy zdających, aby dostarczyć precyzyjną prognozę
                  Twojego wyniku maturalnego.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <AcademicCapIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-gray-700">Personalizowane wskazówki poprawy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <ClockIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Test trwa tylko 25-35 minut</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <ChartBarIcon className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Statystyki porównawcze z innymi zdającymi</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white">
                <div className="text-center">
                  <TrophyIcon className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
                  <h4 className="text-xl font-semibold mb-4">Przewidywany wynik</h4>
                  <div className="text-5xl font-bold mb-4">78%</div>
                  <p className="text-blue-100">Na podstawie danych historycznych</p>
                  <div className="h-2 bg-blue-400 rounded-full mt-6 mx-auto max-w-xs" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-pulse-once">
            <Link href="/barometer">
              <div className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl font-semibold py-6 px-16 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="flex items-center gap-3">
                  <span>Rozpocznij diagnozę</span>
                  <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BarometerExamSelector;
