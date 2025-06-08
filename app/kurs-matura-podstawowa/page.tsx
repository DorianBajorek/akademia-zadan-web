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
      description: "Poznaj metody rozwiązywania układów równań - podstawianie, przeciwnych współczynników i graficzną.",
      image: "/fieldCovers/uklady.png",
      slug: "/uklady-rownan"
    },
    {
      id: "funkcje",
      title: "Funkcje",
      description: "Badaj własności funkcji. Dziedzina, zbiór wartości oraz miejsca zerowe",
      image: "/fieldCovers/funkcje.png",
      slug: "/funkcje"
    },
    {
      id: "funkcje-liniowe",
      title: "Funkcje liniowe",
      description: "Badaj własności funkcji liniowych. Wyznaczanie miejsc zerowych",
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
      image: "/problemImages/chapter1.png",
      slug: "/ciagi"
    },
    {
      id: "trygonometria",
      title: "Trygonometria",
      description: "Funkcje trygonometryczne, tożsamości trygonometryczne i równania trygonometryczne.",
      image: "/problemImages/chapter1.png",
      slug: "/trygonometria"
    },
    {
      id: "planimetria",
      title: "Planimetria",
      description: "Geometria płaska - własności figur, twierdzenie Pitagorasa, podobieństwo i pola figur.",
      image: "/problemImages/chapter1.png",
      slug: "/planimetria"
    },
    {
      id: "geometria-analityczna",
      title: "Geometria analityczna",
      description: "Równania prostych, odległość punktów, wektory i figury geometryczne na płaszczyźnie kartezjańskiej.",
      image: "/problemImages/chapter1.png",
      slug: "/geometria-analityczna"
    },
    {
      id: "stereometria",
      title: "Stereometria",
      description: "Geometria przestrzenna - graniastosłupy, ostrosłupy, walce, stożki, kule i ich objętości.",
      image: "/problemImages/chapter1.png",
      slug: "/stereometria"
    },
    {
      id: "kombinatoryka",
      title: "Kombinatoryka",
      description: "Dowiedz się, jak liczyć permutacje, wariacje i kombinacje. Kluczowy dział rachunku prawdopodobieństwa.",
      image: "/problemImages/chapter1.png",
      slug: "/kombinatoryka"
    },
    {
      id: "prawdopodobiensto-statystyka",
      title: "Prawdopodobieństwo i Statystyka",
      description: "Obliczanie prawdopodobieństwa, średniej, mediany, wariancji i odchylenia standardowego.",
      image: "/problemImages/chapter1.png",
      slug: "/prawdopodobiensto-statystyka"
    }
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
        {/* ...intro section and how-to section remain unchanged... */}

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
      </main>

      <Footer />
    </div>
  );
};

export default MainCourse;
