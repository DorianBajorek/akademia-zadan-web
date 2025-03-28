import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkty <InlineMath math="A" />, <InlineMath math="B" />, <InlineMath math="C" /> i <InlineMath math="D" /> leżą na okręgu o środku <InlineMath math="S" />. Miary kątów <InlineMath math="SBC" />, <InlineMath math="BCD" />, <InlineMath math="CDA" /> są równe odpowiednio: <InlineMath math="|\angle SBC| = 60^\circ" />, <InlineMath math="|\angle BCD| = 110^\circ" />, <InlineMath math="|\angle CDA| = 90^\circ" />. Wynika stąd, że miara <InlineMath math="\alpha" /> kąta <InlineMath math="DAS" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="25^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="30^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="35^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="40^\circ" /></p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-11_14-19-53.png" 
            alt="okrąg o środku S" 
            className="rounded-lg" 
            width={300} 
            height={300}  
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza trójkąta SCB</h2>
      <p className="mb-2">
        Trójkąt <InlineMath math="SCB" /> jest równoramienny (<InlineMath math="SC = SB" /> jako promienie okręgu). Ponieważ <InlineMath math="\angle SBC = 60^\circ" />, to:
      </p>
      <BlockMath math="\angle SCB = \angle SBC = 60^\circ" />
      <BlockMath math="\angle BSC = 180^\circ - 2 \times 60^\circ = 60^\circ" />
      <p className="mb-2">
        Zatem trójkąt <InlineMath math="SCB" /> jest równoboczny.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie kąta DCS</h2>
      <p className="mb-2">
        Z rysunku widzimy, że:
      </p>
      <BlockMath math="\angle BCD = 110^\circ = \angle BCS + \angle DCS" />
      <BlockMath math="110^\circ = 60^\circ + \angle DCS" />
      <BlockMath math="\angle DCS = 50^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wykazanie, że AC jest średnicą</h2>
      <p className="mb-2">
        Ponieważ <InlineMath math="\angle CDA = 90^\circ" /> i jest to kąt wpisany oparty na <InlineMath math="AC" />, to <InlineMath math="AC" /> musi być średnicą okręgu.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie kąta DAS</h2>
      <p className="mb-2">
        W trójkącie <InlineMath math="ACD" />:
      </p>
      <BlockMath math="\angle CAD = 180^\circ - \angle ADC - \angle ACD" />
      <BlockMath math="\angle ACD = \angle SCD = 50^\circ" />
      <BlockMath math="\angle CAD = 180^\circ - 90^\circ - 50^\circ = 40^\circ" />
      <p className="mb-2">
        Ponieważ <InlineMath math="AC" /> jest średnicą, punkt <InlineMath math="S" /> jest środkiem okręgu, więc <InlineMath math="\angle DAS = \angle CAD = 40^\circ" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Miara kąta <InlineMath math="DAS" /> wynosi <InlineMath math="40^\circ" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
