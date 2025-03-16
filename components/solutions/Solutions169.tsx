import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution169 = () => {
  const minNumber = 1000;
  const maxNumber = 2015;
  const difference = 5;

  const calculateNumberOfTerms = (a1, an, r) => {
    return (an - a1) / r + 1;
  };

  const numberOfTerms = calculateNumberOfTerms(minNumber, maxNumber, difference);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ile jest wszystkich liczb naturalnych czterocyfrowych mniejszych od 2018 i podzielnych przez 5?
      </div>

      <div className="space-y-3 mb-6">
        {["402", "403", "203", "204"].map((answer, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold">
              <strong>ODPOWIEDŹ {String.fromCharCode(65 + index)}:</strong> <InlineMath math={answer} />
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie zakresu liczb</h2>
      <p className="mb-2">
        Szukamy liczb czterocyfrowych mniejszych od 2018 i podzielnych przez 5. Najmniejsza taka liczba to <InlineMath math="1000" />, a największa to <InlineMath math="2015" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Przekształcenie wzoru na liczbę wyrazów ciągu arytmetycznego</h2>
      <p className="mb-2">
        Wzór ogólny na <InlineMath math="n" />-ty wyraz ciągu arytmetycznego to:
      </p>
      <BlockMath math="a_n = a_1 + (n - 1) \cdot r" />
      <p className="mb-2">
        Gdzie:
        <ul className="list-disc pl-6">
          <li><InlineMath math="a_n" /> — ostatni wyraz ciągu,</li>
          <li><InlineMath math="a_1" /> — pierwszy wyraz ciągu,</li>
          <li><InlineMath math="r" /> — różnica ciągu,</li>
          <li><InlineMath math="n" /> — liczba wyrazów.</li>
        </ul>
      </p>
      <p className="mb-2">
        Przekształcamy ten wzór, aby wyznaczyć <InlineMath math="n" />:
      </p>
      <BlockMath math="a_n = a_1 + (n - 1) \cdot r" />
      <BlockMath math="a_n - a_1 = (n - 1) \cdot r" />
      <BlockMath math="\frac{a_n - a_1}{r} = n - 1" />
      <BlockMath math="n = \frac{a_n - a_1}{r} + 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie liczby wyrazów</h2>
      <p className="mb-2">
        Podstawiamy wartości do wzoru:
      </p>
      <BlockMath math={`n = \\frac{${maxNumber} - ${minNumber}}{${difference}} + 1 = \\frac{${maxNumber - minNumber}}{${difference}} + 1 = ${(maxNumber - minNumber) / difference} + 1 = ${numberOfTerms}`} />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba liczb naturalnych czterocyfrowych mniejszych od 2018 i podzielnych przez 5 wynosi  <InlineMath math={numberOfTerms.toString()} /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution169;