import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkt <InlineMath math="K = (2, 2)" /> jest wierzchołkiem trójkąta równoramiennego <InlineMath math="KLM" />, w którym <InlineMath math="|KM| = |LM|" />. Odcinek <InlineMath math="MN" /> jest wysokością trójkąta i <InlineMath math="N = (4, 3)" />. Zatem:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="L = (5, 3)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="L = (6, 4)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="L = (3, 5)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="L = (4, 6)" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza zadania</h2>
      <p className="mb-2">
        Mamy trójkąt równoramienny <InlineMath math="KLM" />, w którym <InlineMath math="|KM| = |LM|" />. Odcinek <InlineMath math="MN" /> jest wysokością trójkąta, więc punkt <InlineMath math="N" /> jest środkiem podstawy <InlineMath math="KL" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wykorzystanie wzoru na środek odcinka</h2>
      <p className="mb-2">
        Skoro <InlineMath math="N" /> jest środkiem odcinka <InlineMath math="KL" />, to współrzędne punktu <InlineMath math="N" /> można wyrazić jako średnią arytmetyczną współrzędnych punktów <InlineMath math="K" /> i <InlineMath math="L" />:
      </p>
      <BlockMath math="N = \left( \frac{K_x + L_x}{2}, \frac{K_y + L_y}{2} \right)" />
      <p className="mb-2">
        Podstawiamy znane wartości:
      </p>
      <BlockMath math="(4, 3) = \left( \frac{2 + L_x}{2}, \frac{2 + L_y}{2} \right)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równań</h2>
      <p className="mb-2">
        Rozwiązujemy równania dla współrzędnych:
      </p>
      <BlockMath math="4 = \frac{2 + L_x}{2}" />
      <BlockMath math="3 = \frac{2 + L_y}{2}" />
      <p className="mb-2">
        Mnożymy obie strony przez 2:
      </p>
      <BlockMath math="8 = 2 + L_x" />
      <BlockMath math="6 = 2 + L_y" />
      <p className="mb-2">
        Rozwiązujemy równania:
      </p>
      <BlockMath math="L_x = 6" />
      <BlockMath math="L_y = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Punkt <InlineMath math="L" /> ma współrzędne <InlineMath math="(6, 4)" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;