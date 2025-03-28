import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja kwadratowa <InlineMath math="f" /> jest określona wzorem <InlineMath math="f(x)=a(x-1)(x-3)" />. Na rysunku przedstawiono fragment paraboli będącej wykres tej funkcji. Wierzchołkiem tej paraboli jest punkt <InlineMath math="W=(2,1)" />. Osią symetrii paraboli będącej wykresem funkcji <InlineMath math="f" /> jest prosta o równaniu
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="x = 1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="x = 2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="y = 1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="y = 2" /></p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-11_19-50-35_muKwh4s.png" 
            alt="Wykres funkcji kwadratowej" 
            className="rounded-lg" 
            width={400} 
            height={400}  
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie osi symetrii paraboli</h2>
      <p className="mb-2">
        Dla funkcji kwadratowej w postaci iloczynowej <InlineMath math="f(x) = a(x-x_1)(x-x_2)" />, oś symetrii paraboli przechodzi przez środek między miejscami zerowymi:
      </p>
      <BlockMath math="x = \frac{x_1 + x_2}{2}" />
      <p className="mb-2">
        W naszym przypadku miejsca zerowe to <InlineMath math="x_1 = 1" /> i <InlineMath math="x_2 = 3" />, więc:
      </p>
      <BlockMath math="x = \frac{1 + 3}{2} = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Potwierdzenie przez współrzędne wierzchołka</h2>
      <p className="mb-2">
        Wierzchołek paraboli <InlineMath math="W = (2, 1)" /> leży na osi symetrii, co potwierdza, że oś symetrii to:
      </p>
      <BlockMath math="x = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Osią symetrii paraboli jest prosta <InlineMath math="x = 2" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;