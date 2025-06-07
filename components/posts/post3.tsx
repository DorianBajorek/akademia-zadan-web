"use client";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const PolynomialEquationsPost: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Działania na potęgach
        </h1>
        <div className="mb-6 flex justify-center">
        <img 
            src="/post-images/header-potegi-pierwiastki.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />
      </div>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">Wprowadzenie</h2>
          <p className="text-lg text-gray-700">
           Zadanie polegające na upraszczanie potęg i pierwiastków pojawiają się na wielu maturach. To zazwyczaj zadania zamknięte.
           Wymagają one podstawowych umiejętności działania na potęgach.
           </p>
           <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>Matura próbna grudzień 2024</li>
            <li>Matura poprawkowa sierpień 2024</li>
            <li>Matura dodatkowa czerwiec 2024</li>
            <li> Matura maj 2024</li>
            <li> Matura próbna grudzień 2023</li>
            <li> Matura poprawkowa sierpień 2023</li>
            <li> Matura maj 2023</li>
          </ol>
          Jest to klasyczny przykład "pewniaka maturalnego" na maturze z matematyki. Warto nauczyć się rozwiązywać ten typ zadania.
          Schemat rozwiązania jest powtarzany i pozwala zdobyć pewne punkty na maturze.

        </section>

        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">Przypomnienie wiadomości</h2>
        W tej sekcji przypomnimy podstawowe własności działania na pierwiastkach i potęgach. Warto zajrzeć 
        do karty wzorów i sprawdzić jakie tam można znaleźć wzory w tym zakresie.

        <img 
            src="/post-images/karta_maturalna_potegi.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />

        Korzystanie z tych wzorów przećwiczymy rozwiązując prawdziwe zadania maturalne.

          <h2 className="text-2xl font-bold text-blue-600">Grudzień 2024 - Zadanie 2 </h2>
          <img 
            src="/post-images/grudzien_2024_zadanie_2.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />   
        W tym zadaniu musimy zapisać daną liczbę jako liczbę o podstawie 5. W tym celu będziemy 
        kolejno zapisywać każde wyrażenie jako liczbę o podstawie 5 i wykonywać działania na nich. 
        Zaczniemy od <InlineMath math="\sqrt[5]{5}"/>. Zgodnie ze wzorem <InlineMath math="\sqrt[m]{a}=a^{\frac{1}{m}}"/>
        zapisujemy, że <InlineMath math="\sqrt[5]{5}=5^{\frac{1}{5}}"/>. Liczbę  <InlineMath math="\frac{1}{5}"/> przekształcamy 
        ze znanej własności   <InlineMath math="\frac{1}{a}=a^{-1}"/> czyli  <InlineMath math="\frac{1}{5}=5^{-1}"/>.
        Teraz możemy zapisać wyrażenie w nawiasie jako liczbę o podstawie 5 : 
        <div className="text-lg text-gray-700">
            <InlineMath math="\sqrt[5]{5} \cdot \frac{1}{5} =5^{\frac{1}{5}} \cdot 5^{-1} = 5^{\frac{1}{5} -1} = 5^{-\frac{4}{5}} " />
          </div>
        Skorzystaliśmy tutaj z własności <InlineMath math="a^{m} \cdot a^{n}=a^{m+n}"/>. Kolejną własnością, jaką wykorzstamy 
        jest <InlineMath math="(a^{n})^{m}=a^{n \cdot m}"/>. Po przekształceniu nawiasu wykonujemy ostatnie przekształcenie 
        <div className="text-lg text-gray-700">
            <InlineMath math=" (5^{-\frac{4}{5}})^{-5} = 5^{-\frac{4}{5} \cdot -5}=5^{-4} " />
          </div>
        Otrzymując wynik zaznaczamy poprawną odpowiedź C.
        <h2 className="text-2xl font-bold text-blue-600">Sierpień 2024 - Zadanie 2 </h2>
         <div className="mb-6 flex justify-center">
        <img 
            src="/post-images/sierpien_2024_zadanie_2.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />
      </div>
      
</section>

Rozwiązanie zadania rozpoczniemy od uproszczenia wyrażęnia w nawiasie. Skorzystamy z dobrze 
znanych kwadratów, czyli <InlineMath math="4=2^{2}"/> i <InlineMath math="25=5^{2}"/>. Pozwala 
nam to zapisać 

<div className="text-lg text-gray-700">
<InlineMath math="\frac{4}{25} = \frac{2^{2}}{5^{2}}=(\frac{2}{5})^{2}"/>.
          </div>
    Ostatnie przekształcenie wykonujemy korzystając z wcześniej użytej własności <InlineMath math="(a^{n})^{m}=a^{n \cdot m}"/> 
    <div className="text-lg text-gray-700">
<InlineMath math="((\frac{2}{5})^{2})^{-0,5} = (\frac{2}{5})^{2 \cdot (-0,5)} = (\frac{2}{5})^{-1}=\frac{5}{2}=2,5"/>.
          </div>
          Otrzymując wynik 2,5 zaznaczamy odpowiedź C.

          <h2 className="text-2xl font-bold text-blue-600">Czerwiec 2024 - Zadanie 1 </h2>
          <img 
            src="/post-images/czerwiec_2024_1.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />
          Rozwiązanie zadania rozpoczniemy od uproszczenia wyrażenia  <InlineMath math="( 2^{-1} \cdot 32^{\frac{3}{5}})"/>. Skorzystamy z własności potęgowania, aby uprościć obie części wyrażenia.

Najpierw uprościmy <InlineMath math="( 32^{\frac{3}{5}} )"/>. Wiemy, że <InlineMath math="( 32 = 2^5 )"/>, więc możemy zapisać:
<div className="text-lg text-gray-700">
<InlineMath math="32^{\frac{3}{5}} = (2^5)^{\frac{3}{5}} = 2^{5 \cdot \frac{3}{5}} = 2^3 = 8"/>
</div>
Teraz uprościmy <InlineMath math="( 2^{-1} )"/>:
<div className="text-lg text-gray-700">
<InlineMath math="2^{-1} = \frac{1}{2}"/>
</div>
Teraz pomnożymy obie uproszczone części:
<div className="text-lg text-gray-700">
<InlineMath math="2^{-1} \cdot 32^{\frac{3}{5}} = \frac{1}{2} \cdot 8 = 4"/>
</div>
Otrzymujemy wynik 4, więc zaznaczamy odpowiedź D.

<h2 className="text-2xl font-bold text-blue-600">Sierpień 2023 - Zadanie 5 </h2>
<img 
            src="/post-images/sierpien_2023_5.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />


Tym razem będziemy działali na podstawie 3. Wiemy, że <InlineMath math="81 = 9 \cdot 9 = 3^{2} \cdot 3^{2} = 3^{4}"/>. Zawsze zamieniamy liczby 
na najmniejszą podstawą którą możemy uzyskać, dlatego wybraliśmy 3. Dale przekształcamy ułamek zaczynając od mianownika 
<div className="text-lg text-gray-700">
<InlineMath math="(-\frac{1}{9})^{-2}=(-\frac{1}{3^{2}})^{-2}=(-3^{-2})^{-2}=3^{(-2) \cdot (-2)}=3^{4}"/>
</div>
Wykoszystaliśmy tutaj własność, że liczba ujemna podniesiona do kwadratu staje się liczbą dodatnią. Przekształcamy dalej nasze wyrażenie,
wykorzystując to co otrzymaliśmy 
<div className="text-lg text-gray-700">
<InlineMath math="\frac{3^{-1}}{(-\frac{1}{9})^{-2}} \cdot 81 = \frac{3^{-1}}{3^{4}} \cdot 3^{4} = 3^{-1-4}\cdot 3^{4}=3^{-5}\cdot 3^{4} =3^{-1}=\frac{1}{3}"/>
</div>
Zaznaczamy poprawną odpowiedź A.
      </main>
      </div>
  );
};

export default PolynomialEquationsPost;