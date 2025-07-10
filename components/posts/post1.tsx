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
            src="/post-images/rownaniawymierne.png"
            alt="Trójkąt prostokątny ABC"
            className="rounded-lg"
            width={1200}
            height={900}
          />
        </div>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">Wprowadzenie</h2>
          <p className="text-lg text-gray-700">
            Równania wielomianowe to stały punkt na maturze, więc warto nauczyć się je rozwiązywać
            sprawnie i bez stresu. W tym wpisie pokażę Ci, jak krok po kroku radzić sobie z
            równaniami wymiernymi, czyli takimi, gdzie w liczniku i mianowniku występują wielomiany.
            Tego typu zadania pojawiają się niemal co roku, często jako pytania ABCD, za które
            możesz łatwo zdobyć cenny punkt. To raczej te prostsze przykłady, więc ich opanowanie
            może znacząco podnieść Twój wynik. Wystarczy znajomość podstawowych działań na ułamkach
            algebraicznych i równań wielomianowych – nic strasznego! Jeśli chcesz dobrze wypaść na
            maturze, koniecznie je przećwicz.
          </p>
        </section>

        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">
            Kroki rozwiązywania równań wymiernych
          </h2>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>
              <strong>Wyznacz dziedzinę:</strong> Znajdź wartości, które zerują mianownik i wyklucz
              je z dziedziny.
            </li>
            <li>
              <strong>Rozwiąż równanie:</strong> Przyrównaj licznik do zera i rozwiąż otrzymane
              równanie.
            </li>
            <li>
              <strong>Sprawdź rozwiązania:</strong> Upewnij się, że rozwiązania należą do dziedziny.
            </li>
          </ol>
        </section>

        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">Co to jest dziedzina?</h2>
          <p className="text-lg text-gray-700">
            Dziedzina równania to zbiór wszystkich liczb rzeczywistych, dla których równanie ma
            sens. W przypadku równań wymiernych, dziedzina wyklucza wartości, które zerują
            mianownik, ponieważ dzielenie przez zero jest niedozwolone.
          </p>
        </section>

        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">Jak rozwiązywać równania wymierne?</h2>
          <p className="text-lg text-gray-700">
            Rozwiązywanie równań wymiernych polega na usunięciu mianownika poprzez pomnożenie obu
            stron równania przez wspólny mianownik. Następnie otrzymujemy równanie wielomianowe,
            które rozwiązujemy standardowymi metodami, takimi jak grupowanie, wyłączanie wspólnego
            czynnika lub stosowanie wzorów kwadratowych.
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>
              <strong>Usuń mianownik:</strong> Pomnóż obie strony równania przez wspólny mianownik,
              aby pozbyć się ułamków.
            </li>
            <li>
              <strong>Rozwiąż równanie wielomianowe:</strong> Powstałe równanie sprowadza się do
              postaci wielomianowej, którą rozwiązujemy, stosując odpowiednie metody (np. rozkład na
              czynniki lub wzory kwadratowe). Często okazuje się, że po samym przemnożeniu stronami
              nasze równanie jest w postaci iloczynowej. Dzięki temu wytarczy każdy nawias
              przyrównać do zera. Na podanych niżej przykładach omówimy sposób rozwiązywania takich
              zadań.
            </li>
          </ol>
        </section>

        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">Zadanie (Matura 2024 CKE)</h2>
          <p className="text-lg text-gray-700">Rozważmy równanie:</p>
          <div className="text-lg text-gray-700">
            <InlineMath math="\frac{x + 1}{(x + 2)(x - 3)} = 0" />
          </div>
          <p className="text-lg text-gray-700">
            <strong>Krok 1: Wyznacz dziedzinę</strong>
            <br />
            Mianownik nie może być równy zero, więc:
            <InlineMath math="  (x + 2)(x - 3) \neq 0" />
            Stąd:
            <InlineMath math="x \neq -2 \text{ oraz } x \neq 3" />
          </p>
          <p className="text-lg text-gray-700">
            <strong>Krok 2: Rozwiąż równanie</strong>
            <br />
            Przyrównaj licznik do zera:
            <InlineMath math="x + 1 = 0" />
            Rozwiązanie:
            <InlineMath math="x = -1" />
          </p>
          <p className="text-lg text-gray-700">
            <strong>Krok 3: Sprawdź rozwiązanie</strong>
            <br />
            Sprawdzamy, czy <InlineMath math="x = -1" /> należy do dziedziny. Ponieważ{' '}
            <InlineMath math="-1 \neq -2 \text{ oraz } -1 \neq 3" />, rozwiązanie jest poprawne.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Odpowiedź:</strong> Równanie ma dokładnie jedno rozwiązanie:{' '}
            <InlineMath math="-1" />.
          </p>
        </section>

        <section className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold text-blue-600">Film instruktażowy</h2>
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/cknQ13s2Ckw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-blue-600">Zadanie 6</h2>
          <div className="text-lg text-gray-700">Rozważmy równanie:</div>
          <div className="text-lg text-gray-700">
            <InlineMath math="\frac{x(x+5)(2-x)}{2x+4} = 0" />
          </div>
          <p className="text-lg text-gray-700">
            <strong>Krok 1: Wyznacz dziedzinę</strong>
            <br />
            Mianownik nie może być równy zero, więc:
            <InlineMath math="2x + 4 \neq 0" />
            Rozwiązujemy:
            <InlineMath math="2x + 4 = 0 \Rightarrow x = -2" />
            Stąd dziedzina to wszystkie liczby rzeczywiste oprócz <InlineMath math="x = -2" />.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Krok 2: Rozwiąż równanie</strong>
            <br />
            Przyrównaj licznik do zera:
            <InlineMath math="x(x+5)(2-x) = 0" />
            Rozwiązujemy:
            <InlineMath math="x = 0 \quad \text{lub} \quad x + 5 = 0 \quad \text{lub} \quad 2 - x = 0" />
            Stąd:
            <InlineMath math="x = 0 \quad \text{lub} \quad x = -5 \quad \text{lub} \quad x = 2" />
          </p>
          <div className="text-lg text-gray-700">
            <strong>Krok 3: Sprawdź rozwiązania</strong>
            <br />
            Sprawdzamy, czy rozwiązania należą do dziedziny:
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <InlineMath math="x = 0" /> należy do dziedziny.
              </li>
              <li>
                <InlineMath math="x = -5" /> należy do dziedziny.
              </li>
              <li>
                <InlineMath math="x = 2" /> należy do dziedziny.
              </li>
              <li>
                <InlineMath math="x = -2" /> nie należy do dziedziny.
              </li>
            </ul>
          </div>
          <p className="text-lg text-gray-700">
            <strong>Odpowiedź:</strong> Równanie ma dokładnie trzy rozwiązania:{' '}
            <InlineMath math="-5" />, <InlineMath math="0" /> oraz <InlineMath math="2" />.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Poprawna odpowiedź:</strong> C. trzy rozwiązania: <InlineMath math="-5" />,{' '}
            <InlineMath math="0" /> oraz <InlineMath math="2" />.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PolynomialEquationsPost;
