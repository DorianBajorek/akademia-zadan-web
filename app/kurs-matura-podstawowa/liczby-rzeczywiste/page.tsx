import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';

const RealNumbersCourse: React.FC = () => {
  const topicProgress = {
    "Działania na liczbach rzeczywistych": 90,
    "Obliczanie na potęg": 0,
    "Pierwiastki i działania na pierwiastkach": 0,
    "Obliczanie logarytmu": 0,
    "Przekształcanie wyrażeń": 0,
    "Zaokrąglanie i szacowanie": 0,
    "Notacja wykładnicza": 0,
    "Wartość bezwzględna": 0,
    "Porównywanie liczb": 0,
    "Oś liczbowa": 0,
    "Procenty": 0
  };

  const topics = [
    {
      title: "Działania na liczbach rzeczywistych",
      shortDesc: "Dodawanie, odejmowanie, mnożenie, dzielenie",
      icon: "➕"
    },
    {
      title: "Obliczanie na potęg",
      shortDesc: "Potęgi o wykładnikach całkowitych oraz wymiernych - podstawowe własności",
      icon: "🔢",
      slug: "/liczby-rzeczywiste/potegi"
    },
    {
      title: "Pierwiastki i działania na pierwiastkach",
      shortDesc: "Właściwości i operacje na pierwiastkach",
      icon: "√"
    },
    {
      title: "Obliczanie logarytmu",
      shortDesc: "Obliczanie podstawowych logarytmów",
      icon: "㏒",
      slug: "/liczby-rzeczywiste/logarytmy"
    },
    {
      title: "Przekształcanie wyrażeń",
      shortDesc: "Potęgowe, pierwiastkowe i logarytmiczne",
      icon: "⇄"
    },
    {
      title: "Zaokrąglanie i szacowanie",
      shortDesc: "Przybliżenia wartości liczbowych",
      icon: "≈"
    },
    {
      title: "Notacja wykładnicza",
      shortDesc: "Zapisywanie dużych i małych liczb",
      icon: "⨯10ⁿ"
    },
    {
      title: "Wartość bezwzględna",
      shortDesc: "Równania z wartością bezwzględną",
      icon: "|x|"
    },
    {
      title: "Porównywanie liczb",
      shortDesc: "Relacje między liczbami rzeczywistymi",
      icon: "⚖️"
    },
    {
      title: "Oś liczbowa",
      shortDesc: "Zaznaczanie liczb na osi",
      icon: "---"
    },
    {
      title: "Procenty",
      shortDesc: "Procent składany, zmiany cen",
      icon: "%"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Nav />
      
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1">
        <div className="flex items-center mb-8">
          <Link href="/kurs" className="mr-4 text-blue-600 hover:text-blue-800">
            ← Wróć do kursu
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Liczby rzeczywiste</h1>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">O dziale</h2>
          <p className="text-gray-700">
            Dział "Liczby rzeczywiste" to fundament matematyki. Opanowanie tych zagadnień jest kluczowe dla zrozumienia bardziej zaawansowanych tematów.
            W tym dziale poznasz podstawowe operacje, własności liczb i ich reprezentacje.
          </p>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Ogólny postęp w dziale:</span>
              <span>{
                Math.round(
                  Object.values(topicProgress).reduce((a, b) => a + b, 0) / 
                  Object.keys(topicProgress).length
                )
              }%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ 
                  width: `${Object.values(topicProgress).reduce((a, b) => a + b, 0) / Object.keys(topicProgress).length}%` 
                }}
              ></div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tematy w dziale</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <Link 
              key={index}
              href={`/kurs-matura-podstawowa/${topic.slug || topic.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition p-5 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-3 mt-1">{topic.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-1">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{topic.shortDesc}</p>
                  
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${topicProgress[topic.title as keyof typeof topicProgress]}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {topicProgress[topic.title as keyof typeof topicProgress]}% ukończono
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-800 mb-3">Jak efektywnie uczyć się tego działu?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Zacznij od podstawowych działań arytmetycznych</li>
            <li>Naucz się wzorów na potęgi i pierwiastki na pamięć</li>
            <li>Rozwiązuj zadania w kolejności od najłatwiejszych</li>
            <li>Wartość bezwzględna i logarytmy wymagają szczególnej uwagi</li>
            <li>Procenty ćwicz na praktycznych przykładach</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RealNumbersCourse;