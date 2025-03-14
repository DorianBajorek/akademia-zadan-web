import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution169 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ile jest wszystkich liczb naturalnych czterocyfrowych mniejszych od 2018 i podzielnych przez 5?
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="402" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="403" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="203" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="204" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie zakresu liczb</h2>
      <p className="mb-2">
        Szukamy liczb czterocyfrowych mniejszych od 2018 i podzielnych przez 5. Najmniejsza liczba czterocyfrowa to 1000, a największa mniejsza od 2018 to 2015.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Znalezienie najmniejszej i największej liczby podzielnej przez 5</h2>
      <p className="mb-2">
        Najmniejsza liczba czterocyfrowa podzielna przez 5 to 1000, a największa mniejsza od 2018 to 2015.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie liczby wyrazów ciągu arytmetycznego</h2>
      <p className="mb-2">
        Liczby podzielne przez 5 tworzą ciąg arytmetyczny o różnicy 5. Liczbę wyrazów tego ciągu obliczamy ze wzoru (przekształcony wzór ogólny ciągu arytmetycznego):
      </p>
      <BlockMath math="n = \frac{a_n - a_1}{r} + 1" />
      <p className="mb-2">
        Gdzie <InlineMath math="a_n = 2015" />, <InlineMath math="a_1 = 1000" />, a <InlineMath math="r = 5" />. Podstawiamy wartości:
      </p>
      <BlockMath math="n = \frac{2015 - 1000}{5} + 1 = \frac{1015}{5} + 1 = 203 + 1 = 204" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba liczb naturalnych czterocyfrowych mniejszych od 2018 i podzielnych przez 5 wynosi <InlineMath math="204" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution169;