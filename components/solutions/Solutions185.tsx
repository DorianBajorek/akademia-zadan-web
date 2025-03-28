import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na okręgu o środku w punkcie <InlineMath math="O" /> leży punkt <InlineMath math="C" /> (zobacz rysunek). Odcinek <InlineMath math="AB" /> jest średnicą tego okręgu. Zaznaczony na rysunku kąt środkowy <InlineMath math="\alpha" /> ma miarę
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_23-39-40.png" 
            alt="Okrąg o środku w punkcie O" 
            className="rounded-lg" 
            width={300} 
            height={300}  
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="116^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="114^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="112^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="110^\circ" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza trójkąta równoramiennego AOC</h2>
      <p className="mb-2">
        Trójkąt <InlineMath math="AOC" /> jest równoramienny (<InlineMath math="OA = OC" /> jako promienie okręgu). Z rysunku wiemy, że:
      </p>
      <BlockMath math="\angle ACO = 56^\circ" />
      <p className="mb-2">
        Z własności trójkąta równoramiennego:
      </p>
      <BlockMath math="\angle OAC = \angle OCA = 56^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie kąta wierzchołkowego AOC</h2>
      <p className="mb-2">
        Suma kątów w trójkącie <InlineMath math="AOC" />:
      </p>
      <BlockMath math="\angle AOC = 180^\circ - \angle OAC - \angle OCA = 180^\circ - 56^\circ - 56^\circ = 68^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie kąta pełnego w punkcie O</h2>
      <p className="mb-2">
        Kąt <InlineMath math="\alpha" /> i kąt <InlineMath math="\angle AOC" /> tworzą razem kąt pełny:
      </p>
      <BlockMath math="\alpha = 180^\circ - \angle AOC = 180^\circ - 68^\circ = 112^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zaznaczony kąt środkowy <InlineMath math="\alpha" /> ma miarę <InlineMath math="112^\circ" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;

