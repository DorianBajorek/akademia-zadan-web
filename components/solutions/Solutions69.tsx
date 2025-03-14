import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution69 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja <InlineMath math="g" /> jest określona wzorem <InlineMath math="g(x) = f(x) - 2" /> dla <InlineMath math="x \in (-6, 5)" />. Wskaż zdanie prawdziwe:
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-11_13-48-23.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={300} 
            height={300}  
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> Liczba <InlineMath math="f(2) + g(2)" /> jest równa <InlineMath math="-2" />.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> Zbiory wartości funkcji <InlineMath math="f" /> i <InlineMath math="g" /> są równe.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> Funkcje <InlineMath math="f" /> i <InlineMath math="g" /> mają te same miejsca zerowe.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> Punkt <InlineMath math="P = (0, -2)" /> należy do wykresów funkcji <InlineMath math="f" /> i <InlineMath math="g" />.</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza odpowiedzi A</h2>
      <p className="mb-2">
        Z definicji funkcji <InlineMath math="g(x) = f(x) - 2" />, mamy:
      </p>
      <BlockMath math="f(2) + g(2) = f(2) + (f(2) - 2) = 2f(2) - 2" />
      <p className="mb-2">
        Z wykresu możemy odczytać, że <InlineMath math="f(2) = 0" />, musi zachodzić więc:
      </p>
      <BlockMath math="2f(2) - 2 = 2\cdot 0 - 2 =  -2" />
      <p className="mb-2">
        Zatem odpowiedź A jest poprawna
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Analiza odpowiedzi B</h2>
      <p className="mb-2">
        Zbiór wartości funkcji <InlineMath math="g" /> jest przesunięty o 2 w dół względem zbioru wartości funkcji <InlineMath math="f" />, więc zbiory te nie są równe. Odpowiedź B jest fałszywa.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Analiza odpowiedzi C</h2>
      <p className="mb-2">
        Miejsca zerowe funkcji <InlineMath math="g" /> to takie <InlineMath math="x" />, że <InlineMath math="g(x) = 0" />, czyli <InlineMath math="f(x) - 2 = 0 \Rightarrow f(x) = 2" />. Miejsca zerowe funkcji <InlineMath math="f" /> to <InlineMath math="f(x) = 0" />. Zatem funkcje <InlineMath math="f" /> i <InlineMath math="g" /> nie mają tych samych miejsc zerowych. Odpowiedź C jest fałszywa.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Analiza odpowiedzi D</h2>
      <p className="mb-2">
        Punkt <InlineMath math="P = (0, -2)" /> należy do wykresu funkcji <InlineMath math="g" />, jeśli <InlineMath math="g(0) = -2" />. Z definicji:
      </p>
      <BlockMath math="g(0) = f(0) - 2" />
      <p className="mb-2">
        Aby <InlineMath math="g(0) = -2" />, musi zachodzić <InlineMath math="f(0) = 0" />. Nie ma informacji, że <InlineMath math="f(0) = 0" />, więc odpowiedź D nie musi być prawdziwa.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Wnioski</h2>
      <p className="text-lg font-bold text-green-600">
       Po analizie odpowiedzi okazuje się, że prawidłowa odpwiedź to odpowiedź A.
      </p>
    </div>
  );
};

export default Solution69;