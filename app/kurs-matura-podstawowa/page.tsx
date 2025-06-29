"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { getFieldsProgress } from "@/service";
import { useAuth } from "../UserData";
import { motion } from "framer-motion";

const MainCourse: React.FC = () => {
  const { token } = useAuth();
  const [progressData, setProgressData] = useState<Record<string, number>>({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getFieldsProgress(token);
          if (data) {
            console.log("Fetched topics progress:", data);
            setProgressData(data);
          }
        } catch (error) {
          console.error("Error fetching topics progress", error);
        }
      };
      if (token) {
        fetchData();
      }
    }, [token]);

  const courses = [
    {
      id: "liczby-rzeczywiste",
      title: "Liczby rzeczywiste",
      description: "Poznaj podstawy matematyki - działania na liczbach, przedziały, wartość bezwzględną i pierwiastki.",
      image: "/fieldCovers/liczbyRzeczywiste.png",
      slug: "/liczby-rzeczywiste"
    },
    {
      id: "wyrazenia-algebraiczne",
      title: "Wyrażenia algebraiczne",
      description: "Naucz się przekształcać wyrażenia algebraiczne, wzory skróconego mnożenia i działań na potęgach.",
      image: "/fieldCovers/wyrazeniaAlgebraiczne.png",
      slug: "/wyrazenia-algebraiczne"
    },
    {
      id: "rownania-i-nierownosci-liniowe",
      title: "Równania i nierówności liniowe",
      description: "Rozwiązuj równania i nierówności liniowe - podstawa każdego maturzysty.",
      image: "/fieldCovers/rownaniaNierownosci.png",
      slug: "/rownania-i-nierownosci-liniowe"
    },
    {
      id: "uklady-rownan",
      title: "Układy równań",
      description: "Poznaj sprytną metodę na układy równań w zadaniach zamkniętnych.",
      image: "/fieldCovers/uklady.png",
      slug: "/uklady-rownan"
    },
    {
      id: "funkcje",
      title: "Funkcje",
      description: "Badaj własności funkcji. Dziedzina, zbiór wartości oraz miejsca zerowe.",
      image: "/fieldCovers/funkcje.png",
      slug: "/funkcje"
    },
    {
      id: "funkcje-liniowe",
      title: "Funkcje liniowe",
      description: "Badaj własności funkcji liniowych. Wyznaczanie miejsc zerowych.",
      image: "/fieldCovers/funkcjaLiniowa.png",
      slug: "/funkcje-liniowe"
    },
    {
      id: "funkcje-kwadratowe",
      title: "Funkcje kwadratowe",
      description: "Rozwiązywanie równań kwadratowych, własności funkcji, nierówności oraz wierzchołek.",
      image: "/fieldCovers/funkcjaKwadratowa.png",
      slug: "/funkcje-kwadratowe"
    },
    {
      id: "ciagi",
      title: "Ciągi",
      description: "Poznaj ciągi arytmetyczne i geometryczne, ich monotoniczność oraz sumy wyrazów.",
      image: "/fieldCovers/ciagi.png",
      slug: "/ciagi"
    },
    {
      id: "trygonometria",
      title: "Trygonometria",
      description: "Funkcje trygonometryczne, podstawa każdego maturzysty.",
      image: "/fieldCovers/trygonometria.png",
      slug: "/trygonometria"
    },
    {
      id: "planimetria",
      title: "Planimetria",
      description: "Geometria płaska - własności figur, twierdzenie Pitagorasa, podobieństwo i pola figur.",
      image: "/fieldCovers/planimetria.png",
      slug: "/planimetria"
    },
    {
      id: "geometria-analityczna",
      title: "Geometria analityczna",
      description: "Proste i figury w układzie współrzędne. Środki prostych - to co maturzsyta musi znać.",
      image: "/fieldCovers/geometria-analityczna.png",
      slug: "/geometria-analityczna"
    },
    {
      id: "stereometria",
      title: "Stereometria",
      description: "Geometria przestrzenna - figury przestrzenne, objętości i pola powierzchni.",
      image: "/fieldCovers/stereometria.png",
      slug: "/stereometria"
    },
    {
      id: "kombinatoryka-prawdopodobienstwo-statystyka",
      title: "Kombinatoryka, Prawdopodobieństwo i elementy statystyki",
      description: "Obliczenia kombinatoryczne, prawdopodobieństwo zdarzeń losowych i podstawy statystyki. Zadania z życia codziennego.",
      image: "/fieldCovers/prawdop.png",
      slug: "/kombinatoryka-prawdopodobienstwo-statystyka"
    },
  ];

   const exams = [
    {
      id: "matura-maj-2025-nowy",
      title: "Egzamin maturalny 2025",
      description: "Spróbuj swoich sił w próbnym najnowszym arkuszu maturalnym.",
      image: "/fieldCovers/egzaminMaj2025.png",
      slug: "/matura-maj-2025-nowy"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="max-w-7xl mx-auto px-6 py-12 flex-1">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Kompletny kurs matury podstawowej z matematyki
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wybierz dział, który Cię interesuje i rozpocznij naukę. Śledź swoje postępy
            i systematycznie przygotowuj się do egzaminu.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => {
            const progress = progressData[course.id] ?? 0;

            return (
              <Link 
                href={`/kurs-matura-podstawowa/${course.slug}`} 
                key={course.id}
                className="block"
              >
                <motion.div 
                  variants={item}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full"
                >
                  <div className="h-48 relative">
                    <Image 
                      src={course.image} 
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-70"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {course.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Postęp:</span>
                        <span>{progress.toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
                        ></motion.div>
                      </div>
                    </div>

                    <div className="text-center text-blue-600 font-medium">Rozpocznij naukę</div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
        <div className="my-16 border-t border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 text-center mt-10 mb-6">
            Egzamin maturalny
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {exams.map((exam, index) => {
              const progress = progressData[exam.id] ?? 0;

              return (
                <Link 
                  href={`/kurs-matura-podstawowa${exam.slug}`} 
                  key={exam.id}
                  className="block"
                >
                  <motion.div 
                    variants={item}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full"
                  >
                    <div className="h-48 relative">
                      <Image 
                        src={exam.image} 
                        alt={exam.title}
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-70"></div>
                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                        {exam.title}
                      </h3>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{exam.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Postęp:</span>
                          <span>{progress.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <motion.div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
                          ></motion.div>
                        </div>
                      </div>

                      <div className="text-center text-blue-600 font-medium">Rozpocznij egzamin</div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainCourse;
