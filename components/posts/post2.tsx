'use client';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const PolynomialEquationsPost: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Rozwiązywanie równań wielomianowych na maturze
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
            Zadanie polegające na rozwiązaniu równania wielomianowego to stały punkt matury w nowej
            formule. Za takie zadanie można zdobyć przeważnie 2 punkty czyli 4 punkty procentowe na
            maturze z matematyki. Zadanie tego typu pojawiło się na maturach:
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>Matura próbna grudzień 2024</li>
            <li>Matura poprawkowa sierpień 2024</li>
            <li>Matura dodatkowa sierpień 2024</li>
            <li> Matura maj 2024</li>
            <li> Matura próbna grudzień 2023</li>
            <li> Matura poprawkowa sierpień 2023</li>
            <li> Matura dodatkowa czerwiec 2023</li>
            <li> Matura maj 2023</li>
          </ol>
          Jest to klasyczny przykład "pewniaka maturalnego" na maturze z matematyki. Warto nauczyć
          się rozwiązywać ten typ zadania. Schemat rozwiązania jest powtarzany i pozwala zdobyć
          pewne punkty na maturze.
        </section>
        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">Przypomnienie wiadomości</h2>
          Do rozwiązania równania wielomianowego potrzebujemy kilku podstawowych wiedomości na temat
          rozwiązywania równań. Podstawą jest zasada, że jeśli iloczyn dwóch nawiasów jest równy
          zero, to któryś z nich musi być równy zero. Mając równanie
          <div className="text-lg text-gray-700">
            <InlineMath math="(x-1)(x-2)=0" />
          </div>
          rozwiązujemy jest przez przyrównaniu nawiasów do zera :
          <div className="text-lg text-gray-700">
            <InlineMath math="x-1=0" /> lub <InlineMath math="x-2=0" />
          </div>
          przenosimy liczby na drugą stronę i otrzymujemy rozwiązanie
          <div className="text-lg text-gray-700">
            <InlineMath math="x_{1}=1, x_{2}=2." />
          </div>
          Przyda nam się też umiejętność sprawnego rozwiązywania niepełnego równania kwadratowego.
          Jest to takie równanie, w którym jeden ze współczynników <InlineMath math="b,c" /> jest
          równy <InlineMath math="0" />. Takie równanie można rozwiązać klasycznie licząc{' '}
          <InlineMath math="\Delta" /> i dalej wyznaczając ze wzorów{' '}
          <InlineMath math="x_{1}, x_{2}" />. Warto jednak rozwiązywać takie równania szybko i
          sprawnie. Jeśli <InlineMath math="b=0" /> i <InlineMath math="c>0" /> to równanie może
          wyglądać tak
          <div className="text-lg text-gray-700">
            <InlineMath math="x^{2}+1=0" />
          </div>
          Takie równanie nie ma rozwiązania w liczbach rzeczywistych. Jeśli{' '}
          <InlineMath math="b=0" /> i <InlineMath math="c=0" /> to mamy równanie{' '}
          <InlineMath math=" x^{2}=0" /> które ma rozwiązanie <InlineMath math="x=0" />. Jeśli{' '}
          <InlineMath math="c<0" /> to nasze równanie może wyglądać tak
          <div className="text-lg text-gray-700">
            <InlineMath math="x^{2}-3=0" />
          </div>
          Do jego rozwiązania możemy zastosować wzór skróconego mnożenia{' '}
          <InlineMath math="a^{2}-b^{2}=(a-b)(a+b)" />. który przekształci lewą stroną równanie
          <div className="text-lg text-gray-700">
            <InlineMath math="(x-\sqrt{3})(x+\sqrt{3})=0" />
          </div>
          Teraz możemy odczytać <InlineMath math="x_{1}=\sqrt{3}" /> i{' '}
          <InlineMath math="x_{2}=-\sqrt{3}" /> korzystając z regułu iloczynu dwóch nawiasów. Jeśli
          współczynnik <InlineMath math="c=0" /> i <InlineMath math="b \neq 0" /> to równanie może
          wyglądać tak
          <div className="text-lg text-gray-700">
            <InlineMath math="x^{2}-2x=0" />
          </div>
          Wyciągając teraz <InlineMath math="x" /> przed nawias dostaniemy
          <div className="text-lg text-gray-700">
            <InlineMath math="x(x-2)=0" />
          </div>
          Odczytujemy dalej rozwiązania <InlineMath math="x=0" /> i <InlineMath math="x=2" />.
        </section>
        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">
            Analiza zadania i schemat rozwiązania
          </h2>
          Poddamy dokładniejszej analizie zadanie z majowej matury 2024. Wyglądało ono tak
          <div className="mb-6 flex justify-center">
            <img
              src="/post-images/matura_2024_maj.png"
              alt="Trójkąt prostokątny ABC"
              className="rounded-lg"
              width={1200}
              height={900}
            />
          </div>
          Za zadanie można było otrzymać 3 punkty czyli 6 punktów procentowych. Schemat rozwiązania
          jest następujący
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>
              Przenosimy wszystkie wyrazy na lewą stronę, tak aby po prawej stronie było{' '}
              <InlineMath math="0" />
            </li>
            <li>
              Wyciągamy <InlineMath math="x^{2}" /> przed nawias z pierwszych dwóch składników
            </li>
            <li>
              Wyciągamy stałą z dwóch ostatnich składników tak, żeby nawias powtórzył się w
              pierwszym nawiasem
            </li>
            <li>
              Wyciągamy nawias z dwóch składników i dostajemy równanie <InlineMath math="()()=0" />
            </li>
            <li>
              Przyrównujemy każdy z nawiasów do <InlineMath math="0" /> i rozwiązujemy równanie.
            </li>
          </ol>
          W tym zadaniu wszystkie składniki są po lewej stronie, dlatego pierwszy krok pomijamy. W
          drugim kroku wyciągamy <InlineMath math="x^{2}" /> przed nawias
          <div className="text-lg text-gray-700">
            <InlineMath math="x^{2}(x-2)-3x+6=0" />
          </div>
          W trzecim kroku wyciągamy <InlineMath math="-3" /> przed nawias. Dlaczegu akurat{' '}
          <InlineMath math="-3" />? Spowoduje to powstanie nawiasu <InlineMath math="(x-2)" /> który
          powstał z pierwszych dwóch składników równania.
          <div className="text-lg text-gray-700">
            <InlineMath math="x^{2}(x-2)-3(x-2)=0" />
          </div>
          W czwartym kroku wyciągamy wspólny nawias z dwóch składników
          <div className="text-lg text-gray-700">
            <InlineMath math="(x-2)(x^2-3)=0" />
          </div>
          W piątym kroku przyrównujemy nawiasy do zera
          <div className="text-lg text-gray-700">
            <InlineMath math="(x-2)=0 \rightarrow x_{1}=2" />
          </div>
          <div className="text-lg text-gray-700">
            <InlineMath math="x^2-3=0 \rightarrow (x-\sqrt{3})(x+\sqrt{3})=0  " />
          </div>
          Odczytujemy rozwiązanie
          <div className="text-lg text-gray-700">
            <InlineMath math=" x_{2}=\sqrt{3},  \ x_{3}=-\sqrt{3} " />
          </div>
          Odpowiedź: <InlineMath math=" x_{1}=2, x_{2}=\sqrt{3},  \ x_{3}=-\sqrt{3} " />
        </section>
        <h2 className="text-2xl font-bold text-blue-600">Matura poprawkowa sierpień 2024</h2>
        Zadanie numer 10 z czerwca 2024 brzmiało tak: Rozwiąż równanie{' '}
        <InlineMath math="4x^{3}-12x^{2}-x+3=0" />
        <img
          src="/post-images/matura_czerwiec_2024.png"
          alt="Trójkąt prostokątny ABC"
          className="rounded-lg"
          width={1200}
          height={900}
        />
        Zadanie rozwiązujemy zgodnie z krokami naszego schematu. Wszystkie wyraz są po lewej stronie
        równania. W drugim kroku wyciągamy <InlineMath math="4x^{2}" /> z dwóch pierwszych wyrazów
        <div className="text-lg text-gray-700">
          <InlineMath math="4x^{2}(x-3)-x+3=0" />
        </div>
        Wyciągneliśmy <InlineMath math="4x^{2}" /> przed nawias tak, aby w nawiasie zostało{' '}
        <InlineMath math="(x-3)" />. To pozwoli nam bezproblemowo zapisać drugi nawias. Gdybyśmy
        wyciągneli samo <InlineMath math="x^{2}" /> przy drugim nawiasie musielibyśmy wyciągnąć
        ułamek - pokażemy i to rozwiązanie. Zapisujemy drugi nawias i wyciągamy wspólny nawias
        <div className="text-lg text-gray-700">
          <InlineMath math="4x^{2}(x-3)-(x-3)=0 " />
        </div>
        <div className="text-lg text-gray-700">
          <InlineMath math="(x-3)(4x^{2}-1)=0 " />
        </div>
        Mamy równanie w postaci <InlineMath math="()()=0 " />, to chcieliśmy otrzymać. Pokażemy
        teraz drugi sposób wyciągania przed nawias
        <div className="text-lg text-gray-700">
          <InlineMath math="x^{2}(4x-12)-x+3=0 " />
        </div>
        <div className="text-lg text-gray-700">
          <InlineMath math="x^{2}(4x-12)-\frac{1}{4}(4x-12)=0 " />
        </div>
        Zauważmy, że <InlineMath math="\frac{1}{4}(4x-12)  = x-3" />. Mamy dalej
        <div className="text-lg text-gray-700">
          <InlineMath math="(4x-12)(x^{2}-\frac{1}{4})=0 " />
        </div>
        Możemy teraz wyciągnąć <InlineMath math="4" /> z pierwszego nawiasu i wciągnąć do drugiego
        <div className="text-lg text-gray-700">
          <InlineMath math="4(x-3)(x^{2}-\frac{1}{4})=0 " />
        </div>
        <div className="text-lg text-gray-700">
          <InlineMath math="(x-3)(4x^{2}-1)=0 " />
        </div>
        Otrzymujemy taką samą postać równania jak w pierwszym sposobie. Przechodzimy do następnego
        kroku i przyrównujemy nawiasy do <InlineMath math="0" />
        <div className="text-lg text-gray-700">
          <InlineMath math="x-3=0 \rightarrow x_{1}=3 " />
        </div>
        <div className="text-lg text-gray-700">
          <InlineMath math="4x^{2}-1=0  " />
        </div>
        <div className="text-lg text-gray-700">
          <InlineMath math="(2x-1)(2x+1)=0  " />
        </div>
        <div className="text-lg text-gray-700">
          <InlineMath math="2x-1=0 \rightarrow  2x=1 \rightarrow  x_{2}=\frac{1}{2}  " />
        </div>
        <div className="text-lg text-gray-700">
          <InlineMath math="2x+1=0 \rightarrow  2x=-1 \rightarrow  x_{3}=-\frac{1}{2}  " />
        </div>
        Rozwiązania równania to{' '}
        <InlineMath math="x_{1}=3,x_{2}=\frac{1}{2}, x_{3}=-\frac{1}{2}   " />
      </main>
    </div>
  );
};

export default PolynomialEquationsPost;
