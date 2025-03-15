import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution186 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W trójkącie <InlineMath math="ABC" /> punkt <InlineMath math="D" /> leży na boku <InlineMath math="BC" />, a punkt <InlineMath math="E" /> leży na boku <InlineMath math="AB" />. Odcinek <InlineMath math="DE" /> jest równoległy do boku <InlineMath math="AC" />, a ponadto <InlineMath math="|BD| = 10" />, <InlineMath math="|BC| = 12" /> i <InlineMath math="|AC| = 24" />. Długość odcinka <InlineMath math="DE" /> jest równa:
      </div>
      
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-13_23-40-06.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={300} 
            height={300}  
        />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="22" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="20" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="12" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="11" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza podobieństwa trójkątów</h2>
      <p className="mb-2">
        Ponieważ odcinek <InlineMath math="DE" /> jest równoległy do boku <InlineMath math="AC" />, trójkąty <InlineMath math="ABC" /> i <InlineMath math="DBE" /> są podobne na podstawie cechy kąt-kąt-kąt.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie długości odcinka <InlineMath math="DC" /></h2>
      <p className="mb-2">
        Długość odcinka <InlineMath math="DC" /> wynosi:
      </p>
      <BlockMath math="|DC| = |BC| - |BD| = 12 - 10 = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie skali podobieństwa</h2>
      <p className="mb-2">
        Skala podobieństwa <InlineMath math="k" /> trójkątów <InlineMath math="DBE" /> i <InlineMath math="ABC" /> wynosi:
      </p>
      <BlockMath math="k = \frac{|BD|}{|BC|} = \frac{10}{12} = \frac{5}{6}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie długości odcinka <InlineMath math="DE" /></h2>
      <p className="mb-2">
        Długość odcinka <InlineMath math="DE" /> jest proporcjonalna do długości boku <InlineMath math="AC" /> z uwzględnieniem skali podobieństwa:
      </p>
      <BlockMath math="|DE| = k \cdot |AC| = \frac{5}{6} \cdot 24 = 20" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość odcinka <InlineMath math="DE" /> jest równa <InlineMath math="20" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution186;