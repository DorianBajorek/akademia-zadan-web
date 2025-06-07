"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from "react";
import { getFieldsProgress } from "@/service";
import { useAuth } from "../UserData";
import { motion } from "framer-motion";

const MainCourse: React.FC = () => {
  const courseProgress = {
    "liczby-rzeczywiste": 60.5,
    "wyrazenia-algebraiczne": 0,
    "rownania-i-nierownosci-liniowe": 0,
    "uklady-rownan": 0,
    "funkcje-liniowe": 0,
    "funkcje-kwadratowe": 0,
    "ciagi": 0,
    "trygonometria": 0,
    "planimetria": 0,
    "geometria-analityczna": 0,
    "stereometria": 0,
    "kombinatoryka": 0,
    "prawdopodobiensto-statystyka": 0
  };  
 
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
  
   const {token} = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFieldsProgress(token);
        if (data) {
          // Obsługa danych
        }
      } catch (error) {
        console.error("Error fetching topics progress", error);
      }
    };
    if(token) {
      fetchData();
    }
  }, [token]);

  // Animacje
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Kurs Maturalny z Matematyki</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Kompleksowe przygotowanie do matury z matematyki na poziomie podstawowym. Przejdź przez wszystkie działy krok po kroku!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 bg-blue-50 p-8 rounded-xl border border-blue-100"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Jak korzystać z kursu?</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Rozwiązuj zadania w kolejności lub wybieraj działy, które wymagają najwięcej pracy</li>
            <li>Śledź swoje postępy w każdym dziale</li>
            <li>Wracaj do trudnych zagadnień dzięki systemowi powtórek</li>
            <li>Korzystaj z podpowiedzi i szczegółowych rozwiązań</li>
          </ul>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Wybierz dział do nauki
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
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
                    <span>{courseProgress[course.id as keyof typeof courseProgress]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: `${courseProgress[course.id as keyof typeof courseProgress]}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
                    ></motion.div>
                  </div>
                </div>
                
                <Link 
                  href={`/kurs-matura-podstawowa/${course.slug}`}
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Rozpocznij naukę
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default MainCourse;