import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution30 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wszystkich liczb naturalnych pięciocyfrowych, w których zapisie dziesiętnym występują tylko cyfry <InlineMath math="0, 5, 7" /> (np. 57075, 55555), jest:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="5^3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="2 \cdot 4^2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="2 \cdot 3^4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="3^5" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza cyfr</h2>
      <p className="mb-2">
        Liczba pięciocyfrowa ma postać <InlineMath math="abcde" />, gdzie:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><InlineMath math="a" /> to pierwsza cyfra (nie może być zerem).</li>
        <li><InlineMath math="b, c, d, e" /> to pozostałe cyfry (mogą być zerem).</li>
      </ul>
      <p className="mb-2">
        Dozwolone cyfry to <InlineMath math="0, 5, 7" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wybór cyfr</h2>
      <p className="mb-2">
        Zasada mnożenia mówi, że liczbę możliwości obliczamy, mnożąc liczbę opcji dla każdej cyfry:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Dla <InlineMath math="a" /> (pierwsza cyfra): nie może być zerem, więc do wyboru są cyfry <InlineMath math="5, 7" />. Liczba opcji: <InlineMath math="2" />.</li>
        <li>Dla <InlineMath math="b, c, d, e" />: każda z tych cyfr może być <InlineMath math="0, 5, 7" />. Liczba opcji dla każdej z nich: <InlineMath math="3" />.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie liczby możliwości</h2>
      <p className="mb-2">
        Korzystając z zasady mnożenia, liczba wszystkich możliwych liczb pięciocyfrowych wynosi:
      </p>
      <BlockMath math="2 \cdot 3 \cdot 3 \cdot 3 \cdot 3 = 2 \cdot 3^4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba wszystkich możliwych liczb pięciocyfrowych to <InlineMath math="2 \cdot 3^4" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution30;