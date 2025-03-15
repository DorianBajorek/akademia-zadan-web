import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkty <InlineMath math="A, B, C, D" /> leżą na okręgu o środku w punkcie <InlineMath math="O" />. Kąt środkowy <InlineMath math="DOC" /> ma miarę 118°. Miara kąta <InlineMath math="ABC" /> jest równa:
      </div>

      <div className="mb-6 flex justify-center"> <img src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-12_21-07-27.png" alt="Trójkąt prostokątny ABC" className="rounded-lg" width={300} height={300} /> </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="59^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="48^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="62^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="31^\circ" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza kątów wierzchołkowych</h2>
      <p className="mb-2">
        Kąty wierzchołkowe mają tę samą miarę. Kąt środkowy <InlineMath math="DOC" /> ma miarę 118°, więc kąt <InlineMath math="AOB" />, który jest kątem wierzchołkowym do <InlineMath math="DOC" />, również ma miarę 118°.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Analiza trójkąta równoramiennego</h2>
      <p className="mb-2">
        Trójkąt <InlineMath math="AOB" /> jest równoramienny, ponieważ jego ramiona to promienie okręgu (<InlineMath math="AO" /> i <InlineMath math="BO" />). W trójkącie równoramiennym kąty przy podstawie są równe.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie miar kątów w trójkącie</h2>
      <p className="mb-2">
        Suma kątów w trójkącie wynosi 180°. W trójkącie <InlineMath math="AOB" />:
      </p>
      <BlockMath math="\angle AOB + 2 \cdot \angle ABO = 180^\circ" />
      <BlockMath math="118^\circ + 2 \cdot \angle ABO = 180^\circ" />
      <BlockMath math="2 \cdot \angle ABO = 62^\circ" />
      <BlockMath math="\angle ABO = 31^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie miary kąta <InlineMath math="ABC" /></h2>
      <p className="mb-2">
        Kąt <InlineMath math="ABC" /> jest takim samym kątem co <InlineMath math="ABO" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Miara kąta <InlineMath math="ABC" /> jest równa <InlineMath math="31^\circ" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;