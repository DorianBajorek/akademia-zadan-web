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
        Przekształcenia trygonometryczne
        </h1>
        <div className="mb-6 flex justify-center">
        <img 
            src="/post-images/header-rownania-wielomianowe.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />
      </div>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">Wprowadzenie</h2>
          <p className="text-lg text-gray-700">
           Zadanie dotyczące przekształcenia wyrażeń 
           trygonometrycznych jest często występującym zadaniem 
           na maturze. W ostatnim czasie pojawiło się na maturach 

           </p>
           <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>Matura próbna grudzień 2024</li>
            <li>Matura poprawkowa sierpień 2024</li>
            <li>Matura dodatkowa czerwiec 2024</li>
            <li> Matura maj 2024</li>
            <li> Matura próbna grudzień 2023</li>
            <li> Matura poprawkowa sierpień 2023</li>
            <li> Matura dodatkowa czerwiec 2023</li>
            <li> Matura maj 2023</li>
            <li>Matura próbna grudzień 2022</li>
            <li>Matura próbna wrzesień 2022</li>
          </ol>
          Jest to klasyczny przykład "pewniaka maturalnego" na maturze z matematyki. Warto nauczyć się rozwiązywać ten typ zadania.
          Schemat rozwiązania jest powtarzany i pozwala zdobyć pewne punkty na maturze.
          Jeden punkt na maturze to dwa punkty procentowe. 

        </section>

<h2 className="text-2xl font-bold text-blue-600">Matura próbna wrzesień 2022</h2>
<img 
            src="/post-images/wrzesien_2022_18.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />
W tym zadaniu narzuca się wzór <InlineMath math="(a-b)(a+b)=a^{2}-b^{2}"/> dla <InlineMath math="a=1"/> i  <InlineMath math="b=\cos{20^{\circ}}"/>.
Po jego zastosowaniu dostajemy 
<div className="text-lg text-gray-700">
            <InlineMath math="(1-\cos{20^{\circ}})(1+\cos{20^{\circ}})=1-\cos^{2}{20^{\circ}}" />
          </div>

Nasze wyrażenie z treści zadania wygląda teraz tak 
<div className="text-lg text-gray-700">
            <InlineMath math="(1-\cos{20^{\circ}})(1+\cos{20^{\circ}})-\sin^{2}{20^{\circ}}=1-\cos^{2}{20^{\circ}} - \sin^{2}{20^{\circ}}" />
          </div>
Widzimy tutaj, że mamym kwadraty sinusa i kosinusa, możemy więc zastosować dobrze znaną jedynkę trygonometryczną 
<div className="text-lg text-gray-700">
            <InlineMath math="1-\cos^{2}{20^{\circ}} - \sin^{2}{20^{\circ}}=1-(\cos^{2}{20^{\circ}} + \sin^{2}{20^{\circ}})=1-1=0" />
          </div>
          Otrzymaliśmy 0 i zaznaczamy odpowiedź B.
Jest to zadanie zamknięte, możemy je spróbować rozwiązać trochę na skróty nie wykonując przekształceń. Taka technika jest możliwa 
tylko dla zadań zamkniętych i nie zawsze jest skuteczna. Z tablic odczytujemy, że <InlineMath math="\cos{20^{\circ}}=0,9397"/> oraz 
<InlineMath math="\cos{20^{\circ}}=0,3420"/>. Obliczamy dalej z użyciem kalkulatora
<div className="text-lg text-gray-700">
            <InlineMath math="1 - \cos{20^{\circ}} = 0,0603" />
          </div>
          <div className="text-lg text-gray-700">
            <InlineMath math="1 + \cos{20^{\circ}} = 1,9397" />
          </div>
          <div className="text-lg text-gray-700">
          <InlineMath math="(1-\cos{20^{\circ}})(1+\cos{20^{\circ}}) = 0,0603 \cdot 1,9397  = 0,1170" />
          </div>
          <div className="text-lg text-gray-700">
          <InlineMath math="\sin^{2}{20^{\circ}} = 0,3420 \cdot 0,3420 =0.1170 " />
          </div>
          <div className="text-lg text-gray-700">
          <InlineMath math="(1-\cos{20^{\circ}})(1+\cos{20^{\circ}}) - \sin^{2}{20^{\circ}} =0,1170 - 0,1170=0 " />
          </div>
Zaznaczamy odpowiedź B.
<h2 className="text-2xl font-bold text-blue-600">Matura próbna grudzień 2022</h2>
<img 
            src="/post-images/grudzien_2022_18.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />

W równaniu po lewej stronie mamy sumę dwóch ułamków. W mianownikach mamy funkcje trygonometryczne w kwadracie - prawdopodobnie 
będziemy mogli skorzystać z jedynki trygonometrycznej. Przekształcmy lewą stronę równania 
<div className="text-lg text-gray-700">
          <InlineMath math="\frac{1}{\sin^{2}{\alpha}}+\frac{1}{\cos^{2}{\alpha}}=
          \frac{cos^{2}{\alpha}}{cos^{2}{\alpha} \cdot \sin^{2}{\alpha}}+\frac{\sin^{2}{\alpha}}{\sin^{2}{\alpha} \cdot \cos^{2}{\alpha}}=
          \frac{\cos^{2}{\alpha} +\sin^{2}{\alpha} }{\sin^{2}{\alpha} \cdot \cos^{2}{\alpha}}=\frac{1}{\sin^{2}{\alpha} \cdot \cos^{2}{\alpha}}" />
</div>
Podczas przekształcania lewej strony równania sprowadziliśmy ułamki do wspólnego mianownika i zastosowaliśmy jedynkę trygonometryczną.
W zadaniu pytają na o wartość wyrażenia <InlineMath math="\sin{\alpha}\cos{\alpha}" />. Szukana wartość znajduje się w naszym mianowniku,
tylko podniesiona do kwadratu. Wyznaczmy ją z naszego równania 
<div className="text-lg text-gray-700">
<InlineMath math="\frac{1}{\sin^{2}{\alpha} \cdot \cos^{2}{\alpha}} = \frac{64}{9}"/>
  </div>
  Po wymnożeniu na krzyż
  <div className="text-lg text-gray-700">
<InlineMath math=" 9 = 64 \cdot\sin^{2}{\alpha} \cdot \cos^{2}{\alpha} "/>
  </div>
  <div className="text-lg text-gray-700">
<InlineMath math="\sin^{2}{\alpha} \cdot \cos^{2}{\alpha} = \frac{9}{64} "/>
  </div>
  Zapisujemy to z użyciem kwadratów
  <div className="text-lg text-gray-700">
<InlineMath math="(\sin{\alpha} \cdot \cos{\alpha})^{2} = (\frac{3}{8})^{2} "/>
  </div>

  W treści zadania została podana informacje, że kąt <InlineMath math="\alpha"/> jest ostry, co oznacza, że 
    jego sinus i kosinus są dodatnie. To oznacz, że ich iloczyn również jest dodatni. Wiedząc to, obliczamy dalej 
    <div className="text-lg text-gray-700">
<InlineMath math="\sin{\alpha} \cdot \cos{\alpha} = \frac{3}{8}"/>
  </div><InlineMath math="\alpha"/>
  Wynik ujemny odrzuciliśmy, uzasadniając wcześniej, że dla kąta ostrego <InlineMath math="\alpha"/> wyrażenie 
  <InlineMath math="\sin{\alpha} \cdot \cos{\alpha}"/> jest dodatnie. Zaznaczamy odpowiedź B.
  <h2 className="text-2xl font-bold text-blue-600">Matura dodatkowa czerwiec 2023</h2>
<img 
            src="/post-images/czerwiec_2023_19.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />
      W każdym składniku wyrażenia które musimy przekształcić znajduje się czynnik 
      <InlineMath math="\cos{\alpha}"/> spróbujmy więc go wyciągnąc przed nawias.
      <div className="text-lg text-gray-700">
<InlineMath math="cos{\alpha}-cos{\alpha} \cdot \sin^{2}{\alpha}= 
 \cos{\alpha}(1-\sin^{2}{\alpha})   "/>
  </div>
Wyrażenie <InlineMath math="1-\sin^{2}{\alpha}" /> możemy wyznaczyć z jedynki trygonometrycznej 
<div className="text-lg text-gray-700">
<InlineMath math=" \sin^{2}{\alpha}+\cos^{2}{\alpha}=1 \rightarrow cos^{2}{\alpha}=1-\sin^{2}{\alpha} "/>
  </div>
  Wracąj do wyrażenia z zadania 
  <div className="text-lg text-gray-700">
  <InlineMath math=" \cos{\alpha}(1-\sin^{2}{\alpha}) = \cos{\alpha} \cdot \cos^{2}{\alpha} = \cos^{3}{\alpha}"/>
  </div>
  Zaznaczamy odpowiedź A.

  <h2 className="text-2xl font-bold text-blue-600">Matura maj 2023</h2>
  <img 
            src="/post-images/maj_2023_19.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={1200} 
            height={900}  
        />


<div className="text-lg text-gray-700">
  <p>W wyrażeniu <InlineMath math="\sin^4 \alpha + \sin^2 \alpha \cdot \cos^2 \alpha"/> możemy wyciągnąć wspólny czynnik <InlineMath math="\sin^{2}{\alpha}"/> przed nawias:</p>
  <InlineMath math="\sin^4 \alpha + \sin^2 \alpha \cdot \cos^2 \alpha = \sin^2 \alpha (\sin^2 \alpha + \cos^2 \alpha)" />
  
  <p>Następnie korzystamy z jedynki trygonometrycznej:</p>
  <InlineMath math="\sin^2 \alpha + \cos^2 \alpha = 1" />
  
  <p>Wstawiając to do poprzedniego wyrażenia, otrzymujemy:</p>
  <InlineMath math="\sin^2 \alpha (\sin^2 \alpha + \cos^2 \alpha) = \sin^2 \alpha \cdot 1 = \sin^2 \alpha" />
  
  <p>Zatem wyrażenie <InlineMath math="\sin^4 \alpha + \sin^2 \alpha \cdot \cos^2 \alpha"/> jest równe</p>
  <div className="text-lg text-gray-700">
  <InlineMath math="\sin^4 \alpha + \sin^2 \alpha \cdot \cos^2 \alpha = \sin^{2}{\alpha}"/>
  </div>
  <p>Prawidłowa odpowiedź to <strong>A. </strong>.</p>
</div>
      </main>
    </div>
  );
};

export default PolynomialEquationsPost;