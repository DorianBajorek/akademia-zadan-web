import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution128 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiony jest fragment paraboli będącej wykresem funkcji kwadratowej <InlineMath math="f" />. Wierzchołkiem tej paraboli jest punkt <InlineMath math="W = (2, -4)" />. Liczby 0 i 4 to miejsca zerowe funkcji <InlineMath math="f" />. Osią symetrii wykresu funkcji <InlineMath math="f" /> jest prosta o równaniu:
      </div>

      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-12_22-21-31.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={300} 
            height={300}  
        />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="y = -4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="x = -4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="y = 2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="x = 2" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zrozumienie osi symetrii paraboli</h2>
      <p className="mb-2">
        Oś symetrii paraboli to pionowa prosta przechodząca przez wierzchołek paraboli. Współrzędna <InlineMath math="x" /> wierzchołka określa równanie osi symetrii.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wyznaczenie równania osi symetrii</h2>
      <p className="mb-2">
        Wierzchołek paraboli ma współrzędne <InlineMath math="W = (2, -4)" />, więc oś symetrii ma równanie:
      </p>
      <BlockMath math="x = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Osią symetrii wykresu funkcji <InlineMath math="f" /> jest prosta o równaniu <InlineMath math="x = 2" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution128;