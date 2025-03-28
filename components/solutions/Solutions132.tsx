import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkty <InlineMath math="D" /> i <InlineMath math="E" /> leżą na okręgu opisanym na trójkącie równobocznym <InlineMath math="ABC" /> (zobacz rysunek). Odcinek <InlineMath math="CD" /> jest średnicą tego okręgu. Kąt wpisany <InlineMath math="DEB" /> ma miarę <InlineMath math="\alpha" />. Zatem:
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">A: <InlineMath math="\alpha = 30^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">B: <InlineMath math="\alpha < 30^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">C: <InlineMath math="\alpha > 45^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">D: <InlineMath math="\alpha = 45^\circ" /></p>
        </div>
      </div>

      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-12_22-18-55.png" 
            alt="Trójkąt równoboczny ABC" 
            className="rounded-lg" 
            width={350} 
            height={350}  
        />
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Analiza konstrukcji</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Trójkąt <InlineMath math="ABC" /> jest równoboczny, więc wszystkie kąty mają <InlineMath math="60^\circ" /></li>
            <li>Punkt <InlineMath math="D" /> leży na okręgu, a <InlineMath math="CD" /> jest średnicą</li>
            <li>Zatem trójkąt <InlineMath math="CBD" /> jest prostokątny (kąt <InlineMath math="CBD = 90^\circ" />)</li>
            <li> Kąty <InlineMath math="\angle CDB = \angle CAB = 60^\circ"/> są równe, oparte na tym samym łuku <InlineMath math="CB"/> </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. Wyznaczenie kątów</h3>
          <div className="space-y-2">
            <p>Kąt <InlineMath math="DCB" /> w trójkącie prostokątnym <InlineMath math="CBD" />:</p>
            <BlockMath math="\angle DCB = 180^\circ - 90^\circ - 60^\circ = 30^\circ" />
            <p>Kąt wpisany <InlineMath math="DEB" /> oparty na tym samym łuku co kąt <InlineMath math="DCB" />:</p>
            <BlockMath math="\alpha = \angle DEB = \angle DCB = 30^\circ" />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Miara kąta <InlineMath math="\alpha =30^\circ" /> (Odpowiedź A)
      </p>
      </div>
    </div>
  );
};

export default Solution;